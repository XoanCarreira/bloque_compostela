

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BvADMCZB.js","_app/immutable/chunks/scheduler.D3hV8Tfu.js","_app/immutable/chunks/index.BRF57FhS.js"];
export const stylesheets = ["_app/immutable/assets/0.BKrCqtXT.css"];
export const fonts = [];
