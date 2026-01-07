export interface ResponseLght {
    short: number,
    medium: number,
    long: number
}

export interface CompleteAssistant {
    id: string,
    name: string,
    language: string,
    tone: string,
    responseLength: ResponseLght,
    audioEnabled: boolean,
    rules: string
}