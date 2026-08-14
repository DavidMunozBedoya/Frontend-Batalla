import { useLoaderStore } from "../stores/useLoaderStore"

export default function Loader() {
   const { isLoading } = useLoaderStore();
   if(!isLoading) return;

   return (
      <div className="flex justify-center items-center min-h-screen">
         <div className="rounded-full size-20 border-7 border-blue-700 border-t-transparent animate-spin"></div>
      </div>
   )
};
