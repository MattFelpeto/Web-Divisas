import PrecioDolarOficial from '../Cards/cardDolarOficial'
import Footbar from '../componentes/Footbar'
import Navbar from '../componentes/Navbar'
import {GraficoDolarOficial} from './graficoDolarOficialFinal'

export const DolarOficialInfo = () => {

    return (
        <>
            <section className='flex flex-col bg-slate-100'>
                <Navbar />
                <article className='lg:mt-6'>
                    <PrecioDolarOficial />
                </article>
                <article className=''>
                    <GraficoDolarOficial/>
                </article>
                <article className='mt-4'>
                    <Footbar />
                </article>
            </section>
        </>
    )
}
