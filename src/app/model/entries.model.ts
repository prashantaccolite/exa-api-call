export interface EntriesData {
    API: string,
    Description: string,
    Auth: string,
    HTTPS: boolean,
    Cors: string,
    Link: string,
    Category: string
}

export interface Entries {
    count: number,
    entries: EntriesData[]
}