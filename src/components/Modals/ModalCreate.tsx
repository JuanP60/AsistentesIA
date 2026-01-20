"use client";

import { ModalsTypes} from "@/types/Modals";
import { CompleteAssistant } from "@/types/Assistant";
import { BotMessageSquare, FileCode } from "lucide-react";
import { useEffect, useState } from "react";
import { localStorageContext } from "@/context/LocalStorageContext";

export function ModalCreate({isOpen1, onClose1}: ModalsTypes) {

    const {saveNewAgent} = localStorageContext();
    const [step, setStep] = useState<1 | 2>(1); // manejo de modales step by step
    const [formData, setFormData] = useState<CompleteAssistant>({
        id: "",
        name: "",
        language: "",
        tone: "",
        responseLength: {
            short: 0,
            medium: 0,
            long: 0
        },
        audioEnabled: false,
        rules: ""
    })

    // aislar modal

    useEffect(() => {
        if (!isOpen1) return;

        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen1]);

    // funciones

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStep(2); // next step
    }

    const handleBack = () => {
        setStep(1);
    }

    const onCleanData = () => {
        setFormData(() => ({
            id: "",
            name: "",
            language: "",
            tone: "",
            responseLength: {
                short: 0,
                medium: 0,
                long: 0
            },
            audioEnabled: false,
            rules: ""
        }));
    }

    const saveNew = (e: React.FormEvent<HTMLFormElement>) => {
        // validar porcentajes
        e.preventDefault();
        onCleanData(); // limpia form
        setStep(1); // reinicio steps modales
        onClose1(); // cierro todos los modales luego de guardar
        //const porcentages = Number(formData.responseLength.short + formData.responseLength.medium + formData.responseLength.long)
        const newAgent: CompleteAssistant = {
            ...formData, // copia del objeto ya creado con datos ingreados por el user.
            id: Date.now().toString(),
        }

        saveNewAgent(newAgent);
    
        //alert("Porcentajes deben sumar 100% antes de continuar");
        
    } 

    if (!isOpen1) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            {step === 1 && (
                <div className="flex flex-col items-center w-[90%] md:w-auto justify-center gap-10 fixed bg-white border border-gray-100 rounded-4xl p-10 md:p-14">
                    <div className="flex gap-40">
                        <BotMessageSquare />
                        <span className="text-gray-400">1</span>
                    </div>
                    <form onSubmit={onSubmit} className="flex flex-col gap-9">
                        <section className="flex flex-col gap-1 md:gap-5">
                            <label htmlFor="nombre" className="font-medium">Nombre del agente:</label>
                            <input type="text" id="nombre" placeholder="Agent IA" required minLength={3} 
                            onChange={(e) => setFormData(prev => ({
                                ...prev,
                                name: e.target.value
                            }))}
                            value={formData.name}
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400
                            outline-none transition-all duration-200 focus:border-black focus:ring-1 focus:ring-black"
                            />
                        </section>
                    
                        <section className="flex flex-col gap-1 md:gap-5">
                            <label htmlFor="idioma" className="font-medium">Idioma:</label>
                            <select name="idioma" id="idioma" required 
                            onChange={(e) => setFormData(prev => ({
                                ...prev,
                                language: e.target.value
                            }))}
                            value={formData.language}
                            className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none
                            transition-all duration-200 focus:border-black focus:ring-1 focus:ring-black hover:cursor-pointer">
                                <option value="" disabled className="placeholder-gray-400">Seleccion un idioma</option>
                                <option value="Español">Español</option>
                                <option value="Inglés">Inglés</option>
                                <option value="Portugues">Portugués</option>
                            </select>
                        </section>
                        

                        <section className="flex flex-col gap-1 md:gap-5">
                            <label htmlFor="tono" className="font-medium">Tono:</label>
                            <select name="tono" id="tono" required 
                            onChange={(e) => setFormData(prev => ({
                                ...prev,
                                tone: e.target.value
                            }))}
                            value={formData.tone}
                            className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none
                            transition-all duration-200 focus:border-black focus:ring-1 focus:ring-black hover:cursor-pointer">
                                <option value="" disabled>Selecciona un tono</option>
                                <option value="Formal">Formal</option>
                                <option value="Casual">Casual</option>
                                <option value="Profesional">Profesional</option>
                                <option value="Amigable">Amigable</option>
                            </select>
                        </section>
                        <hr className="text-gray-300 w-full"/>

                        <div className="flex gap-6">
                            <button 
                                className="border border-black p-2 rounded-2xl text-white bg-black hover:bg-white hover:text-black hover:scale-[1.02] transition-all duration-200 ease-out cursor-pointer"
                                type="submit"
                                >Siguiente
                            </button>
                            
                            <button 
                                onClick={() => {
                                    onClose1();
                                    onCleanData();
                                }}
                                type="button"
                                className="hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer">
                                    Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            )}



            {(step === 2 && (
                <div className="flex flex-col items-center w-[90%] md:w-auto justify-center gap-10 fixed bg-white border border-gray-100 rounded-4xl p-10 md:p-14">
                    <div className="flex gap-40 md:gap-96">
                        <FileCode />
                        <span className="text-gray-400">2</span>
                    </div>

                    <form onSubmit={saveNew} className="flex flex-col gap-7">
                        <div className="flex">
                            <h1 className="text-wrap">Digita el porcentaje que deseas en cada <br /> tipo de respuesta:</h1>
                        </div>

                        <div className="flex flex-col md:flex-row gap-2">
                            <section className="flex gap-3 items-center">
                                <label htmlFor="short">Corta:</label>
                                <input type="number" min={0} max={100} placeholder="25" id="short" required 
                                value={formData.responseLength.short} 
                                onChange={(e) => setFormData(prev => ({
                                    ...prev,
                                    responseLength: {
                                        ...prev.responseLength,
                                        short: Number(e.target.value)
                                    }
                                }))}
                                className="w-24 rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400
                                outline-none transition-all duration-200 focus:border-black focus:ring-1 focus:ring-black" />
                            </section>

                            <section className="flex gap-3 items-center">
                                <label htmlFor="medium">Mediana:</label>
                                <input type="number" min={0} max={100} placeholder="25" id="medium" required 
                                value={formData.responseLength.medium}
                                onChange={(e) => setFormData(prev => ({
                                    ...prev,
                                    responseLength: {
                                        ...prev.responseLength,
                                        medium: Number(e.target.value)
                                    }
                                }))}
                                className="w-24  rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400
                                outline-none transition-all duration-200 focus:border-black focus:ring-1 focus:ring-black"/>
                            </section>

                            <section className="flex gap-3 items-center">
                                <label htmlFor="long">Larga:</label>
                                <input type="number" min={0} max={100} placeholder="25" id="long" required 
                                value={formData.responseLength.long}
                                onChange={(e) => setFormData(prev => ({
                                    ...prev,
                                    responseLength: {
                                        ...prev.responseLength,
                                        long: Number(e.target.value)
                                    }
                                }))}
                                className="w-24 rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400
                                outline-none transition-all duration-200 focus:border-black focus:ring-1 focus:ring-black"/>
                            </section>
                        </div>

                        <div className="flex gap-3 items-center">
                            <label htmlFor="audio">Respuestas de audio</label>
                            <input type="checkbox" name="audio" id="audio"
                            checked={formData.audioEnabled}
                            onChange={(e) => setFormData(prev => ({
                                ...prev,
                                audioEnabled: e.target.checked
                            }))}
                            className="h-5 w-5 appearance-none rounded-md border border-gray-300 bg-white transition-all duration-200 checked:bg-black checked:border-black
                            checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:flex checked:after:items-center checked:after:justify-center cursor-pointer focus:outline-none
                            focus:ring-1 focus:ring-black"/>
                        </div>

                        <hr className="text-gray-300 text-center w-full"/>

                        <div className="flex justify-center gap-6">
                            <button onClick={handleBack} className="hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer">Atras</button>
                            <button className="border border-black p-2 rounded-2xl text-white bg-black hover:bg-white hover:text-black hover:scale-[1.02] transition-all duration-200 ease-out cursor-pointer"
                            type="submit"
                            >
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            ))}
        </div>

    );
}