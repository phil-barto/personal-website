"use client";

import Image from "next/image";

interface ExperienceItem {
  company: string;
  title: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string[];
  logo: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Chime",
    title: "Software Engineer",
    location: "New York, NY",
    startDate: "2023",
    endDate: "Present",
    logo: "/chime.png",
    description: [
      "Support paid marketing engineering initiatives, building scalable backend systems and data pipelines",
      "Develop and maintain data engineering solutions to optimize marketing performance and attribution",
      "Collaborate with cross-functional teams to deliver high-impact features and improvements",
    ],
  },
  {
    company: "Capital One",
    title: "Software Engineer",
    location: "McLean, VA",
    startDate: "2021",
    endDate: "2023",
    logo: "/c1.png",
    description: [
      "Supported credit card processing platform, ensuring high availability and reliability for millions of transactions",
      "Managed enterprise supplier data systems, improving data quality and operational efficiency",
      "Built and maintained backend services and APIs using modern cloud technologies",
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-12">
      <div className="w-full">
        <h2 className="text-5xl md:text-5xl font-bold text-white mb-6 font-fira-code">
          Experience
        </h2>

        <div className="space-y-12 mt-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-white/20" />
              )}

              <div className="flex gap-6">
                {/* Company logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center shadow-lg p-2">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-white font-fira-code mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-[#FFA500] font-semibold mb-1">
                      {exp.company}
                    </p>
                    {exp.location && (
                      <p className="text-white/70 text-sm mb-2">
                        {exp.location}
                      </p>
                    )}
                    <p className="text-white/60 text-sm font-mono">
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-white text-lg leading-relaxed flex items-start"
                      >
                        <span className="text-[#FFA500] mr-3 mt-2">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
