import { motion } from "motion/react";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {

  const parent = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="py-20 px-30 bg-gray text-white">
      <div className="font-manrope flex flex-col items-center gap-3">
        <span className="bg-gray-two font-manrope p-2 text-neutral-300 px-4 rounded-full">
          Testimonials
        </span>
        <h1 className="text-5xl font-medium">Hear from our clients</h1>
        <p className="max-w-lg text-center text-neutral-500">
          Hear from our happy clients about their experience working with Refit
          and the quality of our craftsmanship.
        </p>
      </div>

    
      <motion.div
        variants={parent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-15 flex justify-between flex-wrap gap-6"
      >
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </motion.div>
    </div>
  );
}
