import "./DialogStyle.css";

export function PortfolioContainer({ portfolio, works }) {
  return (
    <>
      <div className="flex flex-wrap min-[320px]:justify-center xl:justify-center 2xl:justify-center gap-10 mt-16 px-9">
        {works?.map(
          (work, index) =>
            work.type === portfolio && (
              <div
                className="max-w-56 flex flex-col gap-3 w-full items-center text-center text-pretty"
                key={index}
              >
                <img
                  src={work.img}
                  className="max-w-56 aspect-square object-contain"
                  alt={work.title}
                />
                <p className="text-lg font-semibold">{work.title}</p>
                <button
                  className="px-4 py-2 rounded-lg border bg-blue-300/30 transition font-semibold border-blue-600 text-sm hover:bg-blue-400/70"
                  onClick={() => {
                    document.getElementById(`workDialog-${index}`).showModal();
                  }}
                >
                  Hechar un vistazo
                </button>

                <dialog
                  id={`workDialog-${index}`}
                  className="sm:max-w-4xl  w-11/12 rounded-[30px] overflow-y-scroll py-8 px-5"
                >
                  <div className="flex flex-col mx-auto sm:flex-row gap-4">
                    <div className="w-full">
                      <img
                        className="sm:max-w-sm w-full mx-auto object-contain aspect-square"
                        src={work.img}
                        alt=""
                      />
                    </div>
                    <div className="w-full flex flex-col justify-between gap-5">
                      <div className="flex flex-col gap-y-6">
                        <h4 className="text-3xl text-black text-left font-black">
                          {work.title}
                        </h4>
                        <p className="text-pretty text-left">
                          {work.description}
                        </p>
                        <div className="flex flex-row flex-wrap gap-4 ">
                          <h5 className="text-xl font-black w-full text-left">
                            Tecnologias Utilizadas
                          </h5>
                          {work.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-6 py-1 border text-sm bg-slate-100 font-semibold border-gray-300 rounded-2xl"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-x-4">
                        <a
                          href={work.link}
                          className="px-4 py-2 rounded-lg border-2 w-fit bg-blue-500 text-white transition font-semibold border-blue-400/70 text-sm hover:bg-white  duration-75 hover:text-black"
                          onClick={() =>
                            document
                              .getElementById(`workDialog-${index}`)
                              .close()
                          }
                        >
                          Visitar Proyecto
                        </a>
                        <button
                          className="px-4 py-2 rounded-lg border-2 w-fit bg-red-500 text-white transition font-semibold border-red-400/70 text-sm hover:bg-white duration-75 hover:text-black"
                          onClick={() =>
                            document
                              .getElementById(`workDialog-${index}`)
                              .close()
                          }
                        >
                          Cerrar
                        </button>
                      </div>
                    </div>
                  </div>
                </dialog>
              </div>
            )
        )}
      </div>
    </>
  );
}
