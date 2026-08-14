
export default function ButtonSpan({className = "", onClick = null, icon = <></> }) {
   return (
      <div>
         <span className={className}
            onClick={onClick}>
            {icon}
         </span>
      </div>

   )
}
