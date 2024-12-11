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
    'Logotipo de la empresa "MGUSTACEL"',
    "https://mi-portafolio-89bae.web.app/img/tienda%20de%20celulares.13ea07aa.jpg",
    "https://mi-portafolio-89bae.web.app/img/tienda%20de%20celulares.13ea07aa.jpg",
    ["Photoshop", "Adobe XD", "Adobe Ilustrator"],
    PORTFOLIOS.DG
  ),
  new WorkCard(
    "Flyer",
    'Logotipo de la empresa "Cosmetics Shop"',
    "https://mi-portafolio-89bae.web.app/img/cosmetic%20shop.aa5b4458.jpg",
    "https://mi-portafolio-89bae.web.app/img/cosmetic%20shop.aa5b4458.jpg",
    ["Photoshop", "Adobe XD", "Adobe Ilustrator"],
    PORTFOLIOS.DG
  ),
  new WorkCard(
    "Logotipo",
    'Logotipo de la empresa "Arroz Grill"',
    "https://mi-portafolio-89bae.web.app/img/logo%201%20fonfo%20negro.7b8849fd.jpg",
    "https://mi-portafolio-89bae.web.app/img/logo%201%20fonfo%20negro.7b8849fd.jpg",
    ["Photoshop", "Adobe XD", "Adobe Ilustrator"],
    PORTFOLIOS.DG
  ),
  new WorkCard(
    "Flyer",
    'Flyer de la empresa "Chelita Store"',
    "https://mi-portafolio-89bae.web.app/img/give%20away.aad1f216.jpg",
    "https://mi-portafolio-89bae.web.app/img/give%20away.aad1f216.jpg",
    ["Photoshop", "Adobe XD", "Adobe Ilustrator"],
    PORTFOLIOS.DG
  ),
  new WorkCard(
    "Logotipo",
    'Logotipo de la empresa "SOEMSA S.A.S"',
    "https://mi-portafolio-89bae.web.app/img/LOGO%20SODEMSA.94808117.jpeg",
    "https://mi-portafolio-89bae.web.app/img/LOGO%20SODEMSA.94808117.jpeg",
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
