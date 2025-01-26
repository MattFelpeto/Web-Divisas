import Footbar from '../componentes/Footbar';
import Navbar from '../componentes/Navbar';
import {GraficoDolarBlue} from './GraficoDolarblue';
import PrecioDolarBlue from '../apis/cardDolarBlue'

export const DolarBlueInfo = () => {

    return (
        <>
            <section className='flex flex-col'>
                <Navbar />
                <article className=''>
                    <PrecioDolarBlue/>
                </article>
                <article>
                    <GraficoDolarBlue/>
                </article>
                <article className='mt-10'>
                    <Footbar />
                </article>
            </section>
        </>
        )
};