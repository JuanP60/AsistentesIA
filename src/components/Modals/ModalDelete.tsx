import { ModalsDeleteTypes } from "@/types/Modals";
import { useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export function ModalDelete({isOpenDelete, isCloseDelete, id}: ModalsDeleteTypes) {

    const {deleteAgent} = useLocalStorage(); // cambiar por un context

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

    if (isOpenDelete) {
        return (
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="flex flex-col items-center justify-center gap-5 fixed bg-white border border-gray-100 rounded-2xl">
                    <form>
                        <section>
                            <p>¿Seguro quieres eliminar este agente?</p>
                        </section>

                        <section>
                            <button onClick={deleteAssistant} className="hover:cursor-pointer">Eliminar</button>
                            <button onClick={isCloseDelete} className="hover:cursor-pointer">Cancelar</button>
                        </section>
                    </form>
                </div>
            </div>
        )
    } else {
        return null;
    }
}