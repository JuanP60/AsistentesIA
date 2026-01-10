"use client";

import { IACards } from "@/components/IACards/IACards";
import { useState } from "react";
import { ModalCreate } from "@/components/Modals/ModalCreate";

export default function Home() {

  const [isOpen1, setIsOpen1] = useState<boolean>(false);
  
  return (
    <div className="flex flex-col gap-16 mt-24">
        <header className="flex flex-col md:flex-row justify-center items-center gap-7 md:gap-70 lg:gap-120">
          <h1 className="text-lg font-semibold">Asistentes IA</h1>
          <button 
            className="border border-black p-2 rounded-2xl text-white bg-black hover:bg-white hover:text-black hover:scale-[1.02] transition-all duration-200 ease-out cursor-pointer"
            onClick={() => setIsOpen1(true)}
            >
            Crear Asistente
          </button>
        </header>
    
        <div>
          <IACards/>
        </div>

        <ModalCreate
        isOpen1={isOpen1}
        onClose1={() => setIsOpen1(false)}
        />

    </div>
  );
}
