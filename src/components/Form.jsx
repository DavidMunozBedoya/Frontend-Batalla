import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";
import VerifyPhoneNumber from "./VerifyPhoneNumber";
import { useModalStore } from "../stores/useModalStore";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { inputSchema } from "../schemas/inputSchema";
import { Link } from "wouter";


export default function Form() {

   const { openModal } = useModalStore();
   const {
      register,
      control,
      formState: { errors, isValid }
   } = useForm(
      {
         mode: "onBlur",
         resolver: yupResolver(inputSchema)
      }
   );

   const phoneNumber = useWatch({
      control,
      name: "phoneNumber"
   });

   return (
      <div>
         <form className="flex flex-col justify-center items-center px-12 gap-2">
            <Input
               type="tel"
               id="phoneNumber"
               name="phoneNumber"
               placeholder="Celular*"
               error={errors.phoneNumber}
               {...register("phoneNumber")}
            />
            <Textarea
               id="comments"
               name="comments"
               placeholder="Cuentanos tu experiencia"
               error={errors.comments}
               {...register("comments")}
            />
            <span className="text-xs text-center">
               Al continuar, aceptas nuestra{" "}
               <Link href={'/politica'}>
                  <strong className="text-gray-500 hover:text-black underline">política de privacidad y protección de datos personales.</strong>
               </Link>
            </span>
            <Button
               type="button"
               disabled={!isValid}
               text="Continuar"
               onClick={() => openModal(<VerifyPhoneNumber phoneNumber={phoneNumber} />)}
            />
         </form>
      </div>
   )
}
