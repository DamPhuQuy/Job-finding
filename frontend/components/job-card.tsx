'use client';

import Link from "next/link"
import { MapPin, Clock, Bookmark } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Job } from "@/lib/jobs-data"
import { formatSalary } from "@/lib/jobs-data"

interface JobCardProps {
  job: Job
  variant?: "grid" | "list"
}

export function JobCard({ job, variant = "grid" }: JobCardProps) {
  if (variant === "list") {
    return (
      <Link href={`/jobs/${job.id}`} className="group block">
        <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-lg font-bold ${job.companyColor}`}
            >
              {job.companyInitial}
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-foreground group-hover:text-primary">
                {job.title}
              </h3>
              <p className="mt-0.5 text-sm text-muted-foreground">{job.company}</p>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {job.postedDate}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-2">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{job.type}</Badge>
              <Badge variant="outline">{job.level}</Badge>
            </div>
            <p className="text-sm font-semibold text-foreground">
              {formatSalary(job.salaryMin)} - {formatSalary(job.salaryMax)}
            </p>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/jobs/${job.id}`} className="group block">
      <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md">
        <div className="flex items-start justify-between">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-lg text-lg font-bold ${job.companyColor}`}
          >
            {job.companyInitial}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            onClick={(e) => e.preventDefault()}
            aria-label="Save job"
          >
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-4 flex-1">
          <h3 className="font-semibold text-foreground group-hover:text-primary">
            {job.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{job.company}</p>
        </div>

        <div className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          {job.location}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{job.type}</Badge>
          <Badge variant="outline">{job.level}</Badge>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <p className="text-sm font-semibold text-foreground">
            {formatSalary(job.salaryMin)} - {formatSalary(job.salaryMax)}
          </p>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {job.postedDate}
          </span>
        </div>
      </div>
    </Link>
  )
}
