import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

export const LinkaCalc = () => {
    return (
        <>
            <div className="my-auto mx-auto">
                    <NavLink to='/CalculadoraSim' className="text-slate-50 text-xl md:text-2xl sm:text-lg lg:text-lg font-[Roboto Condensed] transition-all ease-in-out duration-700 hover:cursor-pointer hover:lg:text-xl">
                        Calculadora
                    </NavLink>
            </div>
        </>
    )
}
