import PaginaPrincipal from "./PaginaPrincipal"
import Navbar from "./Navbar"
import Footbar from "./Footbar"

export const BaseComponentes = () => {


  return (
    <>
      <main className="w-full">
        <section className="">
          <Navbar />
        </section>
        <section className="w-full my-auto mx-auto">
          <PaginaPrincipal />
        </section>
        <section className="">
          <Footbar />
        </section>
      </main>
    </>
  )
}
