import React, { useState } from 'react'
import { motion } from 'framer-motion';

const ButtonVerMas = () => {

    const [isVerMasOpen, setIsVerMasOpen] = useState(false);

    const clickVerMas = ()=> {
        setIsVerMasOpen(!isVerMasOpen);
    }

    return (
        <>
            <article className='flex justify-center'>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                    <button type='button' onClick={clickVerMas} className='w-24 h-10 mt-9 mb-9 text-sm cursor-pointer bg-slate-600 rounded-md mx-auto text-white font-serif shadow-md shadow-black'>
                        Ver mas
                    </button>
                </motion.div>
            </article>
        </>
    )
}

export default ButtonVerMas;

