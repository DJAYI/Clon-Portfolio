import { useState } from "react";

export default function PortfolioComponent() {
  const PORTFOLIOS = {
    DG: "Diseño Gráfico",
    DS: "Desarrollo de Software",
  };

  const [portfolio, setPortfolio] = useState(PORTFOLIOS.DG);

  const handlePortfolio = () => {
    setPortfolio(portfolio === PORTFOLIOS.DG ? PORTFOLIOS.DS : PORTFOLIOS.DG);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center px-9">
        <h1
          className={`text-2xl font-bold text-gray-950 ${
            portfolio === PORTFOLIOS.DS ? "text-green-600" : "text-orange-500"
          }`}
        >
          {portfolio}
        </h1>

        <button
          className={`relative inline-flex items-center h-10 rounded-full w-24 transition-colors ${
            portfolio === PORTFOLIOS.DS ? "bg-green-400" : "bg-orange-400"
          }`}
          onClick={handlePortfolio}
        >
          <span
            className={`inline-block w-7 h-7 transform rounded-full bg-white transition-transform ${
              portfolio === PORTFOLIOS.DS ? "translate-x-16" : "translate-x-1"
            }`}
          />
        </button>
      </div>
    </>
  );
}
