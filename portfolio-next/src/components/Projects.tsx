
const projects = [
  {
    name: "CareersNow",
    description: "A project to help students find the right career path based on their skills and interests",
    stack: ["Next.js", "Typescript", "PostgreSQL", "TailwindCSS", "Node.js"],
    link: "https://careersnow.vercel.app/",
    github: "https://github.com/atulyashree/Careersnow",
    // image: "/projects/careers.png",
    // Optionally add a date property if desired
  },

  {
    name: "PricePredictor",
    description: "A project to classify mobile phones based on their price",
    stack: ["python", "scikit-learn", "pandas", "numpy", "matplotlib", "seaborn", "heroku"],
    link: "https://github.com/atulyashree/mobileprice_classify",
    github: "https://github.com/atulyashree/mobileprice_classify",
    // image: "/projects/careers.png",
    // Optionally add a date property if desired
  },

  {
    name: "iReviewSense",
    description: "This is a basic Natural Language Processing (NLP) Sentiment Analysis Web Application that classifies iPhone reviews as either positive or negative",
    stack: ["python", "scikit-learn", "NLTK", "pandas", "matplotlib", "numpy", "streamlit"],
    link: "https://github.com/atulyashree/NLP-Iphone-review",
    github: "https://github.com/atulyashree/NLP-Iphone-review",
    // image: "/projects/careers.png",
    // Optionally add a date property if desired
  },
  // Add more projects...
];

export default function Projects() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto" id="projects">
      <h2 className="text-2xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => {
          // Special handling for CareersNow
          if (project.name === "CareersNow") {
            return (
              <div key={project.name} className="bg-white dark:bg-neutral-900 rounded-xl shadow p-6 flex flex-col md:col-span-2">
                <video
                  src="/careers.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full max-h-80 rounded-lg mb-4 object-cover"
                />
                <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{project.name}</h3>
                <p className="mb-3 text-gray-700 dark:text-gray-300 text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200 px-2 py-1 rounded font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a href={project.link} className="text-blue-600 dark:text-blue-400 font-medium hover:underline" target="_blank" rel="noopener noreferrer">Live</a>
                  <a href={project.github} className="text-gray-500 dark:text-gray-300 font-medium hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            );
          }
          // Default card for other projects
          return (
            <div key={project.name} className="bg-white dark:bg-neutral-900 rounded-xl shadow p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{project.name}</h3>
              <p className="mb-3 text-gray-700 dark:text-gray-300 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200 px-2 py-1 rounded font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                <a href={project.github} className="text-gray-500 dark:text-gray-300 font-medium hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

