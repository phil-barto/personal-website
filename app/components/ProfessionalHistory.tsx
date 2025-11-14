interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export default function ProfessionalHistory() {
  const experiences: Experience[] = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using modern technologies. Collaborating with cross-functional teams to deliver high-quality products.',
    },
    {
      title: 'Software Engineer',
      company: 'Startup XYZ',
      period: '2020 - 2022',
      description: 'Developed and maintained full-stack applications. Worked on improving system performance and user experience.',
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: '2018 - 2020',
      description: 'Built responsive websites and web applications. Learned best practices in software development and team collaboration.',
    },
  ];

  return (
    <section id="history" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-black dark:text-white">Professional History</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="text-xl font-semibold text-black dark:text-white">{exp.title}</h3>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 sm:mt-0">{exp.period}</span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium mb-3">{exp.company}</p>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

