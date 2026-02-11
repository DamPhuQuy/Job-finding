import Link from "next/link"
import { Briefcase } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Briefcase className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                JobBoard
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Connecting talent with opportunity. Find your dream career today.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">For Job Seekers</h4>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <Link href="/jobs" className="text-sm text-muted-foreground hover:text-foreground">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Career Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Salary Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">For Employers</h4>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Employer Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-sm text-muted-foreground">
            {"2026 JobBoard. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
