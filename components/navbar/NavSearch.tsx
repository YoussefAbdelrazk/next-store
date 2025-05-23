'use client';
import { Input } from '../ui/input';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useState, useEffect, useMemo } from 'react';

export default function NavSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  
  const searchValue = useMemo(() => searchParams.get('search'), [searchParams]);
  
  const [search, setSearch] = useState(searchValue?.toString() || '');
  
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    replace(`/products?${params.toString()}`);
  }, 300);

  useEffect(() => {
    if (!searchValue) {
      setSearch('');
    }
  }, [searchValue]);

  return (
    <Input
      type='search'
      placeholder='search product...'
      className='max-w-xs dark:bg-muted'
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
      value={search}
    />
  );
}
