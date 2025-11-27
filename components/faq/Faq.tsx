import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/lib/data/faq";

export default function Faq() {
  return (
    <section className="min-h-svh w-full flex flex-col justify-center items-center font-funnel bg-muted-foreground">
      <h2 className="text-3xl text-dark sm:text-4xl border-b border-dark/32 pb-2 mb-2 px-4 text-center mx-16 sm:mx-0">
        Frequently Asked Questions
      </h2>
      <p className="sm:text-lg text-dark/64 px-4 text-center">
        Everything you need to know about Laurin Schmidt, Webdeveloper from
        Düsseldorf
      </p>
      <Accordion
        className=" text-dark max-w-3xl flex flex-col justify-center items-center pt-4"
        type="single"
        collapsible
      >
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
