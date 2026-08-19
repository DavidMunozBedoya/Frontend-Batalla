import { IconThumbDown, IconThumbUp } from "../assets/icons/tablerIcons";
import { data } from "../utils/data";
import ButtonSpan from "../components/ButtonSpan";
import Form from "../components/Form";
import { useParams } from "wouter";

export default function ProductPage() {
   const { id } = useParams();
   const product = data[id -1];
   console.log("producto recuperado", product);


   return (
      <div className="flex justify-center bg-wallpaper bg-cover bg-center bg-no-repeat min-h-screen w-full">
         <div className="bg-white w-full md:w-100 space-y-4 md:rounded-xl rounded-none md:m-3 overflow-hidden shadow-2xl shadow-amber-50">
            <div className="relative w-full h-100 rounded-b-2xl md:rounded-none overflow-hidden">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 flex-col py-25 w-full">
                  <img className="absolute top-0 left-1/2 -translate-x-1/2 size-30 " src="/public/logo.webp" alt="logo" />
                  <h1 className="text-center z-50 text-xl md:text-3xl text-white font-luckiest font-black uppercase">"{product.productName}"</h1>
               </div>
               <img className="w-full h-full object-cover" src={product.url_image} alt="imagen del producto" />
            </div>
            <h1 className="text-xl md:text-4xl text-center font-bold">{product.restaurant}®</h1>
            <div className="flex justify-center items-center gap-5">
               <ButtonSpan
                  className="text-gray-400 hover:text-black hover:cursor-pointer"
                  icon={<IconThumbUp />}
               />
               <ButtonSpan
                  className="text-gray-400 hover:text-black hover:cursor-pointer"
                  icon={<IconThumbDown />}
               />
            </div>
            <div className="text-center w-full">
               <span className="text-xs">Califica tu Experiencia</span>
            </div>
            <Form />
         </div>

      </div>
   )
}
