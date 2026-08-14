import Button from "./Button";

export default function VerifyPhoneNumber({ phoneNumber = 3102022222 }) {
   return (
      <div className='flex flex-col justify-center items-center text-center p-10 gap-6'>
         <h1 className="text-2xl font-bold">Verifiquemos tú Número de Teléfono!</h1>
         <p>Hemos enviado un código al número <strong>{phoneNumber}</strong></p>
         <input className="border-2 rounded-md border-amber-600 text-xl text-center" type="number" />
         <p>Expira en: <strong> 00:00</strong> </p>
         <Button
            className={`bg-red-500 rounded-3xl w-60 md:w-xs p-3 text-white font-bold hover:cursor-pointer hover:translate-0.5`}
            text="Confirmar"
         />
      </div>
   )
}
