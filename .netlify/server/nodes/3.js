import * as server from '../entries/pages/(auth)/login/_page.server.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/(auth)/login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(auth)/login/+page.server.js";
export const imports = ["_app/immutable/nodes/3.6d256198.js","_app/immutable/chunks/index.28d0c909.js","_app/immutable/chunks/forms.67f45cbd.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.a70f318d.js"];
export const stylesheets = ["_app/immutable/assets/3.29186ce4.css"];
export const fonts = [];
