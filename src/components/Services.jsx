import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CookingPot } from "lucide-react";
export default function Services() {
  return (
    <div className="h-fit w-full px-30 py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 flex flex-col items-center gap-4"
      >
        <span className="bg-gray-two font-manrope p-2 text-neutral-300 px-4 rounded-full">
          services
        </span>
        <h1 className="text-6xl font-manrope font-medium">What we do</h1>
        <p className="text-xl font-light text-neutral-600">
          Find out which one of our services fit the needs of your project
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 , delay : 0.6}}
        viewport={{ once: true }}
        className="flex pb-15"
      >
        <div className="w-1/2">
          <img
            src="https://framerusercontent.com/images/A7yE2PBsrF4l2EgA4yTO9HiAcPQ.png?scale-down-to=1024"
            alt=""
            className="rounded-lg"
            width={450}
          />
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1" className="hover:no-underline">
              <AccordionTrigger>
                <span className="flex gap-3 items-center">
                  <span className="text-3xl">
                    <CookingPot />
                  </span>

                  <p className="text-start font-manrope text-2xl hover:no-underline">
                    Product Information
                  </p>
                </span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance transition-all ease-in-out duration-1000">
                <p className="text-lg font-[300] text-neutral-500">
                  At CyberBizz , we design and build stunning kitchens tailored
                  to your style and needs. Whether you're after a sleek modern
                  space or a classic, timeless look, our expert team delivers
                  high-quality craftsmanship, functionality, and attention to
                  detail to create the heart of your home.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                <span className="flex gap-3 items-center">
                  <span className="text-3xl">
                    <CookingPot />
                  </span>

                  <p className="text-start font-manrope text-2xl hover:no-underline">
                    Loft Conversions
                  </p>
                </span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance transition-all ease-in-out duration-1000">
                <p className="text-lg font-[300] text-neutral-500">
                  Maximise your home's potential with a bespoke loft conversion.
                  Whether you're looking for an extra bedroom, office, or living
                  space, Refit transforms underused lofts into stylish,
                  functional areas, adding both value and comfort to your home
                  with expert planning and precision construction.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                <span className="flex gap-3 items-center">
                  <span className="text-3xl">
                    <CookingPot />
                  </span>

                  <p className="text-start font-manrope text-2xl hover:underline-none">
                    Bathrooms
                  </p>
                </span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance transition-all ease-in-out duration-1000">
                <p className="text-lg font-[300] text-neutral-500">
                  From luxurious en-suites to practical family bathrooms, Refit
                  delivers beautifully designed spaces that combine style with
                  functionality. We handle everything from tiling and fixtures
                  to plumbing and lighting, ensuring a high-quality finish that
                  enhances both comfort and aesthetics.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                <span className="flex gap-3 items-center">
                  <span className="text-3xl">
                    <CookingPot />
                  </span>

                  <p className="text-start font-manrope text-2xl hover:underline-none">
                    Extensions
                  </p>
                </span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance transition-all ease-in-out duration-1000">
                <p className="text-lg font-[300] text-neutral-500">
                  Expand your living space with a seamless home extension.
                  Whether you need a bigger kitchen, a new living area, or a
                  multi-purpose space, Refit provides expertly crafted
                  extensions designed to enhance your home’s flow, value, and
                  usability, all while maintaining its unique character.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </motion.div>
    </div>
  );
}
