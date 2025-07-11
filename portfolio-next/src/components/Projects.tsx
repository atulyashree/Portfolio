
const projects = [
  {
    name: "CareersNow",
    description: "A project to help students find the right career path based on their skills and interests",
    stack: ["Next.js", "Typescript", "PostgreSQL", "TailwindCSS", "Node.js"],
    link: "https://careersnow.vercel.app/",
    github: "https://github.com/atulyashree/Careersnow",
    image: "/projects/careers.png"
  },
  // Add more projects...
];

export default function Projects() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto" id="projects">
      <h2 className="text-2xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.name} className="bg-white dark:bg-neutral-900 rounded-lg shadow p-6">
            <img src={project.image} alt={project.name} className="rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.stack.map((tech) => (
                <span key={tech} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{tech}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Live</a>
              <a href={project.github} className="text-gray-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

