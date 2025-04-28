import PrecioDolarBlue from "../Cards/cardDolarBlue"
import PrecioDolarOficial from "../Cards/cardDolarOficial"
import ObtenerDolarCripto from "../Cards/cardDolarCripto"
import PrecioDolarMep from "../Cards/cardDolarMep"
import ApiDolarMayorista from "../Cards/cardDolarMayorista";
import PrecioDolarEuro from '../Cards/cardEuro';
import PrecioReal from '../Cards/cardReal';
import PrecioPesoChileno from '../Cards/cardPesoChileno';
import PrecioPesoUruguayo from '../Cards/cardPesoUruguayo';
import { Banner } from "../subComponentes/Banner";


const PaginaPrincipal = () => {

    return (
        <>
            <section className="grid lg:grid-cols-3 xs:grid-cols-1 sm:grid-col-1 md:grid-cols-2 p-4 bg-fondoWeb w-full min-h-screen">
                <article className="mx-auto">
                    <PrecioDolarOficial />
                </article>
                <article className="mx-auto">
                    <PrecioDolarBlue />
                </article>
                <article className="mx-auto">
                    <ObtenerDolarCripto />
                </article>
                <article className="w-full xs:hidden lg:flex col-span-3">
                    <Banner/>
                </article>
                <article className="mx-auto">
                    <PrecioDolarMep />
                </article>
                <article className="mx-auto">
                    <ApiDolarMayorista />
                </article>
                <article className="mx-auto">
                    <PrecioDolarEuro />
                </article>
                <article>
                    <PrecioReal />
                </article>
                <article>
                    <PrecioPesoChileno />
                </article>
                <article>
                    <PrecioPesoUruguayo />
                </article>
            </section>
        </>
    )
}

export default PaginaPrincipal
