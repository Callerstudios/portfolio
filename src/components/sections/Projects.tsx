import FadeIn from "../animations/FadeIn";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";


import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionTitle
          title="Case Studies"
          subtitle="Production-ready backend applications demonstrating authentication, database design, API architecture, and deployment."
        />

        <div className="space-y-16">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.15}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
