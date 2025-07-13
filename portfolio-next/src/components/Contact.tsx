import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-16 px-4 max-w-2xl mx-auto" id="contact">
      <h2 className="text-2xl font-bold mb-8 text-center">Get in Touch</h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6 text-base">
        Want to chat? Just shoot me a DM on social or email, or use the form below and I'll respond whenever I can.
      </p>
      <div className="flex justify-center gap-6 mb-8">
        <a
          href="mailto:atulyashrees@gmail.com"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-neutral-800 text-blue-600 dark:text-blue-400 text-2xl hover:bg-blue-200 dark:hover:bg-neutral-700 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/atulya-shree-sharma/"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-neutral-800 text-blue-700 dark:text-blue-400 text-2xl hover:bg-blue-200 dark:hover:bg-neutral-700 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/atulyashree"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 text-2xl hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
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
      <div className="text-center mt-6">
        <a
          href="/resume.pdf"
          className="inline-block px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 dark:hover:bg-neutral-800 transition-colors font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
