import {
  Briefcase,
  Building2,
  ChevronDown,
  Clock,
  DollarSign,
  MapPin,
  Search,
} from "lucide-react";
import React, { useState } from "react";
import { Job, JobType } from "../types";

const LandingPage: React.FC = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState<JobType>("All Types");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Mock data for featured jobs
  const featuredJobs: Job[] = [
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

  const jobTypes: JobType[] = [
    "All Types",
    "Full-time",
    "Part-time",
    "Contract",
    "Remote",
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", { jobTitle, location, jobType });
    // Implement search logic here
  };

  const getJobTypeColor = (type: string): string => {
    const colors: Record<string, string> = {
      "Full-time": "bg-indigo-100 text-indigo-700",
      "Part-time": "bg-green-100 text-green-700",
      Contract: "bg-yellow-100 text-yellow-700",
      Remote: "bg-purple-100 text-purple-700",
    };
    return colors[type] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-slate-900">
                JobFinder
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-slate-600 hover:text-indigo-600 transition-colors"
              >
                Find Jobs
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-indigo-600 transition-colors"
              >
                Companies
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-indigo-600 transition-colors"
              >
                Post a Job
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">
                Sign In
              </button>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Find Your <span className="text-indigo-600">Dream Job</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover thousands of job opportunities from top companies
              worldwide. Your next career move starts here.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-5xl mx-auto">
            <form
              onSubmit={handleSearch}
              className="bg-white rounded-2xl shadow-xl p-4 md:p-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Job Title Input */}
                <div className="md:col-span-5 relative">
                  <label
                    htmlFor="job-title"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Job Title
                  </label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      id="job-title"
                      type="text"
                      placeholder="e.g. Software Engineer"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Location Input */}
                <div className="md:col-span-4 relative">
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      id="location"
                      type="text"
                      placeholder="City or Remote"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Job Type Dropdown */}
                <div className="md:col-span-3 relative">
                  <label
                    htmlFor="job-type"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Job Type
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white text-left focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all flex items-center justify-between"
                    >
                      <span className="text-slate-700">{jobType}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-slate-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute z-10 w-full mt-2 bg-white border border-slate-200 rounded-lg shadow-lg">
                        {jobTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => {
                              setJobType(type);
                              setIsDropdownOpen(false);
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-indigo-50 text-slate-700 first:rounded-t-lg last:rounded-b-lg transition-colors"
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                >
                  Search Jobs
                </button>
              </div>
            </form>

            {/* Popular Searches */}
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-600 mb-3">Popular searches:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Frontend Developer",
                  "Product Manager",
                  "Data Scientist",
                  "UX Designer",
                  "DevOps",
                ].map((term) => (
                  <button
                    key={term}
                    className="px-4 py-2 bg-white text-slate-700 rounded-full text-sm hover:bg-indigo-50 hover:text-indigo-600 transition-colors border border-slate-200"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Featured Jobs
            </h2>
            <p className="text-lg text-slate-600">
              Handpicked opportunities from top companies
            </p>
          </div>

          {/* Jobs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:border-indigo-200 transition-all cursor-pointer group"
              >
                {/* Company Logo Placeholder */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg flex items-center justify-center">
                    <Building2 className="h-7 w-7 text-indigo-600" />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getJobTypeColor(job.type)}`}
                  >
                    {job.type}
                  </span>
                </div>

                {/* Job Details */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {job.title}
                </h3>

                <p className="text-slate-600 font-medium mb-4">{job.company}</p>

                <div className="space-y-2">
                  <div className="flex items-center text-slate-600">
                    <MapPin className="h-4 w-4 mr-2 text-slate-400" />
                    <span className="text-sm">{job.location}</span>
                  </div>

                  <div className="flex items-center text-slate-600">
                    <DollarSign className="h-4 w-4 mr-2 text-slate-400" />
                    <span className="text-sm font-semibold">
                      {job.salaryRange}
                    </span>
                  </div>

                  <div className="flex items-center text-slate-500">
                    <Clock className="h-4 w-4 mr-2 text-slate-400" />
                    <span className="text-sm">{job.postedDate}</span>
                  </div>
                </div>

                {/* Apply Button */}
                <button className="mt-6 w-full py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          {/* View All Jobs Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">
              View All Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Briefcase className="h-6 w-6 text-indigo-600" />
                <span className="text-xl font-bold text-slate-900">
                  JobFinder
                </span>
              </div>
              <p className="text-slate-600 text-sm">
                Your gateway to exciting career opportunities worldwide.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">
                For Job Seekers
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-600 transition-colors"
                  >
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-600 transition-colors"
                  >
                    Career Advice
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-600 transition-colors"
                  >
                    Resume Builder
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">
                For Employers
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-600 transition-colors"
                  >
                    Post a Job
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-600 transition-colors"
                  >
                    Browse Candidates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-600 transition-colors"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-600 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-600 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-600 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200 text-center text-sm text-slate-600">
            <p>&copy; 2026 JobFinder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
