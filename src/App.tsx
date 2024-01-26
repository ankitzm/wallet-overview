import { useEffect, useState, useMemo, SetStateAction } from "react";
import Overview from "./components/Overview";
import Portfolio from "./components/Portfolio";
import Accordions from "./components/Accordions";
import getCrptoByChainName from "./api/getCryptoByChainName";
import getAllCrypto from "./api/allCryptos";
import getStats from "./api/getStats";

function App() {
  const [search, setSearch] = useState('');

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSearch(event.target.value);
  }

  useEffect(() => {
    // getAllCrypto()
    getStats('near')
    getCrptoByChainName('near-protocol')
  }, [])


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
          <input
            title="search"
            className="bg-slate-400 p-1"
            onChange={handleChange}
            value={search}
          />

          <button
            className="bg-slate-600 p-1"
            onClick={() => {
              console.log("search input -  ", search);
            }}
          >Search</button>
        </span>
      </div>

      <Overview />
      <Portfolio />
      <Accordions />
    </div >
  );
}

export default App;
