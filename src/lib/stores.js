import { writable } from "svelte/store";
import works from "$lib/works";

export const isShown = writable(false);
export const pVisible = writable(false);
export const result = writable(works);
