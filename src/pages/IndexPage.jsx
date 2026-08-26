import { IconDown, IconHome } from "../assets/icons/tablerIcons";
import { motion } from "motion/react";
import { data } from "../data/data";
import ParticipantInfoCard from "../components/ParticipantInfoCard";

export default function IndexPage() {
   return (
      <div className="min-w-full min-h-screen bg-black/90">
         <header className="relative z-5">
            <img className="fixed size-15 lg:size-20 mt-1.5" src="/logo.webp" alt="" />
            <div className="relative flex justify-end">
               <nav className="fixed flex items-center p-5 space-x-3">
                  <a className="hover:border-2 border-red-600 rounded-full p-0.5" href="#"><IconHome /></a>
                  <a className="border hover:border-2 rounded-full font-luckiest text-[10px] text-red-600 px-4 py-2 bg-transparent" href="#main">Participantes</a>
               </nav>
            </div>
         </header>
         <div className="relative max-h-160 mx-auto mask-b-from-70% mask-b-to-99% border-white">
            <img className="w-full object-cover" src="/pexels-juan-santos-1351708581-25684786.jpg" alt="imagen_batalla" />
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 4, ease: "linear" }}
               className="absolute bottom-0 left-0 md:bottom-10 md:left-0 text-white/80 p-4 md:p-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
               <h1 className="text-3xl md:text-8xl font-luckiest">Batalla de Hamburguesas</h1>
               <p className="text-[8px] md:text-xl capitalize ">¡Conoce los establecimientos vinculados al Concurso Gastronómico Batalla de las Hamburguesas en su Cuarta Versión! Pruébalas todas y elige la que más te guste</p>
               <div className="flex justify-center animate-bounce p-5">
                  <IconDown />
               </div>
            </motion.div>
         </div>
         <main id="main" className="w-full text-white p-5">
            <div className="">
               <h2 className="text-3xl pb-10 capitalize text-center font-luckiest ">participantes</h2>
               {data.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
                     {data.map((item) => (
                        <ParticipantInfoCard key={item.id} item={item} />
                     ))}
                  </div>
               ) : (
                  <p className="text-center text-white/90 text-lg font-medium">
                     No hay productos disponibles en este momento.
                  </p>
               )}
            </div>
         </main>
         <footer className="relative text-white font-luckiest pt-15 bg-black/50">
            <h2 className="text-center font-light">Sponsors</h2>
            <img src="./patrocinadores.webp" alt="patrocinadores" />

         </footer>
      </div>
   )
}
