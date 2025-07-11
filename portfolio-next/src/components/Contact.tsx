import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-16 px-4 max-w-2xl mx-auto" id="contact">
      <h2 className="text-2xl font-bold mb-8 text-center">Contact Me</h2>
      <div className="flex flex-col items-center gap-4">
        <a
          href="mailto:atulyashrees@gmail.com"
          className="flex items-center gap-2 text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope /> atulyashrees@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/atulya-shree-sharma/"
          className="flex items-center gap-2 text-blue-700 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/atulyashree"
          className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
        {/* Optionally add your resume link */}
        <a
          href="/resume.pdf"
          className="flex items-center gap-2 text-green-700 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
      {/* Contact Form, using formspree */}
      <form
        action="https://formspree.io/f/xrbknjbe"
        method="POST"
        className="flex flex-col gap-4 w-full max-w-md mx-auto mt-8"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-2 rounded border border-gray-300 bg-white text-gray-900 dark:bg-neutral-800 dark:text-gray-100"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-2 rounded border border-gray-300 bg-white text-gray-900 dark:bg-neutral-800 dark:text-gray-100"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="p-2 rounded border border-gray-300 bg-white text-gray-900 dark:bg-neutral-800 dark:text-gray-100"
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </section>
  );
}
