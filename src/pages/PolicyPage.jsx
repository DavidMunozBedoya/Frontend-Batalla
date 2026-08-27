import Button from "../components/Button";

export default function PolicyPage() {
   return (
      <div className="flex justify-center bg-wallpaper bg-cover bg-center bg-no-repeat min-h-screen w-full">
         <article className="bg-white w-full md:w-200 md:rounded-xl rounded-none md:my-6 overflow-hidden shadow-2xl shadow-black/20">

            <header className="flex justify-center items-center py-8 bg-neutral-50">
               <img
                  className="size-28 md:size-32"
                  src="/logo.webp"
                  alt="Nombre de la marca"
                  width={128}
                  height={128}
               />
            </header>

            <div className="px-6 md:px-10 py-8 space-y-6">
               <div className="text-center space-y-2">
                  <h1 className="text-xl md:text-2xl font-luckiest">
                     Política de privacidad y protección de datos personales
                  </h1>
                  <h2 className="text-sm text-neutral-500 underline underline-offset-2">
                     Resolución 517 del 14 de abril de 2020
                  </h2>
               </div>
               <section className="space-y-4 text-left leading-relaxed text-neutral-800">
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
                     voluptatem quidem ad eius eum atque sed consectetur vitae, accusamus,
                     corrupti consequatur dignissimos, rem eaque? Sunt aliquam delectus
                     temporibus cupiditate fugiat. Blanditiis ducimus voluptas quia est
                     maiores dicta nemo illo unde iusto modi consequatur saepe incidunt.
                  </p>
                  <p>
                     Dolore commodi quibusdam consequuntur suscipit pariatur. Voluptatibus
                     voluptas quis ratione suscipit, totam illo, aspernatur nulla laudantium
                     accusamus earum sequi doloribus aut ut repellendus tempore porro eum
                     labore obcaecati non repudiandae.
                  </p>
                  <p>
                     Et vel placeat debitis officia architecto explicabo quo, enim fuga
                     atque, totam quis quae rem, repellat sapiente ex libero amet deleniti
                     voluptatem ad. Animi placeat eos non laborum illo dignissimos.
                  </p>
               </section>

               <div className="text-center pt-4">
                  <Button text="Regresar" onClick={() => window.history.back()} />
               </div>
            </div>
         </article>
      </div>
   );
}