import { writable } from 'svelte/store';

export const isNavOpen = writable(false);
export const currentPage = writable("/");