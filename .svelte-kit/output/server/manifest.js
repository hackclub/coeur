export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/donut.png","images/envelope.png","images/heidiEnvelope.png","images/landing/1.png","images/landing/2.png","images/landing/3.png","images/landing/4.png","images/landing/5.png","images/landingMobile/1.png","images/landingMobile/2.png","images/landingMobile/3.png","images/landingMobile/4.png","images/landingMobile/5.png","images/lesbian.png","images/orpheusCard.png","images/shop/lamp.png","images/shop/pens.png","images/shop/plushie.png","images/shop/sugarRush.png","images/shop/sweatshirt.png","images/sweatshirt.png","images/wave1.png","images/wave2.png","images/wave3.png","images/wave4.png","images/wave5.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.BiGSBtlN.js",app:"_app/immutable/entry/app.suodi2vm.js",imports:["_app/immutable/entry/start.BiGSBtlN.js","_app/immutable/chunks/DX_QD5Ii.js","_app/immutable/chunks/Dx_PPwk_.js","_app/immutable/chunks/CDsp1QBK.js","_app/immutable/chunks/DcEM9jAB.js","_app/immutable/entry/app.suodi2vm.js","_app/immutable/chunks/Dx_PPwk_.js","_app/immutable/chunks/Cf5eLdZj.js","_app/immutable/chunks/VkAAB9OL.js","_app/immutable/chunks/By_xH-7n.js","_app/immutable/chunks/DcEM9jAB.js","_app/immutable/chunks/MXz4SnZY.js","_app/immutable/chunks/C1X_bY97.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
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
