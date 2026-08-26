import { Link } from "wouter";

export default function ParticipantInfoCard({ item }) {
   return (
      <Link
         href={`/participante/${item.id}`}
         className="flex flex-col border border-gray-300 rounded-2xl overflow-hidden bg-white transition-all duration-100 hover:-translate-y-2"
      >
         <div className="relative w-full h-80 overflow-hidden">
            <img
               className="w-full h-full object-cover object-center  transition-transform duration-300 group-hover:scale-105"
               src={item.url_image}
               alt={`Foto de ${item.productName}`}
               loading="lazy"
            />
            <h2 className="absolute top-3 left-0 right-0 z-20 text-xl text-white text-center font-luckiest">
               🍔 {item.productName}
            </h2>
         </div>
         <div className="p-3 flex flex-col gap-3 text-justify">
            <p className="leading-relaxed line-clamp-6 text-neutral-700 text-sm">
               {item.description}
            </p>
            <div className="mt-auto flex flex-col md:flex-row justify-evenly gap-2 text-black text-[10px]">
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