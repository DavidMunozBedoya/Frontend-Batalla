import { Link } from "wouter";

export default function CardProduct({ item }) {
   return (
      <Link
         href={`/participante/${item.id}`}
         className="flex flex-col border border-gray-300 rounded-2xl overflow-hidden bg-white transition-all duration-100 hover:-translate-y-2"
      >
         <div className="w-full h-100 shrink-0 overflow-hidden">
            <img
               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
               src={item.url_image}
               alt={`Foto de ${item.productName}`}
               loading="lazy"
            />
         </div>
         <div className="p-5 flex flex-col gap-3 flex-1">
            <h2 className="text-xl font-luckiest text-gray-600 text-center">
               {item.productName}
            </h2>

            <p className="leading-relaxed line-clamp-6 text-neutral-700">
               {item.description}
            </p>
            <div className="mt-auto flex flex-col md:flex-row justify-evenly gap-2 text-[10px]">
               <span className="border border-gray-300 rounded-xl flex justify-center items-center gap-1 p-2">
                  <span>👨‍🍳</span> {item.restaurant}
               </span>
               <span className="border border-gray-300 rounded-xl flex justify-center items-center gap-1 p-2">
                  <span>🚩</span> {item.address}
               </span>
            </div>
         </div>
      </Link>
   );
}