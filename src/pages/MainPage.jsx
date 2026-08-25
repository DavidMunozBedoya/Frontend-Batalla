import CardProduct from "../components/CardProduct";
import { data } from "../data/data";

export default function MainPage() {
   return (
      <div className="min-h-screen bg-linear-to-t from-[#f91814] via-[#f93000] to-[#f5e3cd] bg-cover">
         <header className="flex justify-center items-center py-8 md:py-12 px-4">
            <figure>
               <img
                  className="w-40 md:w-72 lg:w-80"
                  src="/logo.webp"
                  alt="Nombre de la marca"
                  width={400}
                  height={160}
                  loading="eager"
               />
            </figure>
         </header>

         <main className="max-w-7xl mx-auto px-4 pb-10 md:px-10 md:pb-16">
            {data.length > 0 ? (
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                  {data.map((item) => (
                     <CardProduct key={item.id} item={item} />
                  ))}
               </div>
            ) : (
               <p className="text-center text-white/90 text-lg font-medium">
                  No hay productos disponibles en este momento.
               </p>
            )}
         </main>
      </div>
   );
}