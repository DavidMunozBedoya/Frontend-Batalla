
export default function Button({ type = 'submit', disabled = false, text = '', onClick }) {
   return (
      <div className="py-3">
         <button
            className={`text-white text-center font-bold rounded-full w-auto p-2 px-5 ${disabled ? "bg-gray-200 cursor-default" : "bg-red-600 hover:cursor-pointer hover:translate-0.5"}`}
            disabled={disabled}
            type={type}
            onClick={onClick}
         >
            {text}
         </button>
      </div>
   )
}
