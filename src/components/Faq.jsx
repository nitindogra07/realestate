import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Faq() {
  return (
    <div className="py-30 px-30 flex font-manrope ">
      <div className="w-[30%] h-fit sticky top-50 flex flex-col gap-10">
        <span>
          <span className="bg-gray-two w-fit font-manrope p-2 text-neutral-300 px-4 rounded-full">
            FAQ
          </span>
          <h1 className="text-5xl mt-5">Answering your questions</h1>
        </span>
        <p className="text-lg text-neutral-500">
          Got more questions? Send us your enquiry below
        </p>
        <button className="group relative px-6 py-3 bg-gray-two text-neutral-300 w-fit rounded-full font-manrope flex items-center gap-3 overflow-hidden transition-all duration-500 hover:pr-16">
          <span className="z-10 transition-all duration-500 group-hover:text-white">
            Contact us
          </span>

          <span className="relative w-10 h-10 flex items-center justify-center">
            <span className="absolute w-10 h-10 bg-white group-hover:bg-gray-two group-hover:text-white rounded-full scale-0 group-hover:scale-[8] group-hover:rounded-[50px] transition-all duration-500 ease-out" />
            <span className="relative z-10 w-10 h-10 bg-white group-hover:bg-gray-two  group-hover:text-white rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <ArrowRight className="w-5 h-5 text-black group-hover:text-white -rotate-45 transition-transform duration-500 group-hover:rotate-0" />
            </span>
          </span>
        </button>
      </div>
      <div className="w-[70%] pl-40">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1" className="hover:no-underline">
            <AccordionTrigger>
              <p className="text-start font-manrope text-2xl hover:no-underline">
                What area are you based in?
              </p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance transition-all ease-in-out duration-1000">
              <p className="text-lg font-[300] text-neutral-500">
                We primarily serve noida and surrounding areas, but depending on
                the project, we may be able to travel further. Get in touch to
                discuss your location and project needs.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              <p className="text-start font-manrope text-2xl hover:no-underline">
                How long does a typical project take?
              </p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance transition-all ease-in-out duration-1000">
              <p className="text-lg font-[300] text-neutral-500">
                Project timelines vary depending on the scope of work. A kitchen
                or bathroom renovation can take a few weeks, while larger
                projects like extensions or loft conversions may take several
                months. We provide clear timelines before starting any work.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              <p className="text-start font-manrope text-2xl hover:underline-none">
                Will I need planning permission for my project?
              </p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance transition-all ease-in-out duration-1000">
              <p className="text-lg font-[300] text-neutral-500">
                Some projects, such as extensions and loft conversions, may
                require planning permission, while others fall under permitted
                development. We can advise on the necessary permissions and help
                with the process if needed.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              <p className="text-start font-manrope text-2xl hover:underline-none">
                Do you provide a guarantee for your work?
              </p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance transition-all ease-in-out duration-1000">
              <p className="text-lg font-[300] text-neutral-500">
                Absolutely! We stand by the quality of our craftsmanship and
                offer guarantees on our work to give you peace of mind. Specific
                warranties may vary depending on the type of project—just ask us
                for details.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <p className="text-start font-manrope text-2xl hover:underline-none">
                Can I stay in my home while the work is being done?
              </p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance transition-all ease-in-out duration-1000">
              <p className="text-lg font-[300] text-neutral-500">
                It depends on the type of work being carried out. For smaller
                projects like bathrooms and kitchens, staying at home may be
                possible with minimal disruption. However, larger renovations
                and structural work may require temporary accommodation. We’ll
                discuss this with you before starting.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              <p className="text-start font-manrope text-2xl hover:underline-none">
                How do I get started with a project?
              </p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance transition-all ease-in-out duration-1000">
              <p className="text-lg font-[300] text-neutral-500">
                Simply get in touch! We’ll arrange a consultation to discuss
                your vision, assess your space, and provide expert advice. From
                there, we’ll give you a quote and a clear plan for moving
                forward.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              <p className="text-start font-manrope text-2xl hover:underline-none">
                Do you offer free quotes?
              </p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance transition-all ease-in-out duration-1000">
              <p className="text-lg font-[300] text-neutral-500">
                Yes! We offer free, no-obligation quotes. After an initial
                consultation, we’ll assess your project needs and provide a
                detailed estimate so you know exactly what to expect.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
