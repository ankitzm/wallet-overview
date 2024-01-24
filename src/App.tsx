import { useState } from "react";
import Overview from "./components/Overview";
import Portfolio from "./components/Portfolio";
import Accordions from "./components/Accordions";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 px-2 sm:px-10 gap-4 py-10 text-white">
      <nav className="bg-slate-400">
        the navbar
      </nav>
      <div className="flex justify-between">
        <span>
          overview
        </span>
        <span>
          icons
        </span>
      </div>

      <Overview />
      <Portfolio />
      <Accordions />
    </div >
  );
}

export default App;
