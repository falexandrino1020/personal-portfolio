import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    const resumeUrl = `${import.meta.env.BASE_URL}FelipeAlexandrino-Resume.pdf`;

    return (
        <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">

                    <h2 className="text-2xl font-semibold">About Portfolio</h2>

                    <p className="text-muted-foreground">
                        This portfolio was created using Vite, React, and Tailwindcss 
                    </p>

                    <h3 className="text-2xl font-semibold">Background & Experience</h3>

                    <p className="text-muted-foreground">
                        My background started as a support specialist, where I learned the value of communication and problem-solving
                        under pressure. That experience now fuels my approach to software development: writing clean,
                        maintainable code that serves real user needs. Over the past year, I’ve contributed to building company-wide internal tools and applications,
                        building scalable backends in C# and crafting responsive, accessible frontends with Telerik for our departments to serve thousands of clients. I am also
                        familiar with many other languages and frameworks, for more information, please download my resume or view my skills section.
                    </p>                    

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a  href="#contact" className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a>

                        <a  href={resumeUrl}
                            download
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download Resume
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Design </h4>
                                <p className="text-muted-foreground">
                                    Creating responsive websites and web applications using modern frameworks, with a focus on intuitive
                                    user interfaces and seamless user experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Backend Development </h4>
                                <p className="text-muted-foreground">
                                    Designing and building scalable and secure backends using
                                    modern technologies. This includes developing RESTful APIs, integrating databases,
                                    and implementing authentication and third-party services to support full-stack applications.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Relevant Experience </h4>
                                <p className="text-muted-foreground">
                                    I have one year of hands-on experience as an application developer at a startup, where I contributed
                                    to real-world projects from concept to deployment. For a detailed list of my accomplishments, please
                                    refer to my resume.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};