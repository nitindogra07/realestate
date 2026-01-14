import { Star } from "lucide-react";
import { motion } from "motion/react";

export default function TestimonialCard() {
  const child = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={child}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="max-w-80 flex flex-col gap-5 py-5 px-5 rounded-xl bg-gray-two mb-5"
    >
      <span className="flex">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star key={idx} size={16} />
        ))}
      </span>

      <p className="text-lg font-[300]">
        RealBizz did an incredible job on our kitchen. The craftsmanship was
        top-notch, and the team was professional from start to finish. Highly
        recommend
      </p>

      <span className="flex gap-2 items-center">
        <span className="w-8 h-8 rounded-full overflow-hidden flex">
          <img
            src="https://framerusercontent.com/images/7fL4QJDsuimM3GmAxnTxB58Lrw.jpg?scale-down-to=1024"
            className="h-full rounded-full w-full object-cover"
            alt=""
          />
        </span>
        <h1>nitin dogra</h1>
      </span>
    </motion.div>
  );
}
