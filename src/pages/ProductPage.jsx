import { IconThumbDown, IconThumbUp } from "../assets/icons/tablerIcons";
import { data } from "../data/data";
import ButtonSpan from "../components/ButtonSpan";
import Form from "../components/Form";
import { useParams } from "wouter";
import { useState } from "react";
import { motion } from "motion/react";

export default function ProductPage() {
   const { id } = useParams();
   const [select, setSelect] = useState(
      {
         like: false,
         disLike: false
      }
   );
   const product = data[id - 1];

   return (
      <div className="flex justify-center bg-wallpaper bg-cover bg-center bg-no-repeat min-h-screen w-full">
         <motion.div
            initial={{ scale: 0, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 2.5, ease: "linear" }}
            className="bg-white w-full md:w-100 space-y-4 md:rounded-xl rounded-none md:m-3 overflow-hidden shadow-2xl shadow-amber-50">
            <header>
               <div className="relative w-full h-100 overflow-hidden">
                  <img
                     className="w-full h-full object-cover"
                     src={product.url_image}
                     alt={`Foto de ${product.productName}`}
                  />
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{opacity: 1 }}
                     transition={{duration: 5, ease: "linear", }}
                     className="absolute inset-0 flex flex-col items-center justify-start pt-6 bg-linear-to-b from-black/40 to-transparent">
                     <img className="size-16" src="/logo.webp" alt="Nombre de la marca" />
                     <h1 className="mt-4 text-center text-2xl sm:text-4xl text-white font-luckiest tracking-widest font-black uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] px-4">
                        “{product.productName}”
                     </h1>
                  </motion.div>
               </div>
            </header>
            <main>
               <h1 className="text-xl md:text-4xl text-center font-bold">{product.restaurant}®</h1>
               <div className="flex flex-row justify-center">
                  <div className="grid grid-rows-2">
                     <p className="flex items-end justify-center text-[7px] text-red-600 pb-2">{select.like ? "Me gusta!" : ""}</p>
                     <motion.div
                        {...(!select.like &&
                        {
                           initial: { opacity: 0.5 },
                           animate: { opacity: 1 },
                           transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                        }
                        )}
                        className={select.like ? "border border-red-600 rounded-full p-2 text-red-600" : "text-gray-400 hover:text-black hover:cursor-pointer p-2"}>
                        <ButtonSpan
                           className={!select.like ? "text-gray-400 hover:text-black hover:cursor-pointer" : "text-red-600 "}
                           icon={<IconThumbUp />}
                           onClick={() => setSelect({
                              like: true,
                              disLike: false
                           })}
                        />
                     </motion.div>
                  </div>
                  <div className="grid grid-rows-2">
                     <p className="flex items-end justify-center text-[7px] text-red-600 pb-2">{select.disLike ? "No Me gusta!" : ""}</p>
                     <div className={select.disLike ? "border border-red-600 rounded-full p-2 text-red-600" : "text-gray-400 hover:text-black hover:cursor-pointer p-2"}>
                        <ButtonSpan
                           className={!select.disLike ? "text-gray-400 hover:text-black hover:cursor-pointer" : "text-red-600 "}
                           icon={<IconThumbDown />}
                           onClick={() => setSelect({
                              like: false,
                              disLike: true
                           })}
                        />
                     </div>
                  </div>
               </div>
               <div className="text-center w-full">
                  <span className="text-xs">Califica tu Experiencia</span>
               </div>
               <Form />
            </main>
         </motion.div>
      </div >
   )
}
