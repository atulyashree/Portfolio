const experiences = [
  {
    company: "RoboMQ",
    role: "Associate Software Engineer",
    period: "October 2023 - April 2024",
    logo: "/Robomq.png", // Example logo, replace with actual logo if available
    description:
      "Developed an API integrated microservice improving the efficiency of the onboarding process for Hire2Retire. Also built the ”HR write-back” feature for seamless data transfer between Active Directory and Paylocity by writing back employee emails and resolved 25+ production bugs.",
  },

  {
    company: "Celebal Technologies",
    role: "Data Science Intern",
    period: "May 2023 - July 2023",
    logo: "/celebal.png", // Example logo, replace with actual logo if available
    description:
      "Gained practical experience in applying data science techniques to real-world problems, including data cleaning, exploratory data analysis, deep learning, and machine learning model development.",
  },

  {
    company: "Upflairs Pvt Ltd",
    role: "Machine Learning and Data Science Intern",
    period: "June 2022 - August 2022",
    logo: "/upflairs.png", // Example logo, replace with actual logo if available
    description:
      "Applied machine learning algorithms to real-world datasets, involving data preprocessing, model selection, and evaluation techniques.",
  },
  // Add more experiences...
];

export default function Experience() {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto" id="experience">
      <h2 className="text-2xl font-bold mb-8 text-center">Work Experience</h2>
      <div className="flex flex-col gap-8">
        {experiences.map((exp) => (
          <div
            key={exp.company + exp.role}
            className="bg-white dark:bg-neutral-900 rounded-xl shadow p-6 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-gray-100 dark:bg-neutral-800 rounded-full overflow-hidden">
              <img src={exp.logo} alt={exp.company + ' logo'} className="w-10 h-10 object-contain" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">{exp.company}</span>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>
              <div className="text-blue-600 dark:text-blue-400 font-medium mb-1">{exp.role}</div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}