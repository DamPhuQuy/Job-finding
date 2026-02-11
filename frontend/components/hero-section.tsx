"use client"

import { Search, MapPin, ChevronDown, TrendingUp, Building2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function HeroSection() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [jobType, setJobType] = useState("")

  function handleSearch() {
    const params = new URLSearchParams()
    if (title) params.set("q", title)
    if (location) params.set("location", location)
    if (jobType) params.set("type", jobType)
    router.push(`/jobs?${params.toString()}`)
  }

  return (
    <section className="relative overflow-hidden bg-primary px-4 py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(226,71%,55%)_0%,_transparent_50%)] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(210,80%,30%)_0%,_transparent_50%)] opacity-30" />

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground">
          <TrendingUp className="h-4 w-4" />
          <span>Over 10,000+ jobs posted this month</span>
        </div>

        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
          <span className="text-balance">
            Find Your Dream Career Today
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          Discover thousands of job opportunities from the world&apos;s top companies. Your next big opportunity is just a search away.
        </p>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="flex flex-col gap-3 rounded-2xl bg-card p-3 shadow-2xl md:flex-row md:items-center">
            <div className="flex flex-1 items-center gap-2 rounded-lg bg-secondary px-4 py-3">
              <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
              <input
                type="text"
                placeholder="Job title or keyword..."
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>
            <div className="flex flex-1 items-center gap-2 rounded-lg bg-secondary px-4 py-3">
              <MapPin className="h-5 w-5 shrink-0 text-muted-foreground" />
              <input
                type="text"
                placeholder="Location..."
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>
            <div className="relative flex flex-1 items-center gap-2 rounded-lg bg-secondary px-4 py-3">
              <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />
              <select
                className="w-full cursor-pointer appearance-none bg-transparent text-sm text-foreground focus:outline-none"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
              >
                <option value="">All Job Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Remote">Remote</option>
                <option value="Freelance">Freelance</option>
              </select>
            </div>
            <Button
              size="lg"
              className="shrink-0 bg-primary px-8 text-primary-foreground hover:bg-primary/90"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-primary-foreground/70">
          <div className="flex items-center gap-2 text-sm">
            <Building2 className="h-4 w-4" />
            <span>500+ Companies</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4" />
            <span>1M+ Job Seekers</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp className="h-4 w-4" />
            <span>98% Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  )
}
