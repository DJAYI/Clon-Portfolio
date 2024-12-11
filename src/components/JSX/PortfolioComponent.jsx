import { useState } from "react";
import { WorkCard } from "../../interfaces/IWorkCardImpl";
import { PortfolioContainer } from "./PortfolioContainer";

const PORTFOLIOS = {
  DG: "Diseño Gráfico",
  DS: "Desarrollo de Software",
};

const Works = [
  new WorkCard(
    "Logotipo",
    'Logotipo de la empresa "Arroz Grill"',
    "https://mi-portafolio-89bae.web.app/img/LOGO%20RESTAURANTE.e6a729f3.png",
    "https://mi-portafolio-89bae.web.app/img/LOGO%20RESTAURANTE.e6a729f3.png",
    ["Photoshop", "Adobe XD", "Adobe Ilustrator"],
    PORTFOLIOS.DG
  ),
  new WorkCard(
    "Logotipo",
    'Logotipo de la empresa "Arroz Grill"',
    "https://mi-portafolio-89bae.web.app/img/LOGO%20RESTAURANTE.e6a729f3.png",
    "https://mi-portafolio-89bae.web.app/img/LOGO%20RESTAURANTE.e6a729f3.png",
    ["Photoshop", "Adobe XD", "Adobe Ilustrator"],
    PORTFOLIOS.DG
  ),
  new WorkCard(
    "Logotipo",
    'Logotipo de la empresa "Arroz Grill"',
    "https://mi-portafolio-89bae.web.app/img/LOGO%20RESTAURANTE.e6a729f3.png",
    "https://mi-portafolio-89bae.web.app/img/LOGO%20RESTAURANTE.e6a729f3.png",
    ["Photoshop", "Adobe XD", "Adobe Ilustrator"],
    PORTFOLIOS.DG
  ),
  new WorkCard(
    "Logotipo",
    'Logotipo de la empresa "Arroz Grill"',
    "",
    "https://mi-portafolio-89bae.web.app/img/LOGO%20RESTAURANTE.e6a729f3.png",
    ["Photoshop", "Adobe XD", "Adobe Ilustrator"],
    PORTFOLIOS.DG
  ),

  new WorkCard(
    "Desarrollo",
    'Desarrollo de la empresa "Carbon"',
    "",
    "/carbon.png",
    ["React", "Tailwind", "Astro"],
    PORTFOLIOS.DS
  ),
];

export default function PortfolioComponent() {
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

      {/* Contenedor de Trabajos */}
      <PortfolioContainer portfolio={portfolio} works={Works} />
    </>
  );
}
