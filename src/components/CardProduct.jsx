import { Link } from "wouter"

export default function CardProduct({ item }) {

   return (
      <Link href={`/participante/${item.id}`}>
         <div className="relative flex flex-col border border-gray-400 rounded-2xl gap-3 overflow-auto hover:cursor-pointer">
            <div className="w-full h-80 shrink-0">
               <img className="w-full h-full object-cover" src={item.url_image} alt="" />
            </div>
            <div className="p-5 flex flex-col gap-3 h-full">
               <h1 className="text-xl font-luckiest text-gray-600 text-center">{item.productName}</h1>
               <p className="leading-relaxed line-clamp-6 hover:line-clamp-none text-justify">
                  {item.description}
               </p>
               <div className="mt-auto flex flex-col md:flex-row justify-evenly gap-2 text-[10px]">
                  <span className="border border-gray-300 rounded-xl flex justify-center items-center p-2">👨‍🍳  {item.restaurant}</span>
                  <span className="border border-gray-300 rounded-xl flex justify-center items-center p-2">🚩 {item.address}</span>
               </div>
            </div>
         </div>
      </Link>
   )
}
