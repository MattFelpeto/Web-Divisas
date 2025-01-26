import PaginaPrincipal from "./PaginaPrincipal"
import Navbar from "./Navbar"
import Footbar from "./Footbar"

export const BaseComponentes = () => {


  return (
    <>
      <main className="">
        <section className="">
          <Navbar />
        </section>
        <section className="my-auto mx-auto">
          <PaginaPrincipal />
        </section>
        <section>
          <Footbar />
        </section>
      </main>
    </>
  )
}
