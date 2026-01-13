"use client";

import { Pencil, Trash, Brain, BotMessageSquare } from "lucide-react";
import { CompleteAssistant } from "@/types/Assistant";
import Link from "next/link";

interface CardTypes {
    agent: CompleteAssistant
    manageDelete: (agent: string) => void
    manageEdit: (agent: CompleteAssistant) => void
}

export function Card({agent, manageDelete, manageEdit}: CardTypes) {
    return (
        <>
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
                <button 
                    className="hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer"
                    onClick={() => manageEdit(agent)}
                    >
                    <Pencil size={20}/>
                </button>

                <button 
                    className="hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer"
                    onClick={() => manageDelete(agent.id)}
                >
                    <Trash size={20}/>
                </button>

                <Link href="" className="hover:-translate-y-0.5 transition-all duration-200 ease-out"><Brain size={20}/></Link>
            </div>
        </>
    );
}