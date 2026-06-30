import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import FadeIn from "../animations/FadeIn";

import { contacts } from "../../data/contact";

function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionTitle
          title="Let's Connect"
          subtitle="Whether you have an opportunity, a project idea, or simply want to connect, I'd love to hear from you."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <FadeIn key={contact.title} delay={index * 0.1}>
                <motion.a
                  href={contact.href}
                  target={
                    contact.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{
                    y: -6,
                    scale: 1.02
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40"
                >
                  <div>
                    <div className="mb-5 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-400">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-xl font-semibold text-slate-100">
                      {contact.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-400">
                      {contact.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-2 font-medium text-blue-400">
                    <span>Open</span>

                    <ArrowUpRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </motion.a>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Contact;
