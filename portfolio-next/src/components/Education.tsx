
const education = [
  {
    institution: "Rajasthan Technical University",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "2020 - 2024",
    description: "Relevant coursework: Data Structures, Algorithms, Web Development, Machine Learning.",
  },
  // Add more education entries if needed
];

export default function Education() {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto" id="education">
      <h2 className="text-2xl font-bold mb-8 text-center">Education</h2>
      <div className="flex flex-col gap-8">
        {education.map((edu) => (
          <div
            key={edu.institution + edu.degree}
            className="bg-white dark:bg-neutral-900 rounded-xl shadow p-6 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">{edu.degree}</span>
                <span className="text-sm text-gray-500">{edu.period}</span>
              </div>
              <div className="text-blue-600 dark:text-blue-400 font-medium mb-1">{edu.institution}</div>
              {edu.description && (
                <p className="text-gray-700 dark:text-gray-300 text-sm">{edu.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

