"use client";

import { ModalsDeleteTypes } from "@/types/Modals";
import { useEffect } from "react";
import { localStorageContext } from "@/context/LocalStorageContext";

export function ModalDelete({isOpenDelete, isCloseDelete, id}: ModalsDeleteTypes) {

    const {deleteAgent} = localStorageContext();

    useEffect(() => {
    
            if (isOpenDelete) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
    }, [isOpenDelete]);

    const deleteAssistant = () => {
        deleteAgent(id);
        isCloseDelete();
    }

    if (!isOpenDelete) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="flex flex-col items-center w-[90%] md:w-auto justify-center fixed bg-white border border-gray-100 rounded-4xl p-7 md:p-10">
                <form className="flex flex-col gap-5">
                    <section>
                        <p>¿Seguro quieres eliminar este agente?</p>
                    </section>

                    <section className="flex gap-3 justify-center">
                        <button onClick={deleteAssistant} className="border border-black p-2 rounded-2xl text-white bg-black hover:bg-white hover:text-black hover:scale-[1.02] transition-all duration-200 ease-out cursor-pointer">
                            Eliminar
                        </button>
                        <button onClick={isCloseDelete} className="hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer">
                            Cancelar
                        </button>
                    </section>
                </form>
            </div>
        </div>
    )
}