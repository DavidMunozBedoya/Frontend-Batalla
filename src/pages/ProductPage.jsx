import { IconThumbDown, IconThumbUp } from "../assets/icons/tablerIcons";
import { data } from "../utils/data";
import ButtonSpan from "../components/ButtonSpan";
import Form from "../components/Form";
import { useParams } from "wouter";
import { useState } from "react";

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
         <div className="bg-white w-full md:w-100 space-y-4 md:rounded-xl rounded-none md:m-3 overflow-hidden shadow-2xl shadow-amber-50">
            <div className="relative w-full h-100 rounded-b-2xl md:rounded-none overflow-hidden">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 flex-col py-25 w-full">
                  <img className="absolute top-0 left-1/2 -translate-x-1/2 size-30 " src="/public/logo.webp" alt="logo" />
                  <h1 className="text-center z-50 text-2xl md:text-4xl text-white font-luckiest tracking-widest font-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]  uppercase">”{product.productName}”</h1>
               </div>
               <img className="w-full h-full object-cover" src={product.url_image} alt="imagen del producto" />
            </div>
            <h1 className="text-xl md:text-4xl text-center font-bold">{product.restaurant}®</h1>
            <div className="flex flex-row justify-center">
               <div className="grid grid-rows-2">
                  <p className="flex items-end justify-center text-[7px] text-red-600 pb-2">{select.like ? "Me gusta" : ""}</p>
                  <div className={select.like ? "border border-red-600 rounded-full p-2 text-red-600" : "text-gray-400 hover:text-black hover:cursor-pointer p-2"}>
                     <ButtonSpan
                        className={!select.like ? "text-gray-400 hover:text-black hover:cursor-pointer" : "text-red-600 "}
                        icon={<IconThumbUp />}
                        onClick={() => setSelect({
                           like: true,
                           disLike: false
                        })}
                     />
                  </div>
               </div>
               <div className="grid grid-rows-2">
                  <p className="flex items-end justify-center text-[7px] text-red-600 pb-2">{select.disLike ? "No Me gusta" : ""}</p>
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
         </div>
      </div>
   )
}
