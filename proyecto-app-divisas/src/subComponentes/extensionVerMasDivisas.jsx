import ApiDolarMayorista from "../apis/cardDolarMayorista";
import ApiEuro from '../apis/cardEuro';
import ApiReal from '../apis/cardReal';
import ApiPesoChileno from '../apis/cardPesoChileno';
import ApiPesoUruguayo from '../apis/cardPesoUruguayo';


const ExtensionVerMasDivisas = () => {
  return (
    <>
        <section className="mb-8">
          <article  className="flex flex-col sm:flex-row">
            <ApiDolarMayorista/>
            <ApiEuro/>
            </article>
            <article className="flex flex-col sm:flex-row">
            <ApiReal/>
            <ApiPesoChileno/>
            </article>
            <ApiPesoUruguayo/>
        </section>
    </>
  )
}

export default ExtensionVerMasDivisas;