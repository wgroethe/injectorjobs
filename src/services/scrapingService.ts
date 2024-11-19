import { ScrapingBeeClient } from 'scrapingbee';
import { supabase } from '../lib/supabase';
import type { Job } from '../types';

const client = new ScrapingBeeClient(process.env.SCRAPINGBEE_API_KEY);

interface ScrapedJob {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  company_logo: string;
  tags: string[];
  source_url: string;
}

export async function scrapeJobs(url: string): Promise<ScrapedJob[]> {
  try {
    const response = await client.get({
      url,
      params: {
        render_js: false,
        extract_rules: {
          jobs: {
            selector: 'job-listing', // Adjust selector based on target site
            type: 'list',
            output: {
              title: 'h2',
              company: '.company-name',
              location: '.location',
              salary: '.salary',
              type: '.job-type',
              description: '.description',
              company_logo: { selector: 'img', output: '@src' },
              tags: { selector: '.tags span', type: 'list' },
              source_url: { selector: 'a', output: '@href' }
            }
          }
        }
      }
    });

    return response.data.jobs;
  } catch (error) {
    console.error('Error scraping jobs:', error);
    throw error;
  }
}

export async function importJobsToSupabase(jobs: ScrapedJob[]): Promise<void> {
  try {
    const { error } = await supabase.from('jobs').insert(
      jobs.map(job => ({
        title: job.title,
        company: job.company,
        location: job.location,
        salary: job.salary,
        type: job.type,
        description: job.description,
        company_logo: job.company_logo,
        tags: job.tags,
        source_url: job.source_url,
        imported: true
      }))
    );

    if (error) throw error;
    console.log(`Successfully imported ${jobs.length} jobs`);
  } catch (error) {
    console.error('Error importing jobs to Supabase:', error);
    throw error;
  }
}