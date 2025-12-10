"use client";

import { ExperienceChapter } from "./ExperienceChapter";
import type { Chapter } from "./ExperienceChapter";

const chapters: Chapter[] = [
  {
    chapter: "Chapter 3",
    title: "Growth Engineering",
    role: "Software Engineer, Growth",
    company: "Chime",
    period: "2024 — Present",
    logoUrl: "/chime.png",
    intro: `Joined into a lean backend and data engineering team that supports all paid marketing initiatives. With $350M+ annual ad spend, our team is responsible for enabling growth through ad placement, efficient CAC, and accurate attribution.`,
    highlights: [
      {
        metric: "$360M+",
        description:
          "Enabling efficient ad placement and attribution, all with the goal of maximizing growth and minimizing cost.",
      },
      {
        metric: "2 weeks early",
        description:
          "Delivered affiliate vendor migration ahead of schedule, reducing affiliate CAC by 27% and time to market for new affiliates by ~3.5 weeks.",
      },
      {
        description:
          "Designed deferred deep-linking framework from scratch, enabling new mobile growth capabilities across multiple channels (Meta, Google, Tiktok)",
      },
      {
        description:
          "Building reliable, scalable, and maintainable data pipelines across multiple timeframes (daily, near real time, and real-time)",
      },
    ],
    skills: [
      "SparkSQL",
      "ReactNative",
      "Data Engineering & Ingestion",
      "Technical Leadership",
      "Airflow",
    ],
  },
  {
    chapter: "Chapter 2",
    title: "Scaling to Billions",
    role: "Associate Software Engineer → Senior Software Engineer",
    company: "Capital One",
    period: "2020 — 2024",
    logoUrl: "/c1.png",
    intro: `Rose through the ranks to Senior Software Engineer, most recently at their in-house settlements & clearing platform, processing 15b in transactions daily. Before this team, I was on an enterprise contract data platform, which managed 10k suppliers data. Through these two teams, I learned system design, working cross-functionally, and driving outcomes in complex, regulated environments.`,
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

export const ExperienceTimeline = () => {
  return (
    <div className="space-y-20 md:space-y-28">
      {chapters.map((chapter, index) => (
        <ExperienceChapter
          chapter={chapter}
          key={chapter.company}
          index={index}
          isLast={index === chapters.length - 1}
        />
      ))}
    </div>
  );
};
