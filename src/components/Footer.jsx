function Footer() {
    return (
        <footer className="border-t border-[#8b5cf6]/10 bg-[#050316] px-[7%] py-10">

            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">

                {/* Logo / Name */}
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-bold text-white">
                        Vithal Kerkar
                    </h2>

                    <p className="mt-1 text-sm text-[#8f8b9f]">
                        Computer Science Engineering Student building, learning and improving.
                    </p>
                </div>


                {/* Social Links */}
                <div className="flex items-center gap-5">

                    <a
                        href="#"
                        className="text-[#8f8b9f] transition hover:text-[#a78bfa]"
                        aria-label="GitHub"
                    >
                        <i className="fa-brands fa-github text-xl"></i>
                    </a>

                    <a
                        href="#"
                        className="text-[#8f8b9f] transition hover:text-[#a78bfa]"
                        aria-label="LinkedIn"
                    >
                        <i className="fa-brands fa-linkedin-in text-xl"></i>
                    </a>

                    <a
                        href="#"
                        className="text-[#8f8b9f] transition hover:text-[#a78bfa]"
                        aria-label="Email"
                    >
                        <i className="fa-solid fa-envelope text-xl"></i>
                    </a>

                </div>

            </div>


            {/* Bottom */}
            <div className="mx-auto mt-8 max-w-6xl border-t border-[#8b5cf6]/10 pt-6 text-center">

                <p className="text-xs text-[#777284]">
                    © 2026 Vithal Kerkar. All rights reserved.
                </p>

                <p className="mt-2 text-xs text-[#625e70]">
                    Built with React, Tailwind CSS & JavaScript.
                </p>

            </div>

        </footer>
    );
}

export default Footer;