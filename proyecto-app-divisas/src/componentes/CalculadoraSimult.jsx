import Footbar from './Footbar'
import Navbar from './Navbar'
import {CalculosCalcSim} from '../subComponentes/CalculosCalcSim';

export const CalculadoraSimult = () => {
  return (
    <>
        <article className="flex flex-col lg:bg-slate-100">
            <Navbar/>
            <article className='lg:p-10'>
                <CalculosCalcSim/>
                </article>    
            <article className="">
                <Footbar/>
            </article>
        </article>
    </>
  )
}
