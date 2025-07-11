
const education = [
  {
    institution: "Rajasthan Technical University",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "2020 - 2024",
    description: "Relevant coursework: Data Structures, Algorithms, Web Development, Machine Learning."
  },
  // Add more education entries if needed
];

export default function Education() {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto" id="education">
      <h2 className="text-2xl font-bold mb-8 text-center">Education</h2>
      <div className="flex flex-col gap-8">
        {education.map((edu) => (
          <div key={edu.institution + edu.degree} className="bg-white dark:bg-neutral-900 rounded-lg shadow p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <span className="font-semibold text-lg">{edu.degree}</span>
              <span className="text-sm text-gray-500">{edu.period}</span>
            </div>
            <div className="font-semibold text-blue-600 mb-1">{edu.institution}</div>
            <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

