import { motion } from "framer-motion";
import iconoGitHub from "../assets/icono_github.png"
import { NavLink } from 'react-router-dom';

const Footbar = () => {

    return (
        <>
            <nav className="flex w-full h-20 justify-center bg-color-footbar">
                <article className="flex flex-row justify-center sm:mr-0 sm:p-2 my-auto mx-auto">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                        <NavLink to='https://github.com/MattFelpeto/Web-Divisas' style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                        <p className="text-white my-auto text-sm md:text-xl lg:text-lg sm:text-base font-serif">Desarrollado por MattFelpeto</p>
                        <img src={iconoGitHub} className="h-10 w-10 cursor-pointer" alt="icono-github" />
                        </NavLink>
                    </motion.div>
                </article>
            </nav >
        </>
    )
}

export default Footbar;
