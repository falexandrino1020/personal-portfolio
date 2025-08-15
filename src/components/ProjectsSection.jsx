import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "YouTube Clone",
    description:
      "Recreated the user interface and core layout of YouTube to improve frontend development skills and strengthen proficiency in responsive design. I also wanted to build a habit of developing.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS"],
    githubUrl: "https://github.com/falexandrino1020/Practice/tree/main/Html-CSS-Practice-main",
  },
  {
    id: 2,
    title: "Slot Machine Game",
    description:
      "Built an interactive, terminal-based slot machine game featuring randomized logic, stylized text output, and synchronous input handling for engaging command-line gameplay.",
    image: "/projects/project2.png",
    tags: ["JavaScript", "Node.js", "Prompt-Sync"],
    githubUrl: "https://github.com/falexandrino1020/Practice/tree/main/JS-Practice-SlotMachine-main",
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description:
      "Personal website showcasing skills, GitHub projects, and contact information. Built with modern front-end tooling and responsive design principles.",
    image: "/projects/project3.png",
    tags: ["React", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/falexandrino1020/personal-portfolio",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 relative pb-14 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-6 bottom-6 text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/falexandrino1020"
          >
            Check Out My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
