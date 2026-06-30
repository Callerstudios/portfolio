import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface SkillCardProps {
  name: string;
  icon: IconType;
}

function SkillCard({ name, icon: Icon }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.2,
      }}
      className="flex flex-col items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition-colors"
    >
      <Icon size={42} className="text-blue-400" />

      <h3 className="font-semibold text-slate-100">{name}</h3>
    </motion.div>
  );
}

export default SkillCard;
