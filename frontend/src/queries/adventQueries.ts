import { queryOptions } from '@tanstack/react-query';

interface AdventDay {
  day: number;
  title: string;
  description: string;
  content: string;
  tweetId: string;
  unlocked: boolean;
  date: string;
  features?: string[];
  githubExample?: string;
  githubUrl?: string;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

const API_URL = import.meta.env.VITE_API_URL || '';

async function fetchAdventDays(): Promise<ApiResponse<AdventDay[]>> {
  const response = await fetch(`${API_URL}/api/advent-days`);
  if (!response.ok) {
    throw new Error('Failed to fetch advent days');
  }
  return response.json();
}

async function fetchAdventDay(day: number): Promise<ApiResponse<AdventDay>> {
  const response = await fetch(`${API_URL}/api/advent-days/${day}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch day ${day}`);
  }
  return response.json();
}

export const adventDaysQueryOptions = queryOptions({
  queryKey: ['advent-days'],
  queryFn: fetchAdventDays
});

export const adventDayQueryOptions = (day: number) =>
  queryOptions({
    queryKey: ['advent-day', day],
    queryFn: () => fetchAdventDay(day)
  });
