
export default function CardProduct({ item }) {
   return (
      <div className="relative flex flex-col border border-gray-400 rounded-2xl gap-3 overflow-auto">
         <div className="w-full h-80 shrink-0">
            <img className="w-full h-full object-cover" src={item.url_image} alt="" />
         </div>
         <div className="p-5 flex flex-col gap-3 h-full">
            <h1 className="text-xl font-luckiest text-gray-600 text-center">{item.productName} 🍔</h1>
            <p className="text-left leading-relaxed ">{item.description}</p>
            <div className="mt-auto flex flex-col md:flex-row justify-evenly gap-2 text-xs">
            <span>Restaurante: {item.restaurant}</span>
            <span>🗺 {item.address}</span>
            </div>
         </div>
      </div>
   )
}
