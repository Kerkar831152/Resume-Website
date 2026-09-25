function About() {
    return (
        <section
            id="about"
            className="bg-[#0b0822] px-[7%] py-20"
        >
            <div className="mb-12 text-center">
                <span className="text-sm font-semibold tracking-wider text-[#8b5cf6]">
                    WHO I AM
                </span>

                <h2 className="mt-2 text-3xl font-bold text-white">
                    ABOUT ME
                </h2>

                <p className="mt-2 text-sm text-[#b8b8c7]">
                    Get to know me and what I'm working towards.
                </p>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-11 lg:grid-cols-2 lg:gap-16">

                <div className="text-center lg:text-left">
                    <h3 className="mb-5 text-2xl font-bold leading-tight md:text-3xl">
                        Building my skills one project at a time.
                    </h3>

                    <p className="mb-4 text-[15px] leading-7 text-[#a9a6b8]">
                        I am a Computer Science Engineering student at
                        Goa Engineering College, currently exploring
                        software development and modern technologies.
                    </p>

                    <p className="mb-4 text-[15px] leading-7 text-[#a9a6b8]">
                        I enjoy building projects that help me understand
                        how different technologies work together, while
                        continuously improving my programming and
                        problem-solving skills.
                    </p>

                    <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">

                        <div className="flex items-center gap-2 rounded-lg border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 px-3 py-2 text-xs text-[#bdb9ca]">
                            <i className="fa-solid fa-graduation-cap text-[#8b5cf6]"></i>
                            <span>2nd Year CSE</span>
                        </div>

                        <div className="flex items-center gap-2 rounded-lg border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 px-3 py-2 text-xs text-[#bdb9ca]">
                            <i className="fa-solid fa-code text-[#8b5cf6]"></i>
                            <span>Web Development</span>
                        </div>

                        <div className="flex items-center gap-2 rounded-lg border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 px-3 py-2 text-xs text-[#bdb9ca]">
                            <i className="fa-solid fa-database text-[#8b5cf6]"></i>
                            <span>Backend & Databases</span>
                        </div>

                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 max-[450px]:grid-cols-1">

                    <div className="flex min-h-36 flex-col items-center justify-center rounded-xl border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.035] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/[0.07]">

                        <i className="fa-solid fa-diagram-project mb-3 text-lg text-[#8b5cf6]"></i>

                        <h3 className="mb-1 text-3xl font-bold text-[#c4b5fd]">
                            5+
                        </h3>

                        <p className="text-xs text-[#858193]">
                            Projects
                        </p>

                    </div>

                    <div className="flex min-h-36 flex-col items-center justify-center rounded-xl border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.035] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/[0.07]">

                        <i className="fa-solid fa-certificate mb-3 text-lg text-[#8b5cf6]"></i>

                        <h3 className="mb-1 text-3xl font-bold text-[#c4b5fd]">
                            3+
                        </h3>

                        <p className="text-xs text-[#858193]">
                            Certificates
                        </p>

                    </div>

                    <div className="flex min-h-36 flex-col items-center justify-center rounded-xl border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.035] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/[0.07]">

                        <i className="fa-solid fa-laptop-code mb-3 text-lg text-[#8b5cf6]"></i>

                        <h3 className="mb-1 text-3xl font-bold text-[#c4b5fd]">
                            4+
                        </h3>

                        <p className="text-xs text-[#858193]">
                            Languages
                        </p>

                    </div>

                    <div className="flex min-h-36 flex-col items-center justify-center rounded-xl border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.035] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/[0.07]">

                        <i className="fa-brands fa-github mb-3 text-lg text-[#8b5cf6]"></i>

                        <h3 className="mb-1 text-3xl font-bold text-[#c4b5fd]">
                            5+
                        </h3>

                        <p className="text-xs text-[#858193]">
                            Contributions
                        </p>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;