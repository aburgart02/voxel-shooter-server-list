export type Server = {
    id: string,
    name: string,
    ip: string,
    maxPlayers: number,
    currentPlayers: number;
    region: string,
    ping: number,
    description: string
}