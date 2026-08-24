
export default function LoaderTimer() {
   return (
      <div className="flex justify-center items-center">
         <div className="relative size-5">
            <div
               className="absolute inset-0 animate-spin rounded-full p-0.75 bg-[conic-gradient(from_0deg,transparent_0%,#3b82f6_50%,#60a5fa_75%,transparent_100%)]">
               <div className="size-full rounded-full bg-gray-50" />
            </div>
         </div>
      </div>
   )
}
