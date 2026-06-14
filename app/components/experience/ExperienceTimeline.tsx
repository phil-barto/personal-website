"use client";

import { ExperienceChapter } from "./ExperienceChapter";
import { chapters } from "./chapters";

export const ExperienceTimeline = () => {
  return (
    <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-28">
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
