import * as server from '../entries/pages/home/_page.server.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/home/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/home/+page.server.js";
export const imports = ["_app/immutable/nodes/5.c4e545b1.js","_app/immutable/chunks/index.b30cf62f.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.0c71d2f3.js","_app/immutable/chunks/navigation.cb9b1c8d.js","_app/immutable/chunks/stores.a5a50690.js"];
export const stylesheets = ["_app/immutable/assets/5.a6e9b007.css"];
export const fonts = [];
