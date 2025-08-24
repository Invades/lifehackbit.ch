import { writable } from 'svelte/store';

// Global state for unattended mode
export const unattendedMode = writable(false);

// Function to set unattended mode
export function setUnattendedMode(enabled: boolean) {
    unattendedMode.set(enabled);
}
