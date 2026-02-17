"use client";

import { useParams } from "next/navigation";
import { localStorageContext } from "@/context/LocalStorageContext";
import { useState } from "react";
import { BotMessageSquare } from "lucide-react";

export default function Page() {

  const {state} = localStorageContext(); // agentes localStorage
  const { id } = useParams() as { id: string };

  const [userMss, setUserMss] = useState("");

  const agent = state.assistants.find(agent => agent.id === id); // buscamos agente por id

  if (!agent) {
    return <div>Agente no encontrado</div>;
  }

  return (
    <div className="flex flex-col mt-20 justify-center items-center">
      <div className="flex items-center gap-2">
        <h1 className="font-medium text-xl">{agent.name}</h1>
        <BotMessageSquare />
      </div>

      <div className="flex flex-row justify-center w-[70%] h-96 gap-20 mt-20">
          <div className="flex flex-col justify-between w-[60%] h-full text-left border-2 border-gray-200 mt-10 p-8 rounded-2xl">
            <h1 className="text-lef">Entrenamiento del asistente:</h1>
            <div className="flex justify-between">
              <input type="text" placeholder="Entrename..." className="w-80 rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:border-black focus:ring-1 focus:ring-black"/>
              <button className="border border-black p-2 rounded-2xl text-white bg-black hover:bg-white hover:text-black hover:scale-[1.02] transition-all duration-200 ease-out cursor-pointer">
                Guardar
              </button>
            </div>
          </div>

          <div className="w-[40%] border-2 border-gray-200 mt-10 p-8 h-full rounded-2xl">
            <h1 className="text-left">Chat simulado:</h1>
          </div>
      </div>
    </div>
  )
}
