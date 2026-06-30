import FadeIn from "../animations/FadeIn";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import SkillCard from "../ui/SkillCard";

import { skillCategories } from "../../data/skills";

function Skills() {
  return (
    <section id="skills" className="py-24">
      <Container>
        <SectionTitle
          title="Tech Stack"
          subtitle="Technologies I use to build modern backend applications."
        />

        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.title} delay={index * 0.1}>
              <div>
                <h3 className="mb-8 text-2xl font-semibold">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                  {category.skills.map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
