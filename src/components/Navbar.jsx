function Navbar() {
    return (
        <nav className="w-full border-b border-white/10 bg-[#08031c] px-[5%] lg:px-[7%]">
            <div className="flex min-h-[72px] items-center justify-between gap-6">

                <a
                    href="#"
                    className="whitespace-nowrap text-xl font-bold sm:text-2xl"
                >
                    <span className="text-[#8b5cf6]">Vithal</span>
                    <span className="text-white"> Kerkar</span>
                </a>

                <div className="hidden items-center gap-5 md:flex lg:gap-7">
                    <a
                        href="#home"
                        className="text-sm text-[#c7c4d5] transition duration-300 hover:text-[#8b5cf6]"
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        className="text-sm text-[#c7c4d5] transition duration-300 hover:text-[#8b5cf6]"
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        className="text-sm text-[#c7c4d5] transition duration-300 hover:text-[#8b5cf6]"
                    >
                        Skills
                    </a>

                    <a
                        href="#projects"
                        className="text-sm text-[#c7c4d5] transition duration-300 hover:text-[#8b5cf6]"
                    >
                        Projects
                    </a>

                    <a
                        href="#education"
                        className="text-sm text-[#c7c4d5] transition duration-300 hover:text-[#8b5cf6]"
                    >
                        Education
                    </a>

                    <a
                        href="#achievements"
                        className="text-sm text-[#c7c4d5] transition duration-300 hover:text-[#8b5cf6]"
                    >
                        Achievements
                    </a>

                    <a
                        href="#contact"
                        className="text-sm text-[#c7c4d5] transition duration-300 hover:text-[#8b5cf6]"
                    >
                        Contact
                    </a>
                </div>

                <button
                    type="button"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-xl text-white transition duration-300 hover:bg-[#8b5cf6]/15 hover:text-[#a78bfa]"
                    aria-label="Open navigation menu"
                >
                    ☰
                </button>

            </div>
        </nav>
    );
}

export default Navbar;