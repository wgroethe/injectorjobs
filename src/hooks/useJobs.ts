import { useState, useEffect } from 'react';
import type { Job } from '../types';
import { getJobs } from '../services/jobService';
import { supabase } from '../lib/supabase';
import { jobs as localJobs } from '../data/jobs';

interface JobFilters {
  jobType: string[];
  experience: string[];
  salary: string[];
}

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>(localJobs);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(localJobs);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 10;

  // Test Supabase connection and fetch jobs
  useEffect(() => {
    async function fetchJobs() {
      setIsLoading(true);
      setError(null);
      try {
        console.log('Testing Supabase connection...');
        const { data, error } = await supabase
          .from('jobs')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Supabase error:', error);
          setError(`Database error: ${error.message}`);
          return;
        }

        console.log('Supabase connection successful!');
        console.log('Fetched jobs:', data);

        if (data && data.length > 0) {
          const formattedJobs = data.map(job => ({
            id: job.id,
            title: job.title,
            company: job.company,
            location: job.location,
            salary: job.salary,
            type: job.type,
            description: job.description,
            postedAt: job.created_at,
            companyLogo: job.company_logo,
            tags: job.tags || [],
          }));
          setJobs(formattedJobs);
          setFilteredJobs(formattedJobs);
        }
      } catch (err) {
        console.error('Error:', err);
        setError('Failed to connect to the database');
      } finally {
        setIsLoading(false);
      }
    }

    fetchJobs();
  }, []);

  const searchJobs = (query: string, location: string) => {
    setSearchQuery(query);
    setSearchLocation(location);
    
    let filtered = [...jobs];

    if (query) {
      const searchTerms = query.toLowerCase().split(' ');
      filtered = filtered.filter(job => 
        searchTerms.every(term =>
          job.title.toLowerCase().includes(term) ||
          job.company.toLowerCase().includes(term) ||
          job.description.toLowerCase().includes(term) ||
          job.tags.some(tag => tag.toLowerCase().includes(term))
        )
      );
    }

    if (location) {
      const locationTerm = location.toLowerCase();
      filtered = filtered.filter(job =>
        job.location.toLowerCase().includes(locationTerm)
      );
    }

    setFilteredJobs(filtered);
    setCurrentPage(1);
  };

  const filterJobs = (filters: JobFilters) => {
    let filtered = [...jobs];

    if (filters.jobType.length > 0) {
      filtered = filtered.filter(job =>
        filters.jobType.includes(job.type)
      );
    }

    if (filters.salary.length > 0) {
      filtered = filtered.filter(job =>
        filters.salary.some(range => job.salary.includes(range))
      );
    }

    setFilteredJobs(filtered);
    setCurrentPage(1);
  };

  const getPaginatedJobs = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredJobs.slice(startIndex, endIndex);
  };

  return {
    paginatedJobs: getPaginatedJobs(),
    totalJobs: filteredJobs.length,
    searchJobs,
    filterJobs,
    isLoading,
    error,
  };
}