export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salaryRange: string;
  postedDate: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  logo?: string;
}

export type JobType =
  | "All Types"
  | "Full-time"
  | "Part-time"
  | "Contract"
  | "Remote";
