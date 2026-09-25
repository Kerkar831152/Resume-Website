function Projects() {
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


                <div className="rounded-xl border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#8b5cf6]/45 hover:bg-[#8b5cf6]/10">

                    <div className="mb-5 flex items-center justify-between">

                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#8b5cf6]/10 text-[#a78bfa]">
                            <i className="fa-solid fa-code"></i>
                        </div>

                        <i className="fa-brands fa-github text-xl text-[#858193]"></i>

                    </div>

                    <h3 className="mb-3 text-xl font-semibold text-white">
                        AshenAudit
                    </h3>

                    <p className="mb-5 text-sm leading-7 text-[#a9a6b8]">
                        A VS Code extension that uses multiple AI reviewers
                        to verify code, compare their reviews, and return
                        corrected code.
                    </p>

                    <div className="mb-6 flex flex-wrap gap-2">

                        <span className="rounded-md border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 px-3 py-2 text-xs text-[#bdb9ca]">
                            TypeScript
                        </span>

                        <span className="rounded-md border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 px-3 py-2 text-xs text-[#bdb9ca]">
                            VS Code API
                        </span>

                        <span className="rounded-md border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 px-3 py-2 text-xs text-[#bdb9ca]">
                            AI APIs
                        </span>

                    </div>

                    <div className="flex gap-3">

                        <a
                            href="#"
                            className="flex items-center gap-2 rounded-lg border border-[#8b5cf6]/20 px-4 py-2 text-sm text-[#c7c4d5] transition hover:border-[#8b5cf6]/50 hover:text-white"
                        >
                            <i className="fa-brands fa-github"></i>
                            GitHub
                        </a>

                        <a
                            href="#"
                            className="flex items-center gap-2 rounded-lg bg-[#8b5cf6] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#7c3aed]"
                        >
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            Live Demo
                        </a>

                    </div>

                </div>


                <div className="rounded-xl border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#8b5cf6]/45 hover:bg-[#8b5cf6]/10">

                    <div className="mb-5 flex items-center justify-between">

                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#8b5cf6]/10 text-[#a78bfa]">
                            <i className="fa-solid fa-chart-line"></i>
                        </div>

                        <i className="fa-brands fa-github text-xl text-[#858193]"></i>

                    </div>

                    <h3 className="mb-3 text-xl font-semibold text-white">
                        AcadFlow
                    </h3>

                    <p className="mb-5 text-sm leading-7 text-[#a9a6b8]">
                        An academic workload management system designed to
                        help students understand and manage concentrated
                        academic workloads.
                    </p>

                    <div className="mb-6 flex flex-wrap gap-2">

                        <span className="rounded-md border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 px-3 py-2 text-xs text-[#bdb9ca]">
                            JavaScript
                        </span>

                        <span className="rounded-md border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 px-3 py-2 text-xs text-[#bdb9ca]">
                            Node.js
                        </span>

                        <span className="rounded-md border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 px-3 py-2 text-xs text-[#bdb9ca]">
                            Express
                        </span>

                        <span className="rounded-md border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 px-3 py-2 text-xs text-[#bdb9ca]">
                            MySQL
                        </span>

                    </div>

                    <div className="flex gap-3">

                        <a
                            href="#"
                            className="flex items-center gap-2 rounded-lg border border-[#8b5cf6]/20 px-4 py-2 text-sm text-[#c7c4d5] transition hover:border-[#8b5cf6]/50 hover:text-white"
                        >
                            <i className="fa-brands fa-github"></i>
                            GitHub
                        </a>

                        <a
                            href="#"
                            className="flex items-center gap-2 rounded-lg bg-[#8b5cf6] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#7c3aed]"
                        >
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            Live Demo
                        </a>

                    </div>

                </div>


                <div className="rounded-xl border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#8b5cf6]/45 hover:bg-[#8b5cf6]/10">

                    <div className="mb-5 flex items-center justify-between">

                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#8b5cf6]/10 text-[#a78bfa]">
                            <i className="fa-solid fa-globe"></i>
                        </div>

                        <i className="fa-brands fa-github text-xl text-[#858193]"></i>

                    </div>

                    <h3 className="mb-3 text-xl font-semibold text-white">
                        Resume Website
                    </h3>

                    <p className="mb-5 text-sm leading-7 text-[#a9a6b8]">
                        A personal portfolio website showcasing my projects,
                        skills, education, achievements and development journey.
                    </p>

                    <div className="mb-6 flex flex-wrap gap-2">

                        <span className="rounded-md border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 px-3 py-2 text-xs text-[#bdb9ca]">
                            React
                        </span>

                        <span className="rounded-md border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 px-3 py-2 text-xs text-[#bdb9ca]">
                            Tailwind CSS
                        </span>

                        <span className="rounded-md border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 px-3 py-2 text-xs text-[#bdb9ca]">
                            JavaScript
                        </span>

                    </div>

                    <div className="flex gap-3">

                        <a
                            href="#"
                            className="flex items-center gap-2 rounded-lg border border-[#8b5cf6]/20 px-4 py-2 text-sm text-[#c7c4d5] transition hover:border-[#8b5cf6]/50 hover:text-white"
                        >
                            <i className="fa-brands fa-github"></i>
                            GitHub
                        </a>

                        <a
                            href="#"
                            className="flex items-center gap-2 rounded-lg bg-[#8b5cf6] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#7c3aed]"
                        >
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            Live Demo
                        </a>

                    </div>

                </div>


                <div className="rounded-xl border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#8b5cf6]/45 hover:bg-[#8b5cf6]/10">

                    <div className="mb-5 flex items-center justify-between">

                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#8b5cf6]/10 text-[#a78bfa]">
                            <i className="fa-solid fa-lightbulb"></i>
                        </div>

                        <i className="fa-brands fa-github text-xl text-[#858193]"></i>

                    </div>

                    <h3 className="mb-3 text-xl font-semibold text-white">
                        More Projects
                    </h3>

                    <p className="mb-5 text-sm leading-7 text-[#a9a6b8]">
                        More projects and experiments will be added as I
                        continue learning and building.
                    </p>

                    <div className="mb-6 flex flex-wrap gap-2">

                        <span className="rounded-md border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 px-3 py-2 text-xs text-[#bdb9ca]">
                            C++
                        </span>

                        <span className="rounded-md border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 px-3 py-2 text-xs text-[#bdb9ca]">
                            Python
                        </span>

                        <span className="rounded-md border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 px-3 py-2 text-xs text-[#bdb9ca]">
                            Web
                        </span>

                    </div>

                    <div className="flex gap-3">

                        <a
                            href="#"
                            className="flex items-center gap-2 rounded-lg border border-[#8b5cf6]/20 px-4 py-2 text-sm text-[#c7c4d5] transition hover:border-[#8b5cf6]/50 hover:text-white"
                        >
                            <i className="fa-brands fa-github"></i>
                            GitHub
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Projects;