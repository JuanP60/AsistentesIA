"use client";

import assistantsIA from "../data/asistentes.json";
import { CompleteAssistant } from "@/types/Assistant";
import React, { useContext, useEffect, useState } from "react";

//tipado para estados
interface UseAssistantsState { // tipado estado
  assistants: CompleteAssistant[]
  error: string
  loading: boolean
}

//tipado para context
interface StorageContextType {
  state: UseAssistantsState;
  saveNewAgent: (data: CompleteAssistant) => void;
  deleteAgent: (id: string) => void;
}

//tipado para provider (uso de context)
interface StorageProviderProps {
  children: React.ReactNode;
}

const StorageContext = React.createContext<StorageContextType | null>(null);

export function StorageProvider({children}: StorageProviderProps) {

    const [state, setAssistantsState] = useState<UseAssistantsState>({
        assistants: [],
        error: "",
        loading: true
    });

    useEffect(() => {
        try {
            const stored = localStorage.getItem("assistants");
            if (stored) {
                setAssistantsState(prev => ({
                    ...prev,
                    assistants: JSON.parse(stored),
                    error: "",
                    loading: false
                }));
            } else {
                localStorage.setItem("assistants", JSON.stringify(assistantsIA));

                setAssistantsState(prev => ({
                    ...prev,
                    assistants: assistantsIA,
                    error: "",
                    loading: false
                }));
            }
        } catch (error) {
            setAssistantsState(() => ({
                assistants: [],
                error: "No hay agentes disponibles",
                loading: false
            }));
        }
    }, []);

    // agregar CRUD 

    const saveNewAgent = (data: CompleteAssistant) => {
        try {
            setAssistantsState(prev => {
                const newAgents = [...prev.assistants, data];

                localStorage.setItem("assistants", JSON.stringify(newAgents));

                return {
                    ...prev,
                    assistants: newAgents,
                    error: "",
                    loading: false
                }
            });
        } catch (error) {
            console.log("Error guardando nuevo agente");
        }
    }

    const deleteAgent = (id: string) => {   

        const currentAssistants = state.assistants ?? []; // avoid undefined issues
     
        const filtered = currentAssistants.filter((agent) => agent.id !== id); // lista de todos los agentes que no cumplan con el id enviado

        setAssistantsState(prev => ({
            ...prev,
            assistants: filtered,
            error: "",
        }));
        localStorage.setItem("assistants", JSON.stringify(filtered));
    }

    // edit agent

    const storageData = {state, saveNewAgent, deleteAgent}
    
    return (
        <StorageContext.Provider value={storageData}>
            {children}
        </StorageContext.Provider>
    )
}

export function localStorageContext() {
    const data = useContext(StorageContext);

    if(!data) { // validar primero si no es null, sin validacion tsx no permite usar el export del provider
        throw new Error("Error en Provider")
    }

    return data;
}