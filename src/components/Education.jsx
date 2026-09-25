function Education() {
    return (
        <section
            id="education"
            className="bg-[#07051a] px-[7%] py-20"
        >

            {/* Section Heading */}
            <div className="mb-12 text-center">

                <span className="text-sm font-semibold tracking-wider text-[#8b5cf6]">
                    MY JOURNEY
                </span>

                <h2 className="mt-2 text-3xl font-bold text-white">
                    EDUCATION
                </h2>

                <p className="mt-2 text-sm text-[#b8b8c7]">
                    My academic journey and educational background.
                </p>

            </div>


            {/* Education Container */}
            <div className="mx-auto max-w-4xl">

                {/* Education Card */}
                <div className="relative rounded-xl border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 p-7 transition duration-300 hover:-translate-y-1 hover:border-[#8b5cf6]/40 hover:bg-[#8b5cf6]/10">

                    <div className="flex flex-col gap-6 md:flex-row md:items-start">

                        {/* Icon */}
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#8b5cf6]/10 text-xl text-[#a78bfa]">
                            <i className="fa-solid fa-graduation-cap"></i>
                        </div>


                        {/* Education Information */}
                        <div className="flex-1">

                            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">

                                <div>

                                    <h3 className="text-xl font-semibold text-white">
                                        Goa Engineering College
                                    </h3>

                                    <p className="mt-1 text-sm text-[#a78bfa]">
                                        Bachelor of Engineering — Computer Science & Engineering
                                    </p>

                                </div>


                                <span className="w-fit rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/10 px-3 py-1 text-xs text-[#c4b5fd]">
                                    2025 — Present
                                </span>

                            </div>


                            <p className="mt-5 text-sm leading-7 text-[#a9a6b8]">
                                Currently pursuing my Bachelor of Engineering in
                                Computer Science and Engineering, while developing
                                my programming, web development and problem-solving
                                skills through academic work and personal projects.
                            </p>


                            {/* Highlights */}
                            <div className="mt-6 flex flex-wrap gap-2">

                                <span className="rounded-md border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 px-3 py-2 text-xs text-[#bdb9ca]">
                                    Computer Science
                                </span>

                                <span className="rounded-md border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 px-3 py-2 text-xs text-[#bdb9ca]">
                                    Software Development
                                </span>

                                <span className="rounded-md border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 px-3 py-2 text-xs text-[#bdb9ca]">
                                    Data Structures
                                </span>

                                <span className="rounded-md border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 px-3 py-2 text-xs text-[#bdb9ca]">
                                    Web Development
                                </span>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Previous Education */}
                <div className="mt-6 rounded-xl border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 p-7 transition duration-300 hover:-translate-y-1 hover:border-[#8b5cf6]/40 hover:bg-[#8b5cf6]/10">

                    <div className="flex flex-col gap-6 md:flex-row md:items-start">

                        {/* Icon */}
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#8b5cf6]/10 text-xl text-[#a78bfa]">
                            <i className="fa-solid fa-school"></i>
                        </div>


                        {/* Information */}
                        <div className="flex-1">

                            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">

                                <div>

                                    <h3 className="text-xl font-semibold text-white">
                                        Higher Secondary Education
                                    </h3>

                                    <p className="mt-1 text-sm text-[#a78bfa]">
                                        Science Stream
                                    </p>

                                </div>


                                <span className="w-fit rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/10 px-3 py-1 text-xs text-[#c4b5fd]">
                                    Completed
                                </span>

                            </div>


                            <p className="mt-5 text-sm leading-7 text-[#a9a6b8]">
                                Completed higher secondary education with a focus
                                on science and mathematics, building the foundation
                                for my journey into computer science and engineering.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Education;