import Footbar from "./Footbar";
import Navbar from "./Navbar";
import CalculadoraDivisas from "./CalculadoraDivisas2"


const PaginaCalcDivisas = () => {


    return (
        <>
            <section className="flex flex-col">
                <Navbar />
                <article className="bg-fondoWeb">
                    <CalculadoraDivisas />
                </article>
                <article className="">
                <Footbar />
                </article>
            </section>
        </>
    )
}

export default PaginaCalcDivisas;