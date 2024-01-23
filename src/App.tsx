import { useState } from "react";
import Overview from "./components/Overview";
import Portfolio from "./components/Portfolio";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col h-screen bg-gray-900 px-10 gap-2">
      <nav className="bg-slate-400">
        the navbar
      </nav>
      <div className="bg-red-200 flex justify-between">
        <span>
          overview
        </span>
        <span>
          icons
        </span>
      </div>

      <Overview />
      <Portfolio />

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;
