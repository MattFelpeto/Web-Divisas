import PrecioDolarOficial from '../apis/cardDolarOficial'
import Footbar from '../componentes/Footbar'
import Navbar from '../componentes/Navbar'
import {GraficoDolarOficial} from './graficoDolarOficialfinal'

export const DolarOficialInfo = () => {

    return (
        <>
            <section className='flex flex-col'>
                <Navbar />
                <article className=''>
                <PrecioDolarOficial />
                </article>
                <article>
                    <GraficoDolarOficial/>
                </article>
                <article className='mt-10'>
                    <Footbar />
                </article>
            </section>
        </>
    )
}
