import { Link } from "wouter";
import { motion } from "motion/react";
import { IconMapPin, IconStore } from "../assets/icons/tablerIcons";

export default function ParticipantInfoCard({ item }) {
   return (
      <motion.div
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 2, ease: "easeInOut" }}
         viewport={{ once: true, amount: 0.1 }}
      >
         <Link
            href={`/participante/${item.id}`}
            className="flex flex-col border border-gray-300 rounded-2xl overflow-hidden bg-white transition-all duration-100 hover:-translate-y-0.5"
         >
            <div className="relative w-full h-80 overflow-hidden">
               <img
                  className="w-full h-full object-cover object-center  transition-transform duration-300 group-hover:scale-105"
                  src={item.url_image}
                  alt={`Foto de ${item.productName}`}
                  loading="lazy"
               />
               <h2 className="absolute top-3 left-0 right-0 z-20 text-xl text-white text-center font-luckiest drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  {item.productName}
               </h2>
            </div>
            <div className="p-3 flex flex-col gap-3 text-justify font-sans">
               <p className="leading-relaxed line-clamp-6 text-neutral-700 text-sm">
                  {item.description}
               </p>
               <div className="mt-auto flex flex-col gap-1 text-black text-[10px]">
                  <span className="flex justify-start items-end gap-1">
                     <IconStore /> {item.restaurant}
                  </span>
                  <span className="flex justify-start items-end gap-1">
                     <IconMapPin /> {item.address}
                  </span>
               </div>
            </div>
         </Link>
      </motion.div>
   );
}


