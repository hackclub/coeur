export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/donut.png","images/envelope.png","images/heidiEnvelope.png","images/landing/1.png","images/landing/2.png","images/landing/3.png","images/landing/4.png","images/landing/5.png","images/landingMobile/1.png","images/landingMobile/2.png","images/landingMobile/3.png","images/landingMobile/4.png","images/landingMobile/5.png","images/lesbian.png","images/orphHeidi.png","images/orpheusCard.png","images/shop/lamp.png","images/shop/pens.png","images/shop/plushie.png","images/shop/sugarRush.png","images/shop/sweatshirt.png","images/sweatshirt.png","images/wave1.png","images/wave2.png","images/wave3.png","images/wave4.png","images/wave5.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CBqiwARR.js",app:"_app/immutable/entry/app.DJS3lBVZ.js",imports:["_app/immutable/entry/start.CBqiwARR.js","_app/immutable/chunks/YjevSUmF.js","_app/immutable/chunks/D6ji1pod.js","_app/immutable/chunks/CWiBshBp.js","_app/immutable/chunks/C4qdXfUE.js","_app/immutable/entry/app.DJS3lBVZ.js","_app/immutable/chunks/D6ji1pod.js","_app/immutable/chunks/xEm7VuXn.js","_app/immutable/chunks/DcCpkM7l.js","_app/immutable/chunks/yXg7qjZu.js","_app/immutable/chunks/C4qdXfUE.js","_app/immutable/chunks/Agh0HKCm.js","_app/immutable/chunks/BV1n_Yxd.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/requirements",
				pattern: /^\/requirements\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/shop",
				pattern: /^\/shop\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/shop/confirmation",
				pattern: /^\/shop\/confirmation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/shop/process",
				pattern: /^\/shop\/process\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/submissions/[project_id]",
				pattern: /^\/submissions\/([^/]+?)\/?$/,
				params: [{"name":"project_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
