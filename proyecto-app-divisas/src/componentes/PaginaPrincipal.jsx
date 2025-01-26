import PrecioDolarBlue from "../apis/cardDolarBlue"
import PrecioDolarOficial from "../apis/cardDolarOficial"
import ObtenerDolarCripto from "../apis/cardDolarCripto"
import PrecioDolarMep from "../apis/cardDolarMep"
import { motion } from "framer-motion";
import { useState } from "react";
import ExtensionVerMasDivisas from "../subComponentes/extensionVerMasDivisas";

const PaginaPrincipal = () => {

    const [isVerMasOpen, setIsVerMasOpen] = useState(false);

    const clickVerMas = () => {
        setIsVerMasOpen(!isVerMasOpen);
    }

    return (
        <>
            <section className="flex flex-col bg-fondoWeb w-full">
                <div className="flex flex-col sm:flex-row sm:justify-center">
                    <div className="mx-auto">
                    <PrecioDolarOficial />
                    </div>
                    <div className="mx-auto">
                    <PrecioDolarBlue />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-center">
                <div className="mx-auto">
                    <ObtenerDolarCripto />
                    </div>
                    <div className="mx-auto">
                    <PrecioDolarMep />
                    </div>
                </div>
                {isVerMasOpen ?
                    <ExtensionVerMasDivisas />
                    :
                    <article className='flex justify-center'>
                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                            <button type='button' onClick={clickVerMas} className='w-24 h-10 mt-9 mb-9 text-md cursor-pointer bg-color-2 rounded-md mx-auto text-color-text font-[Roboto] shadow-md shadow-black'>
                                Ver mas
                            </button>
                        </motion.div>
                    </article>
                }
            </section>
        </>
    )
}

export default PaginaPrincipal
