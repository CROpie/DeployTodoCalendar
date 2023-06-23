import * as server from '../entries/pages/_page.server.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.001c376b.js","_app/immutable/chunks/index.b30cf62f.js"];
export const stylesheets = ["_app/immutable/assets/2.6f1ecc59.css"];
export const fonts = [];
