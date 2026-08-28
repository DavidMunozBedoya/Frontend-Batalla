import { data } from "../data/data";
import { Link } from "wouter";
import { motion } from "motion/react";
import ParticipantInfoCard from "../components/ParticipantInfoCard";
import { IconDown } from "../assets/icons/tablerIcons";

export default function IndexPage() {
   return (
      <div className="min-w-full min-h-screen bg-black/90">
         <header
            className="fixed w-full top-0 z-5 bg-black/20 mask-b-from-0 hover:mask-b-from-100%">
            <nav className="grid grid-cols-2 px-5">
               <motion.div
                  className="flex justify-start items-center">
                  <a href="#">
                     <motion.img
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.3 }}
                        className="size-8 lg:size-20" src="/logo.webp" alt="logo_batalla" />
                  </a>
               </motion.div>
               <div className="flex justify-end items-center">
                  <a className="border hover:border-2 rounded-full font-luckiest text-[10px] text-red-600 px-3 py-1 bg-transparent" href="#main">Participantes</a>
               </div>
            </nav>
         </header>
         <div className="relative">
            <div className="max-h-220 md:max-h-130 mx-auto mask-b-from-70% mask-b-to-99%">
               <img className="w-full object-cover" src="/pexels-juan-santos-1351708581-25684786.jpg" alt="imagen_batalla" />
            </div>
            <motion.div
               initial={{ opacity: 0, y: 150 }}
               animate={{ opacity: 1, y: 110 }}
               transition={{ duration: 4, ease: "linear" }}
               className="absolute bottom-0 left-0 right-0 md:bottom-0 md:left-0 text-white/80 p-4 md:p-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
               <h1 className="text-3xl md:text-8xl font-luckiest">Batalla de Hamburguesas</h1>
               <p className="text-[8px] md:text-xl capitalize font-light">¡Conoce los establecimientos vinculados al Concurso Gastronómico Batalla de las Hamburguesas en su Cuarta Versión! Pruébalas todas y elige la que más te guste</p>
               <div className="flex justify-center animate-bounce py-5">
                  <IconDown width="40" height="40" />
               </div>
            </motion.div>
         </div>
         <main id="main" className="w-full text-white p-5 pt-15 md:pt-10">
            <div>
               <h2 className="text-xl md:text-3xl py-12 capitalize text-center font-luckiest ">participantes</h2>
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
         <footer className="text-white font-luckiest mask-b-from-80% p-5 bg-black/20">
            <div className="grid grid-cols-1 md:grid-cols-4 text-start justify-baseline gap-5 tracking-wide py-3">
               <div>
                  Organizador
                  <div className="pt-3">
                     <a href="https://www.camaracartago.org/">
                        <img className="w-50 hover:scale-105" src="/Logo_blanco_camara_cartago-1-1.png" alt="logo camara de comercio cartago" />
                     </a>
                  </div>
               </div>
               <div>
                  Legal
                  <div className="flex flex-col justify-start pt-3 font-sans text-sm text-gray-300 hover:text-red-600 capitalize">
                     <div>
                        <Link href={"/politica"}>
                           <h3>Política Tratamiento de datos</h3>
                        </Link>
                     </div>
                  </div>
               </div>
               <div>
                  redes
                  <div className="flex flex-col justify-start pt-3 font-sans text-sm text-gray-300 capitalize">
                     <div>
                        <a className="hover:text-red-600"
                           href="https://wa.me"
                           rel="noopener noreferrer">Whatsapp</a>
                     </div>
                     <div>
                        <a className="hover:text-red-600" href="https://www.instagram.com/">Instagram</a>
                     </div>
                     <div>
                        <a className="hover:text-red-600" href="https://www.facebook.com/?locale=es_LA">Facebook</a>
                     </div>
                     <div>
                        <a className="hover:text-red-600" href="https://www.tiktok.com/es/">Tik Tok</a>
                     </div>
                  </div>
               </div>
               <div className="text-center">
                  Sponsors
                  <div>
                     <img src="/patrocinadores.webp" alt="imagen_patrocinadores" />
                  </div>
               </div>
            </div>
         </footer>
         <div className="text-center text-white text-xs capitalize">
            <p >®2026 derechos reservados de autor</p>
         </div>
      </div>
   )
}
