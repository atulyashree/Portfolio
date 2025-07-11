const experiences = [
    {
      company: "RoboMQ",
      role: "Associate Software Engineer",
      period: "October 2023 - April 2024",
      description: "Developed an API integrated microservice improving the efficiency of the onboarding process for Hire2Retire. Also built the ”HR write-back” feature for seamless data transfer between Active Directory and Paylocity by writing back employee emails and resolved 25+ production bugs."
    },
    
    // Add more experiences...
  ];

  export default function Experience() {
    return (
      <section className="py-16 px-4 max-w-3xl mx-auto" id="experience">
        <h2 className="text-2xl font-bold mb-8 text-center">Experience</h2>
        <div className="flex flex-col gap-8">
          {experiences.map((exp) => (
            <div key={exp.company + exp.role} className="bg-yellow-50 dark:bg-neutral-900 rounded-lg shadow p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <span className="font-semibold text-lg">{exp.role}</span>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>
              <div className="font-semibold text-blue-600 mb-1">{exp.company}</div>
              <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }