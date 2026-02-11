"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal, X } from "lucide-react"
import { formatSalary } from "@/lib/jobs-data"

interface JobsFiltersProps {
  experienceLevels: string[]
  setExperienceLevels: (levels: string[]) => void
  jobTypes: string[]
  setJobTypes: (types: string[]) => void
  salaryRange: [number, number]
  setSalaryRange: (range: [number, number]) => void
  onReset: () => void
}

const EXPERIENCE_OPTIONS = ["Intern", "Junior", "Mid", "Senior", "Lead"]
const JOB_TYPE_OPTIONS = ["Full-time", "Part-time", "Contract", "Remote", "Freelance"]

export function JobsFilters({
  experienceLevels,
  setExperienceLevels,
  jobTypes,
  setJobTypes,
  salaryRange,
  setSalaryRange,
  onReset,
}: JobsFiltersProps) {
  function toggleExperience(level: string) {
    if (experienceLevels.includes(level)) {
      setExperienceLevels(experienceLevels.filter((l) => l !== level))
    } else {
      setExperienceLevels([...experienceLevels, level])
    }
  }

  function toggleJobType(type: string) {
    if (jobTypes.includes(type)) {
      setJobTypes(jobTypes.filter((t) => t !== type))
    } else {
      setJobTypes([...jobTypes, type])
    }
  }

  const hasActiveFilters =
    experienceLevels.length > 0 ||
    jobTypes.length > 0 ||
    salaryRange[0] > 0 ||
    salaryRange[1] < 250000

  return (
    <aside className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-foreground" />
          <h2 className="font-semibold text-foreground">Filters</h2>
        </div>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={onReset} className="h-auto px-2 py-1 text-xs text-muted-foreground">
            <X className="mr-1 h-3 w-3" />
            Reset
          </Button>
        )}
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-medium text-foreground">Experience Level</h3>
        <div className="mt-3 flex flex-col gap-3">
          {EXPERIENCE_OPTIONS.map((level) => (
            <div key={level} className="flex items-center gap-2.5">
              <Checkbox
                id={`level-${level}`}
                checked={experienceLevels.includes(level)}
                onCheckedChange={() => toggleExperience(level)}
              />
              <Label
                htmlFor={`level-${level}`}
                className="cursor-pointer text-sm text-muted-foreground"
              >
                {level}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 border-t border-border pt-6">
        <h3 className="text-sm font-medium text-foreground">Job Type</h3>
        <div className="mt-3 flex flex-col gap-3">
          {JOB_TYPE_OPTIONS.map((type) => (
            <div key={type} className="flex items-center gap-2.5">
              <Checkbox
                id={`type-${type}`}
                checked={jobTypes.includes(type)}
                onCheckedChange={() => toggleJobType(type)}
              />
              <Label
                htmlFor={`type-${type}`}
                className="cursor-pointer text-sm text-muted-foreground"
              >
                {type}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 border-t border-border pt-6">
        <h3 className="text-sm font-medium text-foreground">Salary Range</h3>
        <div className="mt-4">
          <Slider
            defaultValue={[salaryRange[0], salaryRange[1]]}
            value={[salaryRange[0], salaryRange[1]]}
            max={250000}
            min={0}
            step={5000}
            onValueChange={(value) => setSalaryRange([value[0], value[1]])}
            className="w-full"
          />
          <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
            <span>{formatSalary(salaryRange[0])}</span>
            <span>{formatSalary(salaryRange[1])}</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
