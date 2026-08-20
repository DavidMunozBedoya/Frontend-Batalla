import Button from "../components/Button";

export default function PolicyPage() {

   return (
      <div className="flex justify-center bg-wallpaper bg-cover bg-center bg-no-repeat min-h-screen w-full">
         <div className="bg-white w-full md:w-200 space-y-4 md:rounded-xl rounded-none md:m-3 overflow-hidden shadow-2xl shadow-amber-50 px-10">
            <div className="relative w-full h-40 rounded-b-2xl md:rounded-none overflow-hidden">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 flex-col py-25 w-full">
                  <img className="absolute top-0 left-1/2 -translate-x-1/2 size-40 " src="/public/logo.webp" alt="logo" />
               </div>
            </div>
            <h1 className="text-xl md:text-2xl text-center font-bold mt-2 capitalize">política de privacidad y protección de datos personales.</h1>
            <h2 className="text-center underline">Resolucion 517 del 14 de abril de 2020</h2>
            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatem quidem ad eius eum atque sed consectetur vitae, accusamus, corrupti consequatur dignissimos, rem eaque? Sunt aliquam delectus temporibus cupiditate fugiat.
               Blanditiis ducimus voluptas quia est maiores dicta nemo illo unde iusto modi consequatur saepe incidunt, aut ex vitae explicabo ipsam totam nulla quis officia. Nesciunt magni hic totam dicta possimus!
               Dolore commodi quibusdam consequuntur suscipit pariatur. Voluptatibus voluptas quis ratione suscipit, totam illo, aspernatur nulla laudantium accusamus earum sequi doloribus aut ut repellendus tempore porro eum labore obcaecati non repudiandae.
               Et vel placeat debitis officia architecto explicabo quo, enim fuga atque, totam quis quae rem, repellat sapiente ex libero amet deleniti voluptatem ad. Animi placeat eos non laborum illo dignissimos.
               Dolor inventore in laudantium quasi incidunt magnam excepturi, sapiente recusandae quis repellat, aperiam placeat est, blanditiis veritatis libero! Hic nisi perspiciatis excepturi doloremque tempore, fugiat debitis numquam similique cum delectus.
               Quisquam architecto reprehenderit alias tenetur.
               <br />
               Est ea sunt sint eaque animi sequi hic itaque magnam. Quibusdam quam minus ipsum facilis odio, vitae eius delectus itaque, fugit, nesciunt autem architecto a.
               Soluta ad doloribus temporibus incidunt sit numquam. Voluptatibus qui magni voluptates ab libero. Veritatis repellendus quod ipsam officia, suscipit nihil corrupti esse consequuntur, aspernatur sequi rem itaque. Aperiam, ratione tenetur!
               Illum ea aperiam, magni accusantium laboriosam ullam, in possimus sequi quisquam odio repellat minima expedita quis vero officiis similique obcaecati corrupti suscipit quasi enim ducimus cumque ut id esse? Harum?
               Sint sit consequatur nostrum optio beatae eveniet quis nulla fugit aut ex, quod sunt perspiciatis asperiores quam amet deserunt dignissimos, minus blanditiis quas? Laborum eos nostrum tempora quia nulla natus.
               <br />
               Ipsum sit, aliquam eum tempore nobis expedita ab commodi vitae quam sequi dolorem animi doloremque sapiente deserunt quas quia. Dolore ducimus sequi reiciendis voluptatibus numquam ut odit soluta corporis distinctio.</p>
            <div className="flex justify-center items-center gap-5">
            </div>
            <div className="text-center w-full">
               <Button text="Regresar" onClick={() => window.history.back()} />
            </div>
         </div>
      </div>
   )
}
