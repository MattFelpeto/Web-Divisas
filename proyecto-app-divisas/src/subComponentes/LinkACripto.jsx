import { NavLink } from 'react-router-dom';

export const LinkACripto = () => {
    return (
        <>
            <div className="flex my-auto mx-auto">
                    <NavLink to="/Cripto" className="text-xl md:text-2xl text-white sm:text-lg lg:text-lg font-[Roboto Condensed] hover:cursor-pointer 
                     hover:lg:text-xl transition-all ease-in-out duration-700">Criptomonedas</NavLink>
            </div>
        </>
    )
}
