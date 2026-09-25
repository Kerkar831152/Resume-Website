function Hero() {
    return (
        <section
            id="home"
            className="min-h-[calc(100vh-72px)] px-[7%] py-20"
        >
            <div className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-12 lg:grid-cols-2">

                <div className="max-w-2xl">

                    <p className="mb-3 text-lg font-medium text-[#8b5cf6]">
                        Hi, I'm
                    </p>

                    <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                        Vithal{" "}
                        <span className="text-[#8b5cf6]">
                            Kerkar
                        </span>
                    </h1>

                    <h2 className="mt-5 text-xl font-semibold text-white sm:text-2xl">
                        Computer Science Engineering Student
                    </h2>

                    <p className="mt-5 max-w-xl text-base leading-7 text-[#b8b8c7] sm:text-lg">
                        I build web applications, explore backend technologies
                        and enjoy turning ideas into practical real-world
                        solutions.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">

                        <button
                            type="button"
                            className="flex items-center gap-2 rounded-lg bg-[#8b5cf6] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-[#7c3aed] hover:shadow-lg hover:shadow-[#8b5cf6]/20"
                        >
                            View Projects
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>

                        <button
                            type="button"
                            className="flex items-center gap-2 rounded-lg border border-[#8b5cf6] px-6 py-3 font-semibold text-[#a78bfa] transition duration-300 hover:bg-[#8b5cf6] hover:text-white"
                        >
                            View Resume
                            <i className="fa-solid fa-file-lines"></i>
                        </button>

                    </div>

                    <div className="mt-8 flex items-center gap-4">

                        <a
                            href="#"
                            aria-label="GitHub"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-lg text-white transition duration-300 hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 hover:text-[#a78bfa]"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>

                        <a
                            href="#"
                            aria-label="LinkedIn"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-lg text-white transition duration-300 hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 hover:text-[#a78bfa]"
                        >
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>

                        <a
                            href="#"
                            aria-label="Instagram"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-lg text-white transition duration-300 hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 hover:text-[#a78bfa]"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>

                        <a
                            href="#"
                            aria-label="Email"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-lg text-white transition duration-300 hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 hover:text-[#a78bfa]"
                        >
                            <i className="fa-solid fa-envelope"></i>
                        </a>

                    </div>

                </div>

                <div className="flex justify-center lg:justify-end">

                    <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/5 shadow-2xl shadow-[#8b5cf6]/10 sm:h-80 sm:w-80 lg:h-96 lg:w-96">

                        <div className="h-56 w-56 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/5 sm:h-64 sm:w-64 lg:h-72 lg:w-72 ">
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;