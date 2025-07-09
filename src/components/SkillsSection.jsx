import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  //  Front-End
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TailWind", level: 85, category: "frontend" },
  // { name: "", level: 80, category: "frontend" },

  //  Back-End
  { name: "C#", level: 80, category: "backend" },
  { name: "VisualBasic", level: 75, category: "backend" },
  { name: "Node.js", level: 50, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "SQL", level: 90, category: "backend" },
  { name: "API", level: 55, category: "backend" },

  //Tools
  {
    name: "Postman",
    level: 65,
    category: "tools",
    test: "https://matiasfigueroa-1441068.postman.co/workspace/Matias-Figueroa's-Workspace~e28132e0-0c9b-401b-8e27-7e7c60b9ddda/collection/46598418-f5b0b9bd-4298-42db-bbb5-c43d4a73553c?action=share&creator=46598418",
  },
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
  { name: "VS Code", level: 85, category: "tools" },
  { name: "SAP B1", level: 95, category: "tools" },
  { name: "Active Directory", level: 85, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-2 px-4 relative bg-background/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover backdrop-blur"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out}"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
