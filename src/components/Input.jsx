
export default function Input({ type, placeholder, error = null, ...rest }) {
   return (
      <div className="w-full">
         <input
            className={`w-full bg-red-100 text-xs text-justify rounded-sm p-2 ${error && "border border-red-500 text-red-600 leading-tight "}`}
            type={type}
            placeholder={placeholder}
            maxLength={10}
            {...rest}
         />
         <p className="text-red-600 text-xs">{error?.message ?? ""}</p>
      </div>
   )
}
