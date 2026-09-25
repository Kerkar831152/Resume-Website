function Contact() {
    return (
        <section
            id="contact"
            className="bg-[#08031c] px-[7%] py-20"
        >
            {/* Section Heading */}
            <div className="mb-12 text-center">
                <span className="text-sm font-semibold tracking-wider text-[#8b5cf6]">
                    GET IN TOUCH
                </span>

                <h2 className="mt-2 text-3xl font-bold text-white">
                    CONTACT
                </h2>

                <p className="mt-2 text-sm text-[#b8b8c7]">
                    Have a question, opportunity, or just want to connect?
                    Feel free to reach out.
                </p>
            </div>

            {/* Contact Content */}
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">

                {/* Contact Information */}
                <div className="rounded-xl border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 p-7">

                    <h3 className="text-xl font-semibold text-white">
                        Let's Connect
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#a9a6b8]">
                        I'm always open to discussing projects, collaborations,
                        internships, or interesting ideas.
                    </p>

                    <div className="mt-7 space-y-5">

                        {/* Email */}
                        <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#8b5cf6]/10 text-[#a78bfa]">
                                <i className="fa-solid fa-envelope"></i>
                            </div>

                            <div>
                                <p className="text-xs text-[#858193]">
                                    Email
                                </p>

                                <a
                                    href="mailto:your@email.com"
                                    className="text-sm text-[#d4d0df] transition hover:text-white"
                                >
                                    vithalkerkar831152@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#8b5cf6]/10 text-[#a78bfa]">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>

                            <div>
                                <p className="text-xs text-[#858193]">
                                    Location
                                </p>

                                <p className="text-sm text-[#d4d0df]">
                                    Goa, India
                                </p>
                            </div>
                        </div>

                        {/* GitHub */}
                        <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#8b5cf6]/10 text-[#a78bfa]">
                                <i className="fa-brands fa-github"></i>
                            </div>

                            <div>
                                <p className="text-xs text-[#858193]">
                                    GitHub
                                </p>

                                <a
                                    href="#"
                                    className="text-sm text-[#d4d0df] transition hover:text-white"
                                >
                                    https://github.com/Kerkar831152
                                </a>
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#8b5cf6]/10 text-[#a78bfa]">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>

                            <div>
                                <p className="text-xs text-[#858193]">
                                    LinkedIn
                                </p>

                                <a
                                    href="#"
                                    className="text-sm text-[#d4d0df] transition hover:text-white"
                                >
                                    LinkedIn Profile
                                </a>
                            </div>
                        </div>

                    </div>
                </div>


                {/* Message Form */}
                <div className="rounded-xl border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 p-7">

                    <h3 className="text-xl font-semibold text-white">
                        Send Me a Message
                    </h3>

                    <form className="mt-6 space-y-5">

                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm text-[#c7c4d5]"
                            >
                                Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your name"
                                className="w-full rounded-lg border border-[#8b5cf6]/15 bg-[#08031c] px-4 py-3 text-sm text-white outline-none placeholder:text-[#666274] focus:border-[#8b5cf6]/50"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm text-[#c7c4d5]"
                            >
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="your@email.com"
                                className="w-full rounded-lg border border-[#8b5cf6]/15 bg-[#08031c] px-4 py-3 text-sm text-white outline-none placeholder:text-[#666274] focus:border-[#8b5cf6]/50"
                            />
                        </div>

                        {/* Subject */}
                        <div>
                            <label
                                htmlFor="subject"
                                className="mb-2 block text-sm text-[#c7c4d5]"
                            >
                                Subject
                            </label>

                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="What is this about?"
                                className="w-full rounded-lg border border-[#8b5cf6]/15 bg-[#08031c] px-4 py-3 text-sm text-white outline-none placeholder:text-[#666274] focus:border-[#8b5cf6]/50"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label
                                htmlFor="message"
                                className="mb-2 block text-sm text-[#c7c4d5]"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Write your message..."
                                className="w-full resize-none rounded-lg border border-[#8b5cf6]/15 bg-[#08031c] px-4 py-3 text-sm text-white outline-none placeholder:text-[#666274] focus:border-[#8b5cf6]/50"
                            ></textarea>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#8b5cf6] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#7c3aed]"
                        >
                            <i className="fa-solid fa-paper-plane"></i>
                            Send Message
                        </button>

                    </form>
                </div>

            </div>
        </section>
    );
}

export default Contact;
