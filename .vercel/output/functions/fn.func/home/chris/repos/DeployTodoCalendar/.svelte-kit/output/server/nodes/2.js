import * as server from '../entries/pages/_page.server.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.339c993b.js","_app/immutable/chunks/index.28d0c909.js","_app/immutable/chunks/forms.9d9e25ca.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.6fb5310d.js","_app/immutable/chunks/stores.275aa40b.js"];
export const stylesheets = ["_app/immutable/assets/2.047c9e15.css"];
export const fonts = [];
