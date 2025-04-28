import { EstamosTrabajando } from "../subComponentes/EstamosTrabajando"
import Footbar from "./Footbar"
import Navbar from "./Navbar"

export const PaginaCripto = () => {
  return (
    <>
        <section className="grid grid-cols-1 h-full">
            <article className="flex">
                <Navbar/>
            </article>
            <article className="flex min-h-screen mt-20">
                <EstamosTrabajando/>
            </article>
            <article className="flex">
                <Footbar/>
            </article>
        </section>
    </>
  )
}
