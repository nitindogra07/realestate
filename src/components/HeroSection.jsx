import { ArrowRight, House } from "lucide-react";
import { motion } from "motion/react";
export default function HeroSection() {
  return (
    <section className="px-30 pr-10 bg-gray h-dvh overflow-hidden">
      <div className="flex">
        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 , delay: 0.2 }}
          viewport={{ once: true }}
          className=" py-20 flex flex-col gap-10 w-1/2 relative"
        >
          <span className="mt-10">
            <span className="bg-gray-two w-fit rounded-full text-neutral-300 px-5 py-1 text-sm">
              Available for work
            </span>
            <h1 className="text-6xl font-manrope text-white max-w-xl mt-6">
              Your trusted partner for quality home improvement
            </h1>
          </span>
          <p className="text-[1.55vw] w-110 leading-8 text-neutral-300 font-manrope">
            RealBizz delivers expert home improvements, creating beautiful and
            functional spaces with quality craftsmanship.
          </p>
          <button className="group relative px-6 py-3 bg-gray-two text-neutral-300 w-fit rounded-full font-manrope flex items-center gap-3 overflow-hidden transition-all duration-500 hover:pr-16">
            <span className="z-10 transition-all duration-500 group-hover:text-black">
              Work With US
            </span>

            <span className="relative w-10 h-10 flex items-center justify-center">
              <span className="absolute w-10 h-10 bg-white rounded-full scale-0 group-hover:scale-[8] group-hover:rounded-[50px] transition-all duration-500 ease-out" />
              <span className="relative z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <ArrowRight className="w-5 h-5 text-black -rotate-45 transition-transform duration-500 group-hover:rotate-0" />
              </span>
            </span>
          </button>
          <div>
            <h1 className="font-medium absolute text-xl top-8 text-white flex gap-1">
              <House />
              RealBizz Estates
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 , delay : 0.2}}
          viewport={{ once: true }}
          className="py-7 relative overflow-hidden h-fit flex w-1/2 justify-end items-center"
        >
          <div className="relative">
            <img
              src="https://framerusercontent.com/images/yyYhQHFqAUi9h1nO5lH9iqGVY7o.png"
              className="object-cover rounded-xl"
              alt=""
              width={580}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/40 rounded-xl"></div>
          </div>
          <div className="absolute top-15 left-25 text-white px-5 flex justify-between gap-10 z-10">
            {["home", "about", "ourWork", "Contact"].map((item, idx) => (
              <a key={idx} href="" className="text-lg capitalize">
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
