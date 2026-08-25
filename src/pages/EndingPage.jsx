import { CircleCheck } from "../assets/icons/tablerIcons";
import Button from "../components/Button";

export default function EndingPage() {
   return (
      <div className="min-h-screen bg-white flex flex-col">
         <main className="flex-1 flex flex-col items-center text-center px-6 p-5">
            <section className="flex flex-col items-center gap-3">
               <CircleCheck
                  className="size-16 text-green-500"
               />
               <h1 className="text-lg md:text-xl font-bold">
                  voto registrado
               </h1>
               <p className="text-neutral-600">
                  Tu voto ha sido registrado con éxito.
                  <br />
                  ¡Gracias por ser parte de esta gran experiencia!
               </p>
            </section>
            <div className="mt-8">
               <Button
                  text="Finalizar"
                  onClick={() => { window.location.href = "/" }}
               />
            </div>
            <section className="flex flex-col items-center gap-3 mt-12">
               <p className="text-neutral-500">¡Sigamos apoyando lo nuestro!</p>
               <h2 className="font-bold text-sm uppercase tracking-wide text-neutral-700">
                  Patrocinan
               </h2>
               <img
                  className="w-full max-w-2xl px-4"
                  src="/patrocinadores.webp"
                  alt="Logos de las marcas patrocinadoras"
               />
            </section>
         </main>

         <footer className="fixed bottom-0 left-0 right-0 bg-white/95 py-2 text-[10px] text-center text-neutral-500">
            <strong>®2026</strong> Todos los derechos reservados
         </footer>
      </div>
   )
}