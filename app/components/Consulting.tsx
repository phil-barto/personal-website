"use client";

import {
  SiAmazondynamodb,
  SiAmazonecs,
  SiAmazonwebservices,
  SiApacheairflow,
  SiApachespark,
  SiGo,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRuby,
  SiSnowflake,
} from "react-icons/si";

const technologies = [
  { name: "React Native", icon: SiReact, color: "#61DAFB" },
  { name: "DynamoDB", icon: SiAmazondynamodb, color: "#4053D6" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Golang", icon: SiGo, color: "#00ADD8" },
  { name: "Ruby", icon: SiRuby, color: "#CC342D" },
  { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Airflow", icon: SiApacheairflow, color: "#017CEE" },
  { name: "SparkSQL", icon: SiApachespark, color: "#E25A1C" },
  { name: "Snowflake", icon: SiSnowflake, color: "#29B5E8" },
  { name: "AWS ECS", icon: SiAmazonecs, color: "#FF9900" },
];

export default function Consulting() {
  // Duplicate the array to create seamless loop
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <section id="consulting" className="py-12">
      <div className="w-full">
        <h2 className="text-5xl md:text-5xl font-bold text-white mb-6 font-fira-code">
          Consulting
        </h2>

        <p className="text-white text-lg leading-relaxed mb-8">
          If you&apos;re stuck on a tough engineering problem, need someone to
          audit a slow build, or are seeking broader guidance, I&apos;m
          available to help.
        </p>

        {/* Moving belt of icons */}
        <div className="relative w-full overflow-hidden mb-8 py-4">
          <div className="flex animate-scroll">
            {duplicatedTech.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 mx-6 flex items-center justify-center"
                  style={{ minWidth: "80px" }}
                >
                  <Icon
                    className="w-16 h-16"
                    style={{ color: tech.color }}
                    title={tech.name}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-white text-lg leading-relaxed">
          I specialize in backend and data engineering, with a strong focus on
          building scalable, efficient, and maintainable systems. I love helping
          and connecting with people around the world. If you&apos;re interested
          in working together, feel free to reach out!
        </p>
      </div>
    </section>
  );
}
