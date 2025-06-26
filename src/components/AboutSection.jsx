import { Briefcase, Code, User } from "lucide-react";
import resume from '../assets/CV_Matias_Figueroa.pdf';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Junior react developer.
            </h3>
            <p className="text-muted-foreground">Are you interested in my designs?</p>
            <p className="text-muted-foreground">Don't doubt to get in touch with me</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href={resume} download='resume' className="cosmic-button">
                {" "}
                Get in touch
              </a>

              <a
                href="#contact"
                className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {" "}
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-card p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Developement</h4>
                  {/* <p className="text-muted-foreground">
                  </p> */}
                </div>
              </div>
            </div>
            <div className="bg-card p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX</h4>
                  {/* <p className="text-muted-foreground">
                  </p> */}
                </div>
              </div>
            </div>
            <div className="bg-card p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  {/* <p className="text-muted-foreground">
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
