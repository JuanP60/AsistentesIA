"use client";

import { localStorageContext } from "@/context/LocalStorageContext";
import Link from "next/link";
import { Loader } from "../Loader/Loader";
import { Pencil, Trash, Brain, BotMessageSquare } from "lucide-react";
import { ModalDelete } from "@/components/Modals/ModalDelete";
import { useState } from "react";

export function IACards () {

    const {state} = localStorageContext();
    const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false);
    const [agentToDelete, setAgentToDelete] = useState<string | null >(null);

    if (!!state.loading) {
        return <Loader />
    } else if (!!state.error) {
        return <p className="flex justify-center text-center text-gray-500 mt-16">No hay Agentes creados por el momento, crea tu primer agente!</p>
    } else {
        
        return (
            <>
                <ul className="flex flex-col gap-10 mx-auto max-w-74 md:max-w-2xl lg:max-w-4xl">
                    {state.assistants?.map((agent => (
                        <li key={agent.id} className="flex justify-between px-3 md:px-18 lg:px-22 py-2 md:py-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200 ease-out">
                            <div className="flex flex-col gap-1 md:gap-2">
                                <div className="flex items-center gap-1 md:gap-2">
                                    <BotMessageSquare size={20}/>
                                    <div className="font-medium">{agent.name}</div>
                                </div>

                                <div className="flex flex-col text-sm">
                                    <span>Personalidad: {agent.tone}</span>
                                    <span>Idioma: {agent.language}</span>
                                </div>
                            </div>
    
                            <div className="flex items-center gap-1 md:gap-2">
                                <Link href="" className="hover:-translate-y-0.5 transition-all duration-200 ease-out"><Pencil size={20}/></Link>
                                <button 
                                    className="hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer"
                                    onClick={() => {
                                        setIsOpenDelete(true)
                                        setAgentToDelete(agent.id)
                                    }}
                                >
                                    <Trash size={20}/>
                                </button>
                                <Link href="" className="hover:-translate-y-0.5 transition-all duration-200 ease-out"><Brain size={20}/></Link>
                            </div>
                        </li>                        
                    )))}
                </ul>

                {agentToDelete && (
                    <ModalDelete 
                    isOpenDelete={isOpenDelete}
                    isCloseDelete={() => setIsOpenDelete(false)}
                    id={agentToDelete}
                    />
                )}
            </>

        );
    }


}