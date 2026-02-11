import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { JobCard } from "@/components/job-card"
import { jobs } from "@/lib/jobs-data"

export function FeaturedJobs() {
  const featuredJobs = jobs.filter((job) => job.featured)

  return (
    <section className="px-4 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground">
              Featured Jobs
            </h2>
            <p className="mt-2 text-muted-foreground">
              Hand-picked opportunities from top companies
            </p>
          </div>
          <Button variant="ghost" asChild className="hidden md:inline-flex">
            <Link href="/jobs" className="gap-2">
              View all jobs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} variant="grid" />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link href="/jobs" className="gap-2">
              View all jobs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
