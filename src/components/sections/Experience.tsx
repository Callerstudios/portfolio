import { motion } from "framer-motion";

import FadeIn from "../animations/FadeIn";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import { experiences } from "../../data/experience";

function Experience() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <SectionTitle
          title="Experience & Education"
          subtitle="My journey in backend engineering and software development."
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline */}

          <div className="absolute left-6 top-0 h-full w-0.5 bg-slate-200" />

          <div className="space-y-12">
            {experiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.title} delay={index * 0.1}>
                  <div className="relative flex gap-8">
                    {/* Timeline Icon */}

                    <motion.div
                      whileHover={{
                        scale: 1.08,
                      }}
                      className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-600 text-white shadow"
                    >
                      <Icon size={22} />
                    </motion.div>

                    {/* Content Card */}

                    <motion.div
                      whileHover={{
                        y: -4,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="flex-1 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition-colors"
                    >
                      <span className="text-sm font-medium text-blue-400">
                        {item.date}
                      </span>

                      <h3 className="mt-2 text-xl font-semibold text-slate-100">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-slate-500">
                        {item.organization}
                      </p>

                      <p className="mt-4 leading-7 text-slate-400">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Experience;
