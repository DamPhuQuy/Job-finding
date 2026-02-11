"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { JobCard } from "@/components/job-card"
import { JobsFilters } from "@/components/jobs-filters"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { jobs } from "@/lib/jobs-data"

const ITEMS_PER_PAGE = 6

export default function JobsPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""
  const initialLocation = searchParams.get("location") || ""
  const initialType = searchParams.get("type") || ""

  const [query, setQuery] = useState(initialQuery)
  const [locationFilter, setLocationFilter] = useState(initialLocation)
  const [experienceLevels, setExperienceLevels] = useState<string[]>([])
  const [jobTypes, setJobTypes] = useState<string[]>(
    initialType ? [initialType] : []
  )
  const [salaryRange, setSalaryRange] = useState<[number, number]>([0, 250000])
  const [currentPage, setCurrentPage] = useState(1)

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesQuery =
        !query ||
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company.toLowerCase().includes(query.toLowerCase())

      const matchesLocation =
        !locationFilter ||
        job.location.toLowerCase().includes(locationFilter.toLowerCase())

      const matchesLevel =
        experienceLevels.length === 0 || experienceLevels.includes(job.level)

      const matchesType =
        jobTypes.length === 0 || jobTypes.includes(job.type)

      const matchesSalary =
        job.salaryMin >= salaryRange[0] && job.salaryMax <= salaryRange[1]

      return matchesQuery && matchesLocation && matchesLevel && matchesType && matchesSalary
    })
  }, [query, locationFilter, experienceLevels, jobTypes, salaryRange])

  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE)
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  function resetFilters() {
    setExperienceLevels([])
    setJobTypes([])
    setSalaryRange([0, 250000])
    setCurrentPage(1)
  }

  const activeFilterCount =
    experienceLevels.length +
    jobTypes.length +
    (salaryRange[0] > 0 || salaryRange[1] < 250000 ? 1 : 0)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 px-4 py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Search Bar */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-border bg-card px-4 py-3">
              <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search job title or company..."
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setCurrentPage(1)
                }}
              />
              {query && (
                <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
                  <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                </button>
              )}
            </div>
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 sm:max-w-xs">
              <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
              <input
                type="text"
                placeholder="Location..."
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                value={locationFilter}
                onChange={(e) => {
                  setLocationFilter(e.target.value)
                  setCurrentPage(1)
                }}
              />
            </div>
          </div>

          {/* Active filters pills */}
          {activeFilterCount > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {experienceLevels.map((level) => (
                <Badge key={level} variant="secondary" className="gap-1">
                  {level}
                  <button
                    type="button"
                    onClick={() =>
                      setExperienceLevels(experienceLevels.filter((l) => l !== level))
                    }
                    aria-label={`Remove ${level} filter`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              {jobTypes.map((type) => (
                <Badge key={type} variant="secondary" className="gap-1">
                  {type}
                  <button
                    type="button"
                    onClick={() => setJobTypes(jobTypes.filter((t) => t !== type))}
                    aria-label={`Remove ${type} filter`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          )}

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{filteredJobs.length}</span>{" "}
              {filteredJobs.length === 1 ? "job" : "jobs"} found
            </p>
            {/* Mobile filter trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="lg:hidden bg-transparent">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filters
                  {activeFilterCount > 0 && (
                    <Badge className="ml-2 h-5 w-5 justify-center rounded-full p-0 text-xs">
                      {activeFilterCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 overflow-y-auto">
                <SheetTitle className="sr-only">Filters</SheetTitle>
                <div className="py-4">
                  <JobsFilters
                    experienceLevels={experienceLevels}
                    setExperienceLevels={setExperienceLevels}
                    jobTypes={jobTypes}
                    setJobTypes={setJobTypes}
                    salaryRange={salaryRange}
                    setSalaryRange={setSalaryRange}
                    onReset={resetFilters}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="mt-6 flex gap-8">
            {/* Desktop sidebar */}
            <div className="hidden w-72 shrink-0 lg:block">
              <div className="sticky top-24">
                <JobsFilters
                  experienceLevels={experienceLevels}
                  setExperienceLevels={setExperienceLevels}
                  jobTypes={jobTypes}
                  setJobTypes={setJobTypes}
                  salaryRange={salaryRange}
                  setSalaryRange={setSalaryRange}
                  onReset={resetFilters}
                />
              </div>
            </div>

            {/* Job listings */}
            <div className="flex-1">
              {paginatedJobs.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {paginatedJobs.map((job) => (
                    <JobCard key={job.id} job={job} variant="list" />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-20">
                  <Search className="h-10 w-10 text-muted-foreground" />
                  <h3 className="mt-4 font-semibold text-foreground">No jobs found</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Try adjusting your search or filters
                  </p>
                  <Button variant="outline" size="sm" className="mt-4 bg-transparent" onClick={resetFilters}>
                    Reset Filters
                  </Button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    Previous
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      className="h-9 w-9 p-0"
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
