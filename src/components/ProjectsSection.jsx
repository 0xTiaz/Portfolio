import { ArrowRight, ExternalLinkIcon, Github } from "lucide-react";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";

const projects = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "First Protfolio using ReactJS deployed from GitHub with Vercel.",
    image: project1,
    tags: ["React", "TailWindCSS", "Lucide React"],
    demoUrl:
      "https://portfolio-q9le3f263-matias-figueroas-projects.vercel.app/",
    githubUrl: "https://github.com/0xTiaz/Portfolio",
  },
  {
    id: 2,
    title: "On Hold: E-Commerce",
    description: "Modern styled e-commerce deployed from GitHub with Vercel.",
    image: project2,
    tags: ["React", "TailWindCSS", "Lucide React", "API"],
    demoUrl: "https://e-commerce-chi-black-15.vercel.app/",
    githubUrl: "https://github.com/0xTiaz/e-commerce",
  },
  {
    id: 3,
    title: "Current: Dashboard with Mongo API",
    description: "Dashboard with api connection to mongoDB",
    image: project3,
    tags: ["React", "TailWindCSS", "MongoDB", "API"],
    // demoUrl: "",
    githubUrl: "https://github.com/0xTiaz/dashboard-mongo",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="trext-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performmance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs backdrop-blur card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border bg-primary/20 rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLinkIcon size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/0xTiaz"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            tooltip="Link is broken"
          >
            Ckech my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
