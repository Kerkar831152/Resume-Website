import { useEffect, useState } from "react";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/projects"
                );

                const data = await response.json();

                setProjects(data);
            } catch (error) {
                console.error("Failed to fetch projects:", error);
            }
        };

        getProjects();
    }, []);

    return (
        <section
            id="projects"
            className="bg-[#08031c] px-[7%] py-20"
        >
            <div className="mb-12 text-center">
                <span className="text-sm font-semibold tracking-wider text-[#8b5cf6]">
                    WHAT I BUILD
                </span>

                <h2 className="mt-2 text-3xl font-bold text-white">
                    PROJECTS
                </h2>

                <p className="mt-2 text-sm text-[#b8b8c7]">
                    Some of the projects I have built while learning and
                    experimenting with different technologies.
                </p>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <div
                        key={project._id}
                        className="rounded-xl border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#8b5cf6]/45 hover:bg-[#8b5cf6]/10"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="mb-5 h-48 w-full rounded-lg bg-[#08031c] object-contain"
                        />

                        <div className="mb-5 flex items-center justify-between">
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#8b5cf6]/10 text-[#a78bfa]">
                                <i className="fa-solid fa-code"></i>
                            </div>

                        </div>

                        <h3 className="mb-3 text-xl font-semibold text-white">
                            {project.title}
                        </h3>

                        <p className="mb-5 text-sm leading-7 text-[#a9a6b8]">
                            {project.description}
                        </p>

                        <div className="mb-6 flex flex-wrap gap-2">
                            {project.technologies.map((technology, index) => (
                                <span
                                    key={index}
                                    className="rounded-md border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 px-3 py-2 text-xs text-[#bdb9ca]"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-3">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 rounded-lg border border-[#8b5cf6]/20 px-4 py-2 text-sm text-[#c7c4d5] transition hover:border-[#8b5cf6]/50 hover:text-white"
                                >
                                    <i className="fa-brands fa-github"></i>
                                    GitHub
                                </a>
                            )}

                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 rounded-lg bg-[#8b5cf6] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#7c3aed]"
                                >
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

