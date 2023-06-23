import * as universal from '../entries/pages/_layout.js';
import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.6d3a588c.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.b30cf62f.js","_app/immutable/chunks/navigation.cb9b1c8d.js","_app/immutable/chunks/singletons.0c71d2f3.js"];
export const stylesheets = ["_app/immutable/assets/0.f6f4057a.css"];
export const fonts = [];
