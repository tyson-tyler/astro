import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-black dark:text-white">
          Why should people join?
        </AccordionTrigger>
        <AccordionContent className="text-black dark:text-white">
          This workshop will provide you with the knowledge you need to
          confidently practice tarot reading.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-black dark:text-white">
          Who is this workshop for?
        </AccordionTrigger>
        <AccordionContent className="text-black dark:text-white">
          This workshop is for anyone with an interest in tarot reading and a
          desire to learn to overcome life’s uncertainties.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-black dark:text-white">
          What are the problems people face?
        </AccordionTrigger>
        <AccordionContent className="text-black dark:text-white">
          Participants often struggle with understanding and applying tarot
          knowledge and connecting it with real-life events. They may find it
          difficult to grasp knowledge if the concepts are not taught in an
          easy-to-understand language.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-black dark:text-white">
          Will I get the reminder before the workshop begins?
        </AccordionTrigger>
        <AccordionContent className="text-black dark:text-white">
          Yes, you will receive a series of reminders through emails and
          messages.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-black dark:text-white">
          How will this workshop help?
        </AccordionTrigger>
        <AccordionContent className="text-black dark:text-white">
          This webinar will help them understand the cards and will give them
          clarity about how they can transform their lives by choosing tarot
          reading as their profession. They will also understand that they can
          generate passive income by doing tarot reading confidently.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
