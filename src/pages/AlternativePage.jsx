import { IconDown, IconHome } from "../assets/icons/tablerIcons";
import { motion } from "motion/react";
import { data } from "../data/data";
import CardProduct from "../components/CardProduct";

export default function AlternativePage() {
   return (
      <div className="min-w-full min-h-screen bg-cover bg-black/90">
         <header className="relative">
            <img className="absolute top-0 left-0 size-30 mt-1.5" src="/logo.webp" alt="" />
            <div className="relative flex justify-end z-10">
               <nav className="fixed flex items-center p-5 space-x-3">
                  <a href="#"><IconHome /></a>
                  <a className="border rounded-full text-white px-4 py-2 bg-transparent" href="#">Participantes</a>
               </nav>
            </div>
            <div className="w-full">
               <img src="/pexels-juan-santos-1351708581-25684786.jpg" alt="imagen_batalla" />
            </div>
            <motion.div
               initial={{ opacity: 0, y: -60 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 6, ease: "linear" }}
               className="absolute bottom-0 left-0 md:bottom-10 md:left-0 text-white/80 p-4 md:p-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
               <h1 className="text-3xl md:text-8xl font-luckiest">Batalla de Hamburguesas</h1>
               <p className="text-[8px] md:text-xl ">¡Conoce los negocios vinculados al Concurso Gastronómico Batalla de las Hamburguesas en su Cuarta Versión! Pruébalas todas y elige el que más te guste</p>
               <div className="flex justify-center animate-bounce">
                  <IconDown />
               </div>
            </motion.div>
         </header>
         <main className="w-full text-white p-5">
            <div className="">
               {data.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                     {data.map((item) => (
                        <CardProduct key={item.id} item={item} />
                     ))}
                  </div>
               ) : (
                  <p className="text-center text-white/90 text-lg font-medium">
                     No hay productos disponibles en este momento.
                  </p>
               )}
            </div>
         </main>
         <footer className="text-white p-5">
            <h1 className="text-center">pie de pagina</h1>
         </footer>
      </div>
   )
}
