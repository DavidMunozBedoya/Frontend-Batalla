
export default function Button({ type = 'submit', disabled = false, text = '', onClick }) {
   return (
      <div>
         <button
            className={`text-white text-center font-bold rounded-full w-70 p-2 my-5 ${disabled ? "bg-gray-200 cursor-default" : "bg-red-600 hover:cursor-pointer"}`}
            disabled={disabled}
            type={type}
            onClick={onClick}
         >
            {text}
         </button>
      </div>
   )
}
