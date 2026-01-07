"use client";

import assistantsIA from "../data/asistentes.json";
import { CompleteAssistant } from "@/types/Assistant";
import { useEffect, useState } from "react";

interface UseAssistantsState { // tipado estado
  assistants: CompleteAssistant[]
  error: string
  loading: boolean
}

export function useLocalStorage() {

    const [state, assistantsState] = useState<UseAssistantsState>({
        assistants: [],
        error: "",
        loading: true
    });

    useEffect(() => {
        try {
            const stored = localStorage.getItem("assistants");
            if (stored) {
                assistantsState(prev => ({
                    ...prev,
                    assistants: JSON.parse(stored),
                    error: "",
                    loading: false
                }));
            } else {
                localStorage.setItem("assistants", JSON.stringify(assistantsIA));

                assistantsState(prev => ({
                    ...prev,
                    assistants: assistantsIA,
                    error: "",
                    loading: false
                }));
            }
        } catch (error) {
            assistantsState(() => ({
                assistants: [],
                error: "No hay agentes disponibles",
                loading: false
            }));
        }
    }, []);

    // agregar CRUD 

    return {state};
}