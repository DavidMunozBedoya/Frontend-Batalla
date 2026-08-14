import { IconX } from "../assets/icons/tablerIcons";
import { useModalStore } from "../stores/useModalStore"
import ButtonSpan from "./ButtonSpan";

export default function Modal() {

   const { isVisible, component, closeModal } = useModalStore();

   if (!isVisible) return;

   return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex justify-center items-center">
         <div className="relative flex flex-col justify-center items-center overflow-auto bg-white rounded-xl w-80 p-2">
            <ButtonSpan
               className="absolute top-2 right-3 hover:cursor-pointer hover:bg-gray-200 text-gray-400 hover:text-black rounded-sm p-0.5 z-1"
               onClick={closeModal}
               icon={<IconX />}
            />
            {component}
         </div>
      </div>
   )
};

