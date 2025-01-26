import Footbar from './Footbar'
import Navbar from './Navbar'
import {CalculosCalcSim} from '../subComponentes/CalculosCalcSim';

export const CalculadoraSimult = () => {
  return (
    <>
        <article className="flex flex-col">
            <Navbar/>
                <CalculosCalcSim/>
            <article className="">
                <Footbar/>
            </article>
        </article>
    </>
  )
}
