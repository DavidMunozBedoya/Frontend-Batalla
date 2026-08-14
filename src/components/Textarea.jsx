
export default function TextArea({ placeholder = '', error = null, ...rest }) {
   return (
      <div className="w-full">
         <textarea
            className={`w-full text-xs rounded-sm text-justify p-2 bg-red-100 ${error ? 'border border-red-500 text-red-600 leading-tight' : 'text-black'}}`}
            placeholder={placeholder}
            {...rest}
         />
         <p className="m-0 min-h-4 text-xs text-red-600 leading-tight">
            {error?.message ?? ""}
         </p>
      </div>
   )
}
