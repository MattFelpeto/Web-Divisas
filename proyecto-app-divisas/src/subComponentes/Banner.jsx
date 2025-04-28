import { NavLink } from "react-router-dom"


export const Banner = (foto) => {
  return (
    <>
        <section className="flex justify-center w-full bg-[url(./assets/fondoBanner.png)] my-8 h-36 shadow-md shadow-slate-600">
            <article className="flex flex-col justify-center">
                <h6 className="text-2xl text-white font-[Roboto] bg-transparent mb-3">Convertí de dolar a peso rápido y viceversa, sin vueltas.</h6>
                <NavLink to="/CalculadoraSim" className="bg-color-2 w-40 h-9 mx-auto text-center place-content-center rounded-md hover:bg-color-1 hover:cursor-pointer transition-all duration-200 ease-in">
                    <span className="text-white font-[Roboto]">Ir a la calculadora</span>
                </NavLink>
            </article>
        </section>
    </>
  )
}
