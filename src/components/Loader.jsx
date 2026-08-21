import { useLoaderStore } from "../stores/useLoaderStore"

export default function Loader() {
   const { isLoading } = useLoaderStore();
   if (!isLoading) return null;

   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
         <div className="animate-bounce size-40">
            <img src="/logo.webp" alt="logo" />
         </div>
      </div>
   )
};
