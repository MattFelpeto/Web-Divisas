import ButtonDivisas from "../lib/ButtonDivisas"
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <>
            <section>
                <nav className="flex w-full h-20 bg-slate-800">
                    <article className="flex justify-center my-auto mx-auto">
                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                            <ButtonDivisas />
                        </motion.div>
                    </article>
                </nav>
                <nav className="w-full flex h-12 bg-slate-600">
                    <article className="w-full h-full flex flex-row justify-between bg-slate-500">
                        <div className="flex my-auto mx-auto">
                            <h2 className="text-lg text-white font-serif">CRIPTOMONEDAS</h2>
                        </div>
                        <div className="my-auto mx-auto">
                        <h2 className="text-white text-lg font-serif">CALCULADORA</h2>
                        </div>
                    </article>
                </nav>
            </section>
        </>
    )
}

export default Navbar
