
export default function Input({ type, placeholder, error = null, ...rest }) {
   return (
      <div className="w-full">
         <input
            className={`w-full ${error && "border border-red-500 text-red-600 leading-tight "} bg-red-100 text-xs text-justify rounded-sm p-2`}
            type={type}
            placeholder={placeholder}
            {...rest}
         />
         <p className="text-red-600 text-xs h-2">{error?.message ?? ""}</p>
      </div>
   )
}
