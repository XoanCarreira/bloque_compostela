import { redirect } from "@sveltejs/kit";

// Redirixe a /zonas, que é a páxina principal do sitio
export function load() {
    throw redirect(307, "/zonas");
}