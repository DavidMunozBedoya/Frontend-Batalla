import { useLoaderStore } from "../stores/useLoaderStore"

export default function Loader() {
   const { isLoading } = useLoaderStore();
   if(!isLoading) return;

   return (
      <div className="flex justify-center items-center min-h-screen">
         <div className="animate-bounce size-40">
            <img src="/public/loader.webp" alt="loader" />
         </div>
      </div>
   )
};
