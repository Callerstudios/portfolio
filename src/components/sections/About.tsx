import {
  FaCode,
  FaDatabase,
  FaGraduationCap,
  FaLocationDot,
} from "react-icons/fa6";

import FadeIn from "../animations/FadeIn";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const quickFacts = [
  {
    icon: <FaLocationDot className="text-blue-500" />,
    label: "Location",
    value: "Lagos, Nigeria",
  },
  {
    icon: <FaGraduationCap className="text-blue-500" />,
    label: "Education",
    value: "B.Tech Computer Engineering",
  },
  {
    icon: <FaCode className="text-blue-500" />,
    label: "Specialization",
    value: "Backend Development",
  },
  {
    icon: <FaDatabase className="text-blue-500" />,
    label: "Focus",
    value: "REST APIs & Database Design",
  },
];

function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionTitle
          title="About Me"
          subtitle="A backend developer passionate about building reliable and scalable software."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn direction="left">
            <div>
              <p className="text-lg leading-8 text-slate-400">
                I'm a backend developer with a passion for building secure,
                scalable, and maintainable REST APIs using
                <span className="font-medium text-white">
                  {" "}
                  Node.js, TypeScript, Express, and MySQL
                </span>
                .
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                I enjoy designing relational databases, implementing
                authentication and authorization systems, and solving complex
                business problems through clean service architecture and
                transaction-safe backend logic.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                My goal is to build backend systems that are reliable, easy to
                maintain, and ready for production.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
              <h3 className="mb-8 text-2xl font-semibold">Quick Facts</h3>

              <div className="space-y-6">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-xl">
                      {fact.icon}
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">{fact.label}</p>

                      <p className="font-medium">{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

export default About;
