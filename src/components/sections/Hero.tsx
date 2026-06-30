import { motion } from "framer-motion";
import Button from "../ui/Button";
import Container from "../ui/Container";

function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-72px)] items-center">
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center"
        >
          <p className="mb-4 text-blue-500">Hi, I'm</p>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">Busari Roqeeb</h1>

          <h2 className="mb-6 text-2xl text-slate-300 md:text-3xl">
            Backend Developer
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">
            I build secure, scalable REST APIs using Node.js, TypeScript,
            Express, and MySQL.
          </p>

          <div className="flex justify-center gap-4">
            <Button href="#projects">View Projects</Button>

            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;
