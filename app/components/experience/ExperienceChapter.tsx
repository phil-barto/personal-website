"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface Highlight {
  metric?: string;
  description: string;
}

export interface Chapter {
  chapter: string;
  title: string;
  role: string;
  company: string;
  period: string;
  logoUrl: string;
  intro: string;
  highlights: Highlight[];
  skills: string[];
}

interface ExperienceChapterProps {
  chapter: Chapter;
  index: number;
  isLast: boolean;
}

export const ExperienceChapter = ({
  chapter,
  index,
  isLast,
}: ExperienceChapterProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={cn(
        "relative transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <header className="mb-6">
        <div className="flex items-start gap-4 md:gap-5">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border-2 border-white/20 bg-white/10 flex items-center justify-center flex-shrink-0">
            {chapter.logoUrl.startsWith("/") ? (
              <Image
                src={chapter.logoUrl}
                alt={`${chapter.company} logo`}
                width={36}
                height={36}
                className="w-8 h-8 md:w-9 md:h-9 object-contain"
              />
            ) : (
              <Image
                src={chapter.logoUrl}
                alt={`${chapter.company} logo`}
                width={36}
                height={36}
                className="w-8 h-8 md:w-9 md:h-9 object-contain"
                unoptimized
              />
            )}
            <span className="hidden font-mono font-bold text-[#FFA500] text-lg">
              {chapter.company[0]}
            </span>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight font-fira-code leading-tight text-white">
              {chapter.title}
            </h2>
            <p className="text-sm md:text-base text-white/80 font-medium mt-1">
              {chapter.role}
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-white/70 text-sm">
              <span className="text-[#FFA500] font-semibold">
                {chapter.company}
              </span>
              <span>·</span>
              <span className="font-mono">{chapter.period}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Intro narrative */}
      <p
        className={cn(
          "text-white leading-relaxed text-base md:text-lg mb-6",
          "transition-all duration-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ transitionDelay: `${index * 100 + 150}ms` }}
      >
        {chapter.intro}
      </p>

      {/* Highlights */}
      <div
        className={cn(
          "space-y-2 mb-4",
          "transition-all duration-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ transitionDelay: `${index * 100 + 250}ms` }}
      >
        {chapter.highlights.map((highlight, hIndex) => (
          <div key={hIndex} className="flex items-start gap-3 group">
            {highlight.metric ? (
              <span className="inline-flex items-center justify-center min-w-[4.5rem] px-2 py-1 bg-[#FFA500]/10 text-[#FFA500] rounded font-mono text-sm font-semibold whitespace-nowrap">
                {highlight.metric}
              </span>
            ) : (
              <span className="text-[#FFA500] mt-1.5 flex-shrink-0">→</span>
            )}
            <span className="text-white text-sm md:text-base leading-relaxed">
              {highlight.description}
            </span>
          </div>
        ))}
      </div>

      {/* Skills tags */}
      <div
        className={cn(
          "flex flex-wrap gap-2 pt-6 border-t border-white/20",
          "transition-all duration-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ transitionDelay: `${index * 100 + 350}ms` }}
      >
        {chapter.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs font-mono"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Connector line to next chapter */}
      {!isLast && (
        <div className="flex justify-center mt-12 md:mt-16">
          <div className="h-12 md:h-16 w-px bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      )}
    </article>
  );
};
