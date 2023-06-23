import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.8d6fcca5.js","app":"_app/immutable/entry/app.d806366f.js","imports":["_app/immutable/entry/start.8d6fcca5.js","_app/immutable/chunks/index.b30cf62f.js","_app/immutable/chunks/singletons.0c71d2f3.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.d806366f.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.b30cf62f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/apis/project",
				pattern: /^\/apis\/project\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/apis/todo",
				pattern: /^\/apis\/todo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/autologin",
				pattern: /^\/autologin\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/autologin/_server.js')
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
