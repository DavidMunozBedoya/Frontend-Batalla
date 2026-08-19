import CardProduct from "../components/CardProduct";
import { data } from "../utils/data";

export default function MainPage() {
   return (
      <div className="min-h-screen">
         <div className="text-center text-xl md:text-5xl font-black font-luckiest uppercase py-40">
            <h1>Batalla de las Hamburgesas  🍔🍟🥤</h1>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-10">
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
