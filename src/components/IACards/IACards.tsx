"use client";

import { localStorageContext } from "@/context/LocalStorageContext";
import { Loader } from "../Loader/Loader";
import { Card } from "../Card/Card";
import { ModalDelete } from "@/components/Modals/ModalDelete";
import { ModalEdit } from "../Modals/ModalEdit";
import { useState } from "react";
import { CompleteAssistant } from "@/types/Assistant";

export function IACards () {

    const {state} = localStorageContext();
    const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false);
    const [agentToDelete, setAgentToDelete] = useState<string | null >(null);
    const [isEditOpen, setOpenEdit] = useState<boolean>(false);
    const [agentToEdit, setAgentToEdit] = useState<CompleteAssistant>();

    const manageDelete = (agentId: string) => {
        setIsOpenDelete(true)
        setAgentToDelete(agentId)
    }

    const manageEdit = (agent: CompleteAssistant) => {
        setOpenEdit(true);
        setAgentToEdit(agent);
    }

    if (state.loading) return <Loader />;
    if (state.error) return <p className="flex justify-center text-center text-gray-500 mt-16">No hay Agentes creados por el momento, crea tu primer agente!</p>;
   
    return (
        <>
            <ul className="flex flex-col gap-10 mx-auto max-w-74 md:max-w-2xl lg:max-w-4xl">
                {state.assistants?.map((agent => (
                    <li key={agent.id} className="flex justify-between px-3 md:px-18 lg:px-22 py-2 md:py-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200 ease-out">
                        <Card 
                            agent={agent}
                            manageDelete={manageDelete}
                            manageEdit={manageEdit}
                        />
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

            {agentToEdit && (
                <ModalEdit
                    isEditOpen={isEditOpen}
                    isCloseEdit={() => setOpenEdit(false)}
                    agentInfo={agentToEdit}
                />
            )}
        </>
    );
}