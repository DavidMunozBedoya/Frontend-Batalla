import CardProduct from "../components/CardProduct";
import { data } from "../utils/data";

export default function MainPage() {
   return (
      <div className="min-h-screen bg-gradient-to-t from-[#f91814] via-[#f93000] to-[#f5e3cd] object-cover p-15 md:px-10">
         <div className="flex justify-center items-center text-center text-3xl md:text-5xl font-black font-luckiest uppercase">
            <img className="w-40 md:w-100" src="/public/logo.webp" alt="logo" />
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {data.map((item) => (
               <CardProduct
                  key={item.id}
                  item={item}
               />
            ))}
         </div>
      </div>
   )
}
