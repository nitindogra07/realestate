import { motion } from "motion/react";

export default function Features() {
  const imgs = [
    "https://framerusercontent.com/images/bwP8CYttC1lINgPtK7lQja0.png?scale-down-to=512",
    "https://framerusercontent.com/images/RbmRrHiT87wxDx7Cox6FOA1sM3k.png?scale-down-to=1024",
    "https://framerusercontent.com/images/tWbl1rD5H93nV4ujsuqC2FUaqKM.png?scale-down-to=512",
    "https://framerusercontent.com/images/A7yE2PBsrF4l2EgA4yTO9HiAcPQ.png?scale-down-to=1024",
  ];


  const parent = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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
    <div className="py-20 px-30 bg-white font-manrope">
      <div className="w-full flex gap-10">
      
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="w-[40%]"
        >
          <span className="bg-gray px-3 py-1 rounded-full text-white text-sm font-medium">
            About Us
          </span>

          <h1 className="text-5xl mt-4 leading-tight max-w-[300px] font-semibold">
            Home improvement specialists
          </h1>
        </motion.div>


        <div className="w-[60%] text-xl">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="leading-[28px] font-[400] text-gray-600"
          >
            Welcome to Realbizz, your trusted home improvement experts, dedicated
            to transforming homes with precision and care. With years of
            experience in building kitchens, bathrooms, garages, and more, we
            take pride in delivering top-quality craftsmanship and a seamless
            customer experience. Our mission is to bring your vision to life
            while ensuring clear communication and expert guidance at every
            step. Let’s create a home you’ll love!
          </motion.p>
        </div>
      </div>

  
      <motion.div
        variants={parent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-14 grid grid-cols-4 gap-6"
      >
        {imgs.map((src, idx) => (
          <motion.img
            key={idx}
            src={src}
            alt="feature"
            variants={child}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-full rounded-xl object-cover h-full"
          />
        ))}
      </motion.div>
    </div>
  );
}
