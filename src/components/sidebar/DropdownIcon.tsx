"use client";

import { motion } from "framer-motion";

import { StepForward } from "lucide-react";

const DropdownIcon = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],

        transition: {
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        },
      }}
    >
      <StepForward
        size={18}
        className="rotate-[-90deg] fill-heading text-heading"
      />
    </motion.div>
  );
};

export default DropdownIcon;
