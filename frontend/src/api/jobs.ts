export type JobTypeName = "Full-time" | "Part-time" | "Contract" | "Remote" | string;

export interface JobTypeDto {
  id: number;
  name: JobTypeName;
}

export interface ExperienceLevelDto {
  id: number;
  name: string;
}

export interface JobSummaryResponse {
  id: number;
  title: string;
  company: string;
  location: string;
  minSalary: number | null;
  maxSalary: number | null;
  salaryCurrency: string | null;
  jobType: JobTypeDto | null;
  experienceLevel: ExperienceLevelDto | null;
  postedDate: string | null;
}

export interface SliceResponse<T> {
  content: T[];
  number: number;
  size: number;
  numberOfElements: number;
  first: boolean;
  last: boolean;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

const buildUrl = (path: string, params?: Record<string, string>) => {
  const url = new URL(`${API_BASE_URL}${path}`, window.location.origin);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value.trim()) {
        url.searchParams.set(key, value);
      }
    });
  }
  return url.toString();
};

export const searchJobs = async (params: {
  title?: string;
  location?: string;
}): Promise<JobSummaryResponse[]> => {
  const title = params.title?.trim() ?? "";
  const location = params.location?.trim() ?? "";

  if (!title && !location) {
    const response = await fetch(buildUrl("/api/jobs"));
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = (await response.json()) as JobSummaryResponse[];
    return data ?? [];
  }

  let endpoint = "/api/jobs/search/title";
  let query: Record<string, string> = { keyword: title };

  if (!title && location) {
    endpoint = "/api/jobs/search/location";
    query = { location };
  }

  const response = await fetch(buildUrl(endpoint, query));
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const data = (await response.json()) as SliceResponse<JobSummaryResponse>;
  return data.content ?? [];
};
