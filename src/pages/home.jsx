import { useState } from "react";
import { projects } from "../projects/projects";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold tracking-wider">
                        Chris's Portfolio
                    </div>

                    <ul className="hidden md:flex space-x-8">
                        <li>
                            <a href="#about" className="hover:underline">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:underline">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>

                    <button
                        className="md:hidden focus:outline-none cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? (
                            <HiX className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <HiMenu className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>

                {menuOpen && (
                    <div className="md:hidden bg-gradient-to-r from-purple-600 to-indigo-600">
                        <ul className="flex flex-col space-y-4 px-6 pb-6">
                            <li>
                                <a
                                    href="#about"
                                    className="block text-white text-lg hover:underline"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="block text-white text-lg hover:underline"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="block text-white text-lg hover:underline"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>

            <main className="flex-grow">
                <header className="bg-gradient-to-br from-indigo-100 to-purple-200">
                    <div className="max-w-5xl mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center">
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
                                Hi, I’m Chris.
                            </h1>
                            <p className="text-xl text-gray-700 mb-6">
                                A passionate Front-End Developer dedicated to
                                building engaging websites and constantly
                                exploring new ideas and technologies.
                            </p>
                            <a
                                href="#projects"
                                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition-colors"
                            >
                                View My Work
                            </a>
                        </div>
                        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 flex justify-center">
                            <div className="w-64 h-64 bg-white rounded-full shadow-xl overflow-hidden">
                                <img
                                    src="/assets/chris.jpg"
                                    alt="Chris smiling outdoors"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </header>

                <section id="about" className="bg-white py-20">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">
                            About Me
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            I’m a front-end developer based in Norway with a
                            passion for building clean, modern, and responsive
                            web applications. I love solving problems and
                            finding good solutions. Outside of coding, you’ll
                            find me at the gym, hanging out with friends, or
                            exploring new programming languages. I’m passionate
                            about staying current with the most relevant tech
                            trends.
                        </p>
                    </div>
                </section>

                <section id="projects" className="bg-gray-50 py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
                            My Projects
                        </h2>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {projects.map((project) => (
                                <article
                                    key={project.id}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex space-x-4">
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
                                            >
                                                Live Demo
                                            </a>
                                            <a
                                                href={project.repoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-50 transition-colors"
                                            >
                                                View Code
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer
                id="contact"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12"
            >
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-lg mb-6">
                        Interested in collaborating or have a question? Feel
                        free to reach out!
                    </p>
                    <a
                        href="mailto:chrisrberg03@gmail.com"
                        className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                        Say Hello
                    </a>

                    <div className="mt-8 flex justify-center space-x-6">
                        <a
                            target="_blank"
                            href="https://github.com/ChrisBerg03"
                            className="hover:text-gray-200"
                            aria-label="GitHub"
                        >
                            <FaGithub className="h-6 w-6" aria-hidden="true" />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/chris-robert-berg-b2189136a/"
                            className="hover:text-gray-200"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin
                                className="h-6 w-6"
                                aria-hidden="true"
                            />
                        </a>
                    </div>

                    <p className="mt-8 text-sm text-white/80">
                        © {new Date().getFullYear()} Chris. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
