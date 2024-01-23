import { useState } from "react";
import Overview from "./components/Overview";
import Portfolio from "./components/Portfolio";

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
    </div>
  );
}

export default App;
