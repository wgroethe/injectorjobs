import React, { useState, useEffect } from 'react';
import { Search, MapPin } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string, location: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(query, location);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, location, onSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, location);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center gap-2 px-4">
          <Search className="w-5 h-5 text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Job title, keywords, or company"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full outline-none text-gray-700 min-h-[40px]"
          />
        </div>
        
        <div className="flex items-center gap-2 px-4 border-t pt-4 md:border-t-0 md:pt-0">
          <MapPin className="w-5 h-5 text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="City, state, or remote"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full outline-none text-gray-700 min-h-[40px]"
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-auto px-6 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
        >
          Search Jobs
        </button>
      </div>
    </form>
  );
}