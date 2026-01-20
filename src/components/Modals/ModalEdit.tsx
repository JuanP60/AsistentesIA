"use client";

import { EditTypes } from "@/types/Modals";
import { useEffect, useState } from "react";
import { BotMessageSquare} from "lucide-react";
import { CompleteAssistant } from "@/types/Assistant";

export function ModalEdit({isEditOpen, isCloseEdit, agentInfo}: EditTypes) {

    const [agentEdit, setAgentEdit] = useState<CompleteAssistant>(agentInfo);

    // handler para inputs:

    const onEdit = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> )=> {    
        const {name, value,  type} = e.target;

        setAgentEdit(prev => ({
            ...prev,
            [name]: type === "number" ? Number(value) : value
        }));
    }

    useEffect(() => {
        if (!isEditOpen) return;

        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isEditOpen]);

    if (!isEditOpen) return null;

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/50 z-50">
            <div className="flex flex-col items-center w-[90%] md:w-auto  gap-10 fixed bg-white border border-gray-100 rounded-4xl p-10 md:p-14">
                <section className="flex gap-5">
                    <BotMessageSquare />
                    <h1 className="text-xl font-medium">Editando {agentInfo.name}</h1>
                </section>      
                <div className="flex flex-row gap-15">
                    <form action="" className="flex flex-col gap-5">

                        <section className="flex flex-col gap-1 md:gap-5">
                            <label htmlFor="nombre">Nombre del agente:</label>
                            <input type="text" id="nombre" name="name" placeholder="Agent IA" value={agentEdit.name} required minLength={3} onChange={onEdit}

                            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400
                            outline-none transition-all duration-200 focus:border-black focus:ring-1 focus:ring-black"
                            />
                        </section>
                        
                        <section className="flex flex-col gap-1 md:gap-5">
                            <label htmlFor="idioma">Idioma:</label>
                            <select name="language" id="idioma" required value={agentEdit.language} onChange={onEdit}

                            className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none
                            transition-all duration-200 focus:border-black focus:ring-1 focus:ring-black hover:cursor-pointer">
                                <option value="" disabled className="placeholder-gray-400">Seleccion un idioma</option>
                                <option value="Español">Español</option>
                                <option value="Inglés">Inglés</option>
                                <option value="Portugues">Portugués</option>
                            </select>
                        </section>
                        

                        <section className="flex flex-col gap-1 md:gap-5">
                            <label htmlFor="tono">Tono:</label>
                            <select name="tone" id="tono" required value={agentEdit.tone} onChange={onEdit}
    

                            className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none
                            transition-all duration-200 focus:border-black focus:ring-1 focus:ring-black hover:cursor-pointer">
                                <option value="" disabled>Selecciona un tono</option>
                                <option value="Formal">Formal</option>
                                <option value="Casual">Casual</option>
                                <option value="Profesional">Profesional</option>
                                <option value="Amigable">Amigable</option>
                            </select>
                        </section>
                        
                    </form>

                    <div className="bg-amber-200 border border-gray-200"></div>

                    <form action="" className="flex flex-col gap-7">
                        <div className="flex">
                            <h1 className="text-wrap">Digita el porcentaje que deseas en cada <br /> tipo de respuesta:</h1>
                        </div>

                        <div className="flex flex-col gap-4">
                            <section className="flex gap-3 items-center">
                                <label htmlFor="short">Corta:</label>
                                <input type="number" min={0} max={100} placeholder="25" id="short" required value={agentEdit.responseLength.short} onChange={onEdit}

                                className="w-24 rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400
                                outline-none transition-all duration-200 focus:border-black focus:ring-1 focus:ring-black" />
                            </section>

                            <section className="flex gap-3 items-center">
                                <label htmlFor="medium">Mediana:</label>
                                <input type="number" min={0} max={100} placeholder="25" id="medium" required value={agentEdit.responseLength.medium} onChange={onEdit}

                                className="w-24  rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400
                                outline-none transition-all duration-200 focus:border-black focus:ring-1 focus:ring-black"/>
                            </section>

                            <section className="flex gap-3 items-center">
                                <label htmlFor="long">Larga:</label>
                                <input type="number" min={0} max={100} placeholder="25" id="long" required value={agentEdit.responseLength.long} onChange={onEdit}
    
                                className="w-24 rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400
                                outline-none transition-all duration-200 focus:border-black focus:ring-1 focus:ring-black"/>
                            </section>
                        </div>

                        <div className="flex gap-3 items-center">
                            <label htmlFor="audio">Respuestas de audio</label>
                            <input type="checkbox" name="audio" id="audio"

                            className="h-5 w-5 appearance-none rounded-md border border-gray-300 bg-white transition-all duration-200 checked:bg-black checked:border-black
                            checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:flex checked:after:items-center checked:after:justify-center cursor-pointer focus:outline-none
                            focus:ring-1 focus:ring-black"/>
                        </div>
                    </form>
                </div>
                    <section className="flex gap-5 justify-center">
                        <button className="border border-black p-2 rounded-2xl text-white bg-black hover:bg-white hover:text-black hover:scale-[1.02] transition-all duration-200 ease-out cursor-pointer">
                            Editar
                        </button>
                        <button onClick={isCloseEdit} className="hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer">
                            Cancelar
                        </button>
                    </section>
            </div>
        </div>
    );
}