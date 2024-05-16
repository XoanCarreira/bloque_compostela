

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BeL-Mfjm.js","_app/immutable/chunks/scheduler.D3hV8Tfu.js","_app/immutable/chunks/index.BRF57FhS.js"];
export const stylesheets = ["_app/immutable/assets/2.R1kKuGve.css"];
export const fonts = [];
