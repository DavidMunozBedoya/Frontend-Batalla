import Button from "./Button";
import TimerDown from "./TimerDown";
import { useTimerStore } from "../stores/useTimerStore";
import { useModalStore } from "../stores/useModalStore";
import { useState } from "react";
import { useLocation } from "wouter";
import LoaderTimer from "./LoaderTimer";

export default function VerifyPhoneNumber({ phoneNumber = "" }) {
   const [, setLocation] = useLocation();
   const { isActive } = useTimerStore();
   const { closeModal } = useModalStore()
   const [token, setToken] = useState('')

   const handleConfirm = () => {

      closeModal();
      setLocation("/agradecimientos");
   }

   return (
      <div className="flex flex-col justify-center items-center text-center m-7 gap-3">
         <h1 className="text-2xl font-bold">Verifiquemos tu Número de Teléfono</h1>
         <p>
            Hemos enviado un código al número <strong>{phoneNumber}</strong>
         </p>
         <input
            className="border-2 rounded-md border-amber-600 text-xl text-center w-full"
            type="number"
            value={token}
            aria-label="Código de verificación"
            maxLength={5}
            onChange={(e) => setToken(e.target.value)}
         />
         <p className="text-xs">
            Expira en:
         </p>
         {isActive ?
            <>
               <LoaderTimer />
               <TimerDown />
            </> :
            <div className="text-blue-600 ">
               <a href="#">
                  <u>Reenviar código</u>
               </a>
            </div>
         }
         <Button
            disabled={token.length < 4}
            className={`bg-red-500 rounded-3xl w-60 md:w-xs text-white font-bold hover:cursor-pointer hover:translate-0.5`}
            text="Confirmar"
            onClick={handleConfirm}
         />
      </div>
   );
}
