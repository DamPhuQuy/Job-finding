export interface Job {
  id: string
  title: string
  company: string
  companyInitial: string
  companyColor: string
  location: string
  salaryMin: number
  salaryMax: number
  type: "Full-time" | "Part-time" | "Contract" | "Remote" | "Freelance"
  level: "Intern" | "Junior" | "Mid" | "Senior" | "Lead"
  postedDate: string
  description: string
  requirements: string[]
  benefits: string[]
  about: string
  featured: boolean
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Engineer",
    company: "Vercel",
    companyInitial: "V",
    companyColor: "bg-foreground text-background",
    location: "San Francisco, CA",
    salaryMin: 150000,
    salaryMax: 200000,
    type: "Full-time",
    level: "Senior",
    postedDate: "2 days ago",
    featured: true,
    description: `We are looking for a Senior Frontend Engineer to join our team and help build the future of web development. You will work on our core platform, building tools that millions of developers use every day.

## Responsibilities

- Design and implement new features for our web platform
- Collaborate with designers and product managers to define requirements
- Write clean, maintainable, and well-tested code
- Mentor junior developers and participate in code reviews
- Contribute to architecture decisions and technical direction

## What You'll Work On

You'll be building the next generation of developer tools, working with cutting-edge web technologies including React, Next.js, and TypeScript. Our platform serves millions of developers worldwide, and your work will have a direct impact on their productivity and experience.`,
    requirements: [
      "5+ years of experience in frontend development",
      "Expert knowledge of React, TypeScript, and modern CSS",
      "Experience with Next.js or similar frameworks",
      "Strong understanding of web performance optimization",
      "Excellent communication and collaboration skills",
    ],
    benefits: [
      "Competitive salary and equity",
      "Remote-friendly with flexible hours",
      "Health, dental, and vision insurance",
      "Unlimited PTO",
      "Learning and development budget",
      "Home office stipend",
    ],
    about:
      "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences.",
  },
  {
    id: "2",
    title: "Backend Developer",
    company: "Stripe",
    companyInitial: "S",
    companyColor: "bg-[hsl(264,78%,55%)] text-[hsl(0,0%,100%)]",
    location: "New York, NY",
    salaryMin: 140000,
    salaryMax: 190000,
    type: "Full-time",
    level: "Mid",
    postedDate: "3 days ago",
    featured: true,
    description: `Join Stripe's engineering team and help build the economic infrastructure of the internet. As a Backend Developer, you'll work on systems that process billions of dollars in payments annually.

## Responsibilities

- Build and maintain APIs that power millions of businesses
- Design scalable distributed systems
- Implement robust error handling and monitoring
- Collaborate with cross-functional teams on product development
- Participate in on-call rotations to ensure system reliability`,
    requirements: [
      "3+ years of backend development experience",
      "Proficiency in Ruby, Java, or Go",
      "Experience with distributed systems and microservices",
      "Strong understanding of databases and data modeling",
      "Familiarity with cloud infrastructure (AWS/GCP)",
    ],
    benefits: [
      "Top-tier compensation package",
      "Equity grants",
      "Comprehensive health coverage",
      "Annual learning budget",
      "Commuter benefits",
      "Catered meals",
    ],
    about:
      "Stripe is a financial infrastructure platform for businesses. Millions of companies use Stripe to accept payments, grow their revenue, and accelerate new business opportunities.",
  },
  {
    id: "3",
    title: "UI/UX Designer",
    company: "Figma",
    companyInitial: "F",
    companyColor: "bg-[hsl(14,89%,55%)] text-[hsl(0,0%,100%)]",
    location: "Remote",
    salaryMin: 120000,
    salaryMax: 170000,
    type: "Remote",
    level: "Mid",
    postedDate: "1 day ago",
    featured: true,
    description: `We're looking for a talented UI/UX Designer to help shape the future of collaborative design tools. You'll work closely with product and engineering teams to create intuitive, beautiful experiences.

## Responsibilities

- Create wireframes, prototypes, and high-fidelity designs
- Conduct user research and usability testing
- Define and maintain design systems
- Collaborate with engineers to ensure design quality
- Present design solutions to stakeholders`,
    requirements: [
      "4+ years of product design experience",
      "Expert proficiency in Figma and design tools",
      "Strong portfolio demonstrating UI/UX skills",
      "Experience with design systems",
      "Understanding of frontend development principles",
    ],
    benefits: [
      "Competitive salary and equity",
      "Fully remote with flexible schedule",
      "Health and wellness benefits",
      "Professional development budget",
      "Home office setup stipend",
      "Team retreats",
    ],
    about:
      "Figma is the leading collaborative design platform that helps teams build better products. Born on the web, Figma helps entire product teams brainstorm, design, and build better products.",
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "Datadog",
    companyInitial: "D",
    companyColor: "bg-[hsl(270,60%,50%)] text-[hsl(0,0%,100%)]",
    location: "Boston, MA",
    salaryMin: 130000,
    salaryMax: 180000,
    type: "Full-time",
    level: "Senior",
    postedDate: "5 days ago",
    featured: false,
    description: `Join our infrastructure team to build and maintain the systems that monitor the world's applications. You'll work on large-scale distributed systems processing trillions of data points.

## Responsibilities

- Design and implement CI/CD pipelines
- Manage cloud infrastructure at scale
- Implement monitoring and alerting solutions
- Automate deployment processes
- Collaborate with development teams on infrastructure needs`,
    requirements: [
      "5+ years of DevOps/SRE experience",
      "Expert knowledge of Kubernetes and Docker",
      "Experience with Terraform or similar IaC tools",
      "Strong scripting skills (Python, Bash)",
      "AWS or GCP certification preferred",
    ],
    benefits: [
      "Competitive compensation",
      "Stock options",
      "Health insurance",
      "Flexible PTO",
      "Conference attendance budget",
      "Gym membership",
    ],
    about:
      "Datadog is the monitoring and analytics platform for cloud-scale infrastructure and applications. We bring together data from servers, databases, tools, and services to present a unified view.",
  },
  {
    id: "5",
    title: "Junior React Developer",
    company: "Shopify",
    companyInitial: "S",
    companyColor: "bg-[hsl(144,70%,35%)] text-[hsl(0,0%,100%)]",
    location: "Toronto, CA",
    salaryMin: 70000,
    salaryMax: 95000,
    type: "Full-time",
    level: "Junior",
    postedDate: "1 week ago",
    featured: false,
    description: `Start your career at Shopify and help build the commerce platform that powers millions of merchants worldwide. As a Junior React Developer, you'll learn from experienced engineers while contributing to real products.

## Responsibilities

- Build and maintain React components for our merchant dashboard
- Write unit and integration tests
- Participate in code reviews and team discussions
- Learn and apply best practices in web development
- Contribute to internal documentation`,
    requirements: [
      "0-2 years of development experience",
      "Knowledge of React and JavaScript/TypeScript",
      "Understanding of HTML, CSS, and responsive design",
      "Eagerness to learn and grow",
      "CS degree or equivalent experience",
    ],
    benefits: [
      "Mentorship program",
      "Stock options",
      "Health and dental coverage",
      "Flexible work arrangements",
      "Education budget",
      "Employee discount",
    ],
    about:
      "Shopify is a leading global commerce company that provides trusted tools to start, grow, market, and manage a retail business of any size.",
  },
  {
    id: "6",
    title: "Data Science Intern",
    company: "Notion",
    companyInitial: "N",
    companyColor: "bg-foreground text-background",
    location: "San Francisco, CA",
    salaryMin: 45000,
    salaryMax: 65000,
    type: "Contract",
    level: "Intern",
    postedDate: "3 days ago",
    featured: true,
    description: `Join Notion as a Data Science Intern and help us understand how millions of people use our productivity platform. You'll work with real data to derive insights that shape our product direction.

## Responsibilities

- Analyze user behavior data to identify trends
- Build dashboards and visualizations
- Support A/B testing initiatives
- Collaborate with product and engineering teams
- Present findings to stakeholders`,
    requirements: [
      "Currently pursuing a degree in Data Science, Statistics, or related field",
      "Proficiency in Python and SQL",
      "Experience with data visualization tools",
      "Strong analytical and problem-solving skills",
      "Good communication skills",
    ],
    benefits: [
      "Competitive intern compensation",
      "Housing stipend",
      "Mentorship from senior data scientists",
      "Free Notion workspace",
      "Networking opportunities",
      "Possibility of full-time offer",
    ],
    about:
      "Notion is the all-in-one workspace that combines notes, docs, wikis, and project management. We help teams and individuals organize their work and life.",
  },
  {
    id: "7",
    title: "Mobile Developer",
    company: "Discord",
    companyInitial: "D",
    companyColor: "bg-[hsl(227,58%,65%)] text-[hsl(0,0%,100%)]",
    location: "Remote",
    salaryMin: 130000,
    salaryMax: 175000,
    type: "Remote",
    level: "Mid",
    postedDate: "4 days ago",
    featured: false,
    description: `Build the mobile experience for one of the world's most popular communication platforms. You'll work on features used by hundreds of millions of users.

## Responsibilities

- Develop and maintain our React Native mobile applications
- Implement new features and optimize performance
- Collaborate with design and product teams
- Write automated tests and maintain code quality
- Participate in architecture discussions`,
    requirements: [
      "3+ years of mobile development experience",
      "Proficiency in React Native or similar frameworks",
      "Experience with iOS and Android platforms",
      "Strong understanding of mobile UI patterns",
      "Experience with real-time communication systems a plus",
    ],
    benefits: [
      "Competitive salary",
      "Equity package",
      "Full remote work",
      "Health benefits",
      "Unlimited PTO",
      "Gaming setup stipend",
    ],
    about:
      "Discord is the easiest way to talk over voice, video, and text. Talk, chat, hang out, and stay close with your friends and communities.",
  },
  {
    id: "8",
    title: "Product Manager",
    company: "Linear",
    companyInitial: "L",
    companyColor: "bg-[hsl(226,100%,64%)] text-[hsl(0,0%,100%)]",
    location: "San Francisco, CA",
    salaryMin: 160000,
    salaryMax: 210000,
    type: "Full-time",
    level: "Lead",
    postedDate: "6 days ago",
    featured: false,
    description: `Lead product strategy at Linear, the issue tracking tool built for modern software teams. You'll define the roadmap and work closely with engineering and design to ship world-class features.

## Responsibilities

- Define product vision and strategy
- Prioritize features based on customer feedback and data
- Work with engineering and design to ship features
- Conduct user research and competitive analysis
- Communicate product updates to stakeholders`,
    requirements: [
      "5+ years of product management experience",
      "Experience with developer tools or B2B SaaS",
      "Strong analytical and data-driven mindset",
      "Excellent communication and leadership skills",
      "Technical background preferred",
    ],
    benefits: [
      "Top-tier compensation",
      "Significant equity",
      "Fully flexible work",
      "Premium health coverage",
      "Unlimited PTO",
      "Annual team offsite",
    ],
    about:
      "Linear is the issue tracking tool you'll enjoy using. Streamline software projects, sprints, tasks, and bug tracking. Built for high-performance teams.",
  },
  {
    id: "9",
    title: "Freelance Technical Writer",
    company: "GitBook",
    companyInitial: "G",
    companyColor: "bg-[hsl(200,70%,45%)] text-[hsl(0,0%,100%)]",
    location: "Remote",
    salaryMin: 60000,
    salaryMax: 90000,
    type: "Freelance",
    level: "Mid",
    postedDate: "2 days ago",
    featured: false,
    description: `Create world-class technical documentation and content as a freelance writer for GitBook. Help developers understand complex concepts through clear, engaging writing.

## Responsibilities

- Write technical guides, tutorials, and API documentation
- Review and edit existing documentation for clarity
- Collaborate with engineering teams to understand features
- Create code examples and sample projects
- Maintain documentation standards and style guides`,
    requirements: [
      "3+ years of technical writing experience",
      "Strong understanding of software development concepts",
      "Excellent written English communication",
      "Experience with markdown and documentation tools",
      "Ability to explain complex topics simply",
    ],
    benefits: [
      "Flexible freelance arrangement",
      "Competitive hourly rate",
      "Work from anywhere",
      "Access to GitBook tools",
      "Portfolio building opportunities",
    ],
    about:
      "GitBook is a modern documentation platform where teams can document everything from products to internal knowledge bases.",
  },
]

export function formatSalary(amount: number): string {
  return `$${(amount / 1000).toFixed(0)}k`
}
