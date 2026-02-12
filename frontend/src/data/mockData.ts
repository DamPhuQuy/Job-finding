import { Job, JobType } from "../types";

export const featuredJobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    salaryRange: "$120k - $160k",
    postedDate: "2 days ago",
    type: "Full-time",
  },
  {
    id: "2",
    title: "UX/UI Designer",
    company: "Design Studio",
    location: "New York, NY",
    salaryRange: "$90k - $130k",
    postedDate: "1 week ago",
    type: "Full-time",
  },
  {
    id: "3",
    title: "Backend Engineer",
    company: "CloudTech Solutions",
    location: "Remote",
    salaryRange: "$110k - $150k",
    postedDate: "3 days ago",
    type: "Remote",
  },
  {
    id: "4",
    title: "Product Manager",
    company: "Innovation Labs",
    location: "Austin, TX",
    salaryRange: "$130k - $170k",
    postedDate: "5 days ago",
    type: "Full-time",
  },
  {
    id: "5",
    title: "Data Scientist",
    company: "Analytics Pro",
    location: "Boston, MA",
    salaryRange: "$115k - $155k",
    postedDate: "1 day ago",
    type: "Contract",
  },
  {
    id: "6",
    title: "DevOps Engineer",
    company: "Infrastructure Co.",
    location: "Seattle, WA",
    salaryRange: "$125k - $165k",
    postedDate: "4 days ago",
    type: "Full-time",
  },
];

export const jobTypes: JobType[] = [
  "All Types",
  "Full-time",
  "Part-time",
  "Contract",
  "Remote",
];
