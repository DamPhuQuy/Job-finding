import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturedJobs } from "@/components/featured-jobs"
import { Briefcase, FileText, Send } from "lucide-react"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturedJobs />

        <section className="border-t border-border bg-card px-4 py-16 lg:py-20">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground">
              How It Works
            </h2>
            <p className="mt-2 text-muted-foreground">
              Get started in three simple steps
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Briefcase className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Browse Jobs
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Search through thousands of curated job listings from top companies worldwide.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Create Profile
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Build your professional profile to stand out and get noticed by employers.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Send className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Apply & Get Hired
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Apply to your dream roles with one click and track your application status.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
