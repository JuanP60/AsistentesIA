export type Language = "Español" | "Inglés" | "Portugues"; // idioma que el user elige
export type Tone = "Formal" | "Casual" | "Profesional" | "Amigable"

export interface ResponseLght {
    short: number,
    medium: number,
    long: number
}

export interface Assistant {
    id: String,
    name: String,
    language: Language,
    tone: Tone,
    responseLght: ResponseLght,
    audioAvailable: boolean,
    rules: string
}