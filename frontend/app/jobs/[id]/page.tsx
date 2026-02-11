import { notFound } from "next/navigation"
import Link from "next/link"
import {
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  BarChart3,
  Building2,
  ArrowLeft,
  Share2,
  Bookmark,
  CheckCircle2,
  ExternalLink,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { JobCard } from "@/components/job-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { jobs, formatSalary } from "@/lib/jobs-data"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function JobDetailPage({ params }: PageProps) {
  const { id } = await params
  const job = jobs.find((j) => j.id === id)

  if (!job) {
    notFound()
  }

  const relatedJobs = jobs
    .filter((j) => j.id !== job.id && (j.type === job.type || j.level === job.level))
    .slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Header */}
        <div className="border-b border-border bg-card px-4 py-8 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/jobs"
              className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to jobs
            </Link>

            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl text-2xl font-bold ${job.companyColor}`}
                >
                  {job.companyInitial}
                </div>
                <div>
                  <h1 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                    {job.title}
                  </h1>
                  <p className="mt-1 text-lg text-muted-foreground">
                    {job.company}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <Badge variant="secondary" className="gap-1">
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </Badge>
                    <Badge variant="secondary" className="gap-1">
                      <Briefcase className="h-3 w-3" />
                      {job.type}
                    </Badge>
                    <Badge variant="secondary" className="gap-1">
                      <BarChart3 className="h-3 w-3" />
                      {job.level}
                    </Badge>
                    <Badge variant="secondary" className="gap-1">
                      <Clock className="h-3 w-3" />
                      {job.postedDate}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <Button variant="outline" size="icon" aria-label="Share job">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" aria-label="Save job">
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Button size="lg" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-10 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-col gap-10 lg:flex-row">
            {/* Main content */}
            <div className="flex-1">
              <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
                <h2 className="font-display text-xl font-bold text-foreground">
                  Job Description
                </h2>
                <div className="prose-job mt-4">
                  {job.description.split("\n\n").map((paragraph, i) => {
                    if (paragraph.startsWith("## ")) {
                      return (
                        <h3
                          key={i}
                          className="mb-3 mt-8 text-lg font-semibold text-foreground first:mt-0"
                        >
                          {paragraph.replace("## ", "")}
                        </h3>
                      )
                    }
                    if (paragraph.startsWith("- ")) {
                      return (
                        <ul key={i} className="mb-4 flex flex-col gap-2">
                          {paragraph.split("\n").map((line, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              {line.replace("- ", "")}
                            </li>
                          ))}
                        </ul>
                      )
                    }
                    return (
                      <p
                        key={i}
                        className="mb-4 text-sm leading-relaxed text-muted-foreground"
                      >
                        {paragraph}
                      </p>
                    )
                  })}
                </div>

                <Separator className="my-8" />

                <h2 className="font-display text-xl font-bold text-foreground">
                  Requirements
                </h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {job.requirements.map((req, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {req}
                    </li>
                  ))}
                </ul>

                <Separator className="my-8" />

                <h2 className="font-display text-xl font-bold text-foreground">
                  Benefits
                </h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {job.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full shrink-0 lg:w-80">
              <div className="sticky top-24 flex flex-col gap-6">
                {/* Job Overview */}
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-foreground">Job Overview</h3>
                  <div className="mt-4 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <DollarSign className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Salary</p>
                        <p className="text-sm font-medium text-foreground">
                          {formatSalary(job.salaryMin)} - {formatSalary(job.salaryMax)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Job Type</p>
                        <p className="text-sm font-medium text-foreground">{job.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <BarChart3 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Experience</p>
                        <p className="text-sm font-medium text-foreground">{job.level}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Location</p>
                        <p className="text-sm font-medium text-foreground">{job.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Posted</p>
                        <p className="text-sm font-medium text-foreground">{job.postedDate}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* About Company */}
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold ${job.companyColor}`}
                    >
                      {job.companyInitial}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{job.company}</h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Building2 className="h-3 w-3" />
                        Technology
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {job.about}
                  </p>
                  <Button variant="outline" size="sm" className="mt-4 w-full bg-transparent">
                    View Company Profile
                  </Button>
                </div>

                {/* Sticky Apply */}
                <Button size="lg" className="w-full gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Apply Now
                </Button>
              </div>
            </div>
          </div>

          {/* Related Jobs */}
          {relatedJobs.length > 0 && (
            <div className="mx-auto mt-16 max-w-5xl">
              <h2 className="font-display text-2xl font-bold text-foreground">
                Related Jobs
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Similar positions you might be interested in
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {relatedJobs.map((relatedJob) => (
                  <JobCard key={relatedJob.id} job={relatedJob} variant="grid" />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
