import { useState } from "react";
import { motion } from "framer-motion";
import logoWeb from '../assets/logoWeb.png'
import { NavLink } from 'react-router-dom';
import menuHamburguesa from '../assets/menuHamburguesa2.png';
import Switch from '@mui/material/Switch';
import botonCerrarMenu from '../assets/botonCerrar.png';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const listadoDivisasMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const cerrarMenuDivisas = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        <>
            <section className="w-full">
                <article className={`fixed lg:hidden text-white bg-fondo-menu outline outline-1 shadow-md shadow-black opacity-90 inset-y-0 left-0 w-full h-[400px] z-50 overflow-y-auto transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                    <div className="flex flex-col p-5 justify-start my-auto">
                        <article className="flex flex-row">
                            <div className="xs:hidden sm:flex sm:flex-row justify-center my-auto w-12 h-12 rounded-3xl">
                                <img src={logoWeb} className="flex w-18 h-10 my-auto" alt="logo-web" />
                            </div>
                            <div className="flex my-auto">
                                <h1 className="text-color-texto text-2xl font-serif">Web Divisas</h1>
                            </div>
                            <div className="flex w-7 my-auto mt-2 ml-20 p-5">
                                <motion.div whileTap={{ scale: 0.9 }} >
                                    <button className="text-color-texto text-sm w-7 rounded-sm font-serif" onClick={cerrarMenuDivisas}>
                                        <img className="flex " src={botonCerrarMenu} alt="cerrar-menu"/>
                                    </button>
                                </motion.div>
                            </div>
                        </article>
                        <hr className="text-black bg-black size-3/4 mb-4" />
                        <ul className="flex flex-col text-color-texto font-serif">
                            <div className="mb-2">
                            <NavLink to='/DolarOficialInfo'>
                                <span className="hover:underline">Dolar Oficial - Info</span>
                            </NavLink>
                            </div>
                            <div className="">
                            <NavLink to='/DolarBlueInfo'>
                                <span className="hover:underline" >Dolar Blue - Info</span>
                            </NavLink>
                            </div>
                        </ul>
                        <hr className="text-black bg-black size-3/4 mt-4 mb-4" />
                        <ul className="flex flex-col text-color-texto font-serif">
                            <NavLink to='/CalculadoraSim'>
                                <span className="hover:underline" >Calculadora</span>
                            </NavLink>
                        </ul>
                    </div>
                </article>
                <div className="w-full">
                <nav className="flex  flex-row justify-between min-w-fit h-20 bg-color-1/85">
                    <article className="flex my-auto mx-[-10px]">
                        <button className="w-18 h-14 mx-1 rounded-r-3xl bg-color-2 text-white text-xl shadow-lg shadow-black font-serif transition-all ease-in-out delay-150 hover:bg-white" onClick={listadoDivisasMenu}>
                            <img className="flex w-12 mx-3" src={menuHamburguesa} alt="menu-divisas" />
                        </button>
                    </article>
                    <article className="flex my-auto">
                        <Switch {...label} />
                    </article>
                </nav>
                <nav className="w-full h-12 bg-color-2">
                    <article className="w-full h-full flex flex-row justify-between ">
                        <div className="flex my-auto mx-auto">
                            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                                <h2 className="text-xl text-white sm:text-lg font-[Roboto Condensed] hover:cursor-pointer hover:underline hover:underline-offset-2 hover:decoration-white">Criptomonedas</h2>
                            </motion.div>
                        </div>
                        <div className="my-auto mx-auto">
                            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                                <NavLink to="/calculadora" className="text-white text-xl sm:text-lg font-[Roboto Condensed] hover:cursor-pointer hover:underline hover:underline-offset-2 hover:decoration-white hover:from-transparent">Conversor</NavLink>
                            </motion.div>
                        </div>
                    </article>
                </nav>
                </div>
            </section>
        </>
    )
}

export default Navbar
