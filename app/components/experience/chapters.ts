import type { Chapter } from "./ExperienceChapter";

export const chapters: Chapter[] = [
  {
    chapter: "Chapter 3",
    title: "Instant Loans & Growth - Chime",
    role: "Senior Software Engineer",
    company: "Chime",
    period: "2024 — Present",
    logoUrl: "/chime.png",
    intro: `Senior backend engineer on Chime's Instant Loans product — owning loan origination, payments, reconciliation, and reporting. Previously led the lean backend and data engineering team behind all paid marketing initiatives, where $360M+ in annual ad spend drove growth through efficient ad placement, CAC, and accurate attribution.`,
    highlights: [
      {
        metric: "+8%",
        description:
          "Raised loan origination rates across the portfolio by proposing and shipping a move of the KYC verification check downstream in the origination flow.",
      },
      {
        metric: "2h → 25m",
        description:
          "Rewrote a critical bank reporting job from a 2-hour in-memory process into a 25-minute parallelized, fault-tolerant batch file process using Sidekiq batches and S3 server-side stitching.",
      },
      {
        metric: "$360M+",
        description:
          "Led the paid marketing engineering team, enabling efficient ad placement and attribution to maximize growth while minimizing cost.",
      },
      {
        metric: "2 weeks early",
        description:
          "Delivered affiliate vendor migration ahead of schedule, reducing affiliate CAC and time to market for new affiliates.",
      },
      {
        description:
          "Designed a deferred deep-linking framework from scratch, enabling new mobile growth capabilities across multiple channels (Meta, Google, TikTok).",
      },
    ],
    skills: [
      "Ruby",
      "Sidekiq",
      "SparkSQL",
      "Data Engineering & Ingestion",
      "Technical Leadership",
      "Airflow",
    ],
  },
  {
    chapter: "Chapter 2",
    title: "Supporting business critical systems - Capital One",
    role: "Associate Software Engineer → Senior Software Engineer",
    company: "Capital One",
    period: "2020 — 2024",
    logoUrl: "/c1.png",
    intro: `Rose through the ranks to Senior Software Engineer, most recently at their in-house settlements & clearing platform, processing 15b in transactions yearly. Before this team, I was on an enterprise contract data platform, which managed 10k suppliers data. Through these two teams, I learned system design, working cross-functionally, and driving outcomes in complex, regulated environments.`,
    highlights: [
      {
        metric: "$15B",
        description:
          "Yearly transaction volume processed by the platform I helped build and maintain",
      },
      {
        metric: "5 → 0",
        description:
          "Reduced annual incidents from 5 to zero by implementing an active-active failover architecture",
      },
      {
        metric: "33%",
        description:
          "Faster load times after refactoring ETL process that everyone had given up on",
      },
      {
        description:
          "Led team of 10 engineers for AWS migration, selected from 35 engineers as main POC to 3+ external orgs such as partnerships, trade credit, and auths",
      },
      {
        description:
          "Delivered enterprise AWS account migration ahead of schedule",
      },
    ],
    skills: [
      "AWS",
      "Python",
      "System Design",
      "Technical Leadership",
      "Distributed Systems",
      "DynamoDB",
    ],
  },
];
