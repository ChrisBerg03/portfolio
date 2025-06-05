export function Home() {
    const projects = [
        {
            id: 1,
            title: "Stay a while",
            description:
                "A platform to help people book short-term stays with local hosts. (3min spinup time for backend)",
            imageUrl: "/assets/project1.jpg",
            liveLink: "https://stay-a-while-dev.netlify.app/",
            repoLink: "https://github.com/StayAwhileOrg/stay-a-while",
        },
        {
            id: 2,
            title: "Project Two",
            description: "A brief description of Project Two.",
            imageUrl: "/assets/project2.jpg",
            liveLink: "https://splendid-toffee-ea8c02.netlify.app/",
            repoLink: "https://github.com/ChrisBerg03/semesterProject2",
        },
        {
            id: 3,
            title: "Project Three",
            description: "A brief description of Project Three.",
            imageUrl: "/assets/project3.jpg",
            liveLink: "#",
            repoLink: "#",
        },
        {
            id: 4,
            title: "Project Four",
            description: "A brief description of Project Four.",
            imageUrl: "/assets/project4.jpg",
            liveLink: "#",
            repoLink: "#",
        },
    ];

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
                    <div className="md:hidden">
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 8h16M4 16h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="flex-grow bg-gradient-to-br from-indigo-100 to-purple-200">
                <div className="max-w-5xl mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center">
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
                            Hi, I’m Chris.
                        </h1>
                        <p className="text-xl text-gray-700 mb-6">
                            A passionate Front-End Developer crafting beautiful
                            experiences on the web.
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
                            {/* Replace with your own avatar or illustration */}
                            <img
                                src="/assets/avatar-placeholder.png"
                                alt="Chris"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* About Me Section */}
            <section id="about" className="bg-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        About Me
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        I’m a front-end developer based in Norway with a passion
                        for building clean, modern, and responsive web
                        applications. I love solving complex UI problems and
                        creating seamless user experiences. Outside of coding,
                        you’ll find me exploring the fjords, experimenting with
                        recipes, or reading sci-fi novels.
                    </p>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="bg-gray-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
                        My Projects
                    </h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
                        <a href="#" className="hover:text-gray-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 4.3 2.8 8 6.7 9.3.5.1.7-.2.7-.5v-1.9c-2.7.6-3.3-1.3-3.3-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6-.7 1.6-.7.9-1.6 2.4-1.2 3-.9.1-.7.4-1.2.7-1.5-2.1-.2-4.3-1-4.3-4.3 0-1 .4-1.9 1.1-2.6-.1-.2-.5-1.2.1-2.5 0 0 .9-.3 2.6 1 .8-.2 1.6-.3 2.4-.3.8 0 1.6.1 2.4.3 1.6-1.3 2.6-1 2.6-1 .6 1.3.2 2.3.1 2.5.7.7 1.1 1.6 1.1 2.6 0 3.3-2.2 4.1-4.3 4.3.3.3.5.8.5 1.7v2.6c0 .3.2.6.7.5 3.9-1.3 6.7-4.9 6.7-9.3 0-5.4-4.4-9.8-9.8-9.8z" />
                            </svg>
                        </a>
                        <a href="#" className="hover:text-gray-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22 2.2H2C.9 2.2 0 3.1 0 4.3v15.5c0 1.2.9 2.2 2 2.2h20c1.1 0 2-.9 2-2.2V4.3c0-1.2-.9-2.1-2-2.1zM7.7 19H4.1V9.8h3.6V19zm-1.8-10.4c-1.2 0-2.1-1-2.1-2.2 0-1.3 1-2.2 2.1-2.2 1.2 0 2.2.9 2.2 2.2 0 1.2-.9 2.2-2.2 2.2zM20 19h-3.6v-5.5c0-1.3-.4-2.2-1.6-2.2-1.2 0-1.8.8-1.8 2.2V19h-3.6V9.8h3.4v1.3h.1c.5-.9 1.8-1.8 3.6-1.8 2.6 0 4.6 1.7 4.6 5.2V19z" />
                            </svg>
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
