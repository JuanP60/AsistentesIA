"use client";

import { EditTypes } from "@/types/Modals";
import { useEffect } from "react";
import { BotMessageSquare, FileCode } from "lucide-react";

export function ModalEdit({isEditOpen, isCloseEdit, agentInfo}: EditTypes) {

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
            <div className="flex  w-[90%] md:w-auto  gap-10 fixed bg-white border border-gray-100 rounded-4xl p-10 md:p-14">
                <form action="" className="flex flex-col gap-5">
                    <section>
                        <h1>Editando {agentInfo.name}</h1>
                    </section>

                    <section className="flex flex-col gap-1 md:gap-5">
                        <label htmlFor="nombre" className="font-medium">Nombre del agente:</label>
                        <input type="text" id="nombre" placeholder="Agent IA" required minLength={3} 

                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400
                        outline-none transition-all duration-200 focus:border-black focus:ring-1 focus:ring-black"
                        />
                    </section>
                    
                    <section className="flex flex-col gap-1 md:gap-5">
                        <label htmlFor="idioma" className="font-medium">Idioma:</label>
                        <select name="idioma" id="idioma" required 

                        className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none
                        transition-all duration-200 focus:border-black focus:ring-1 focus:ring-black hover:cursor-pointer">
                            <option value="" disabled className="placeholder-gray-400">Seleccion un idioma</option>
                            <option value="español">Español</option>
                            <option value="ingles">Inglés</option>
                            <option value="portugues">Portugués</option>
                        </select>
                    </section>
                    

                    <section className="flex flex-col gap-1 md:gap-5">
                        <label htmlFor="tono" className="font-medium">Tono:</label>
                        <select name="tono" id="tono" required 
   

                        className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none
                        transition-all duration-200 focus:border-black focus:ring-1 focus:ring-black hover:cursor-pointer">
                            <option value="" disabled>Selecciona un tono</option>
                            <option value="formal">Formal</option>
                            <option value="casual">Casual</option>
                            <option value="profesional">Profesional</option>
                            <option value="amigable">Amigable</option>
                        </select>
                    </section>
                    
                    <section className="flex gap-3 justify-center">
                        <button className="border border-black p-2 rounded-2xl text-white bg-black hover:bg-white hover:text-black hover:scale-[1.02] transition-all duration-200 ease-out cursor-pointer">
                            Editar
                        </button>
                        <button onClick={isCloseEdit} className="hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer">
                            Cancelar
                        </button>
                    </section>
                </form>

                <form action="">
                    <div className="flex">
                        <h1 className="text-wrap">Digita el porcentaje que deseas en cada <br /> tipo de respuesta:</h1>
                    </div>

                    <div className="flex flex-col md:flex-row gap-2">
                        <section className="flex gap-3 items-center">
                            <label htmlFor="short">Corta:</label>
                            <input type="number" min={0} max={100} placeholder="25" id="short" required 

                            className="w-24 rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400
                            outline-none transition-all duration-200 focus:border-black focus:ring-1 focus:ring-black" />
                        </section>

                        <section className="flex gap-3 items-center">
                            <label htmlFor="medium">Mediana:</label>
                            <input type="number" min={0} max={100} placeholder="25" id="medium" required 

                            className="w-24  rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400
                            outline-none transition-all duration-200 focus:border-black focus:ring-1 focus:ring-black"/>
                        </section>

                        <section className="flex gap-3 items-center">
                            <label htmlFor="long">Larga:</label>
                            <input type="number" min={0} max={100} placeholder="25" id="long" required 
  
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
        </div>
    );
}