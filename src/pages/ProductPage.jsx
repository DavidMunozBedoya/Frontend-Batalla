import { IconThumbDown, IconThumbUp } from "../assets/icons/tablerIcons";
import ButtonSpan from "../components/ButtonSpan";
import Form from "../components/Form";

const data = {
   url_image: "https://scontent.fpei1-1.fna.fbcdn.net/v/t51.82787-15/683571355_18138466516541583_8714689299393832659_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1920&ctp=s1440x1920&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-WAXa-T_uxYQ7kNvwGZHwUS&_nc_oc=Adr3OJINKdaapJLne_GZnqI0ABctVfNKAF9oDqoZyiIWYpqB0GCAoPUTDxhNED1uszE&_nc_zt=23&_nc_ht=scontent.fpei1-1.fna&_nc_gid=dFQfUNFU74ynTwqiAOE1Vw&_nc_ss=7b289&oh=00_AQHIZ74nDJx7YK-aOBQjcEuGZ44haxVMMcf4EwBtD7mf1w&oe=6A82AA4E",
   product_name: "Burguer Bites"

}

export default function ProductPage() {

   return (
      <div className="flex justify-center bg-wallpaper bg-cover bg-center bg-no-repeat min-h-screen w-full">
         <div className="bg-white w-full md:w-100 space-y-4 md:rounded-xl rounded-none md:m-3 overflow-hidden shadow-2xl shadow-amber-50">
            <div className="w-full h-100 rounded-b-2xl md:rounded-none overflow-hidden">
               <img className="w-full h-full object-cover" src={data.url_image} alt="imagen del producto" />
            </div>
            <h1 className="text-xl md:text-4xl text-center font-bold">{data.product_name}</h1>
            <div className="flex justify-center items-center gap-5">
               <ButtonSpan
                  className="text-gray-400 hover:text-black hover:cursor-pointer"
                  icon={<IconThumbUp />}
               />
               <ButtonSpan
                  className="text-gray-400 hover:text-black hover:cursor-pointer"
                  icon={<IconThumbDown />}
               />
            </div>
            <div className="text-center w-full">
               <span className="text-xs">Califica tu Experiencia</span>
            </div>
            <Form />
         </div>

      </div>
   )
}
