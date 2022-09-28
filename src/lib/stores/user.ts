import { writable } from "svelte/store";

export interface DiscordToken {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
}

export const User = writable<DiscordToken | undefined>()