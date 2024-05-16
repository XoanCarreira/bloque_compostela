export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["congrio_01.jpg","congrio_02.jpg","favicon.png","Ladeira_01.jpg","mapa_lampai.avif","Mole_01.jpg","Mole_02.jpg","Verme_01.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".avif":"image/avif"},
	_: {
		client: {"start":"_app/immutable/entry/start.CCKMZCxk.js","app":"_app/immutable/entry/app.DWoBAo_3.js","imports":["_app/immutable/entry/start.CCKMZCxk.js","_app/immutable/chunks/entry.rDUJwdSX.js","_app/immutable/chunks/scheduler.D3hV8Tfu.js","_app/immutable/entry/app.DWoBAo_3.js","_app/immutable/chunks/scheduler.D3hV8Tfu.js","_app/immutable/chunks/index.BRF57FhS.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
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
				id: "/lampai",
				pattern: /^\/lampai\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/lampai/sectores",
				pattern: /^\/lampai\/sectores\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
