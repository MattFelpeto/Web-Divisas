import { NavLink } from "react-router-dom"
import estamosTrabajando from '../assets/estamosTrabajando.png';


export const EstamosTrabajando = () => {
    return (
        <>
            <section className="flex flex-col">
                <article className="flex flex-col sm:w-full">
                    <NavLink to='/'>
                        <button className="flex mx-auto mt-9 justify-center w-28 text-center text-slate-50 rounded-sm hover:cursor-pointer bg-color-2 hover:bg-color-1 transition-all ease-in-out duration-700" type="button">Volver</button>
                    </NavLink>
                    <img className="flex mx-auto w-2/3" src={estamosTrabajando} alt="Pagina-en-Proceso" />
                </article>
            </section>
        </>
    )
}
