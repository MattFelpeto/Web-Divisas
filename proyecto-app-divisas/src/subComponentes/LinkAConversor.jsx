import { NavLink } from 'react-router-dom';

export const LinkAConversor = () => {
    return (
        <>
            <div className="my-auto mx-auto">
                    <NavLink to="/calculadora" className=" text-slate-50 hover:lg:text-xl text-xl md:text-2xl sm:text-lg lg:text-lg font-[Roboto Condensed] hover:cursor-pointer
                    transition-all ease-in-out duration-700">Conversor</NavLink>
            </div>
        </>
    )
}
