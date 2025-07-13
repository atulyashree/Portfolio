import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaCoffee } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiDocker} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Java", icon: <FaCoffee className="text-yellow-900" /> },
  { name: "Python", icon: <FaPython className="text-blue-800" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  // Add more as needed
];

export default function Skills() {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto" id="skills">
      <h2 className="text-2xl font-bold mb-8 text-center">Skills & Tech Stack</h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-y-10 gap-x-6 justify-items-center">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <div className="text-5xl mb-3">{skill.icon}</div>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wide">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
