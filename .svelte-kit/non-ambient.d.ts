
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/privacy" | "/requirements" | "/resources" | "/shop" | "/shop/confirmation" | "/shop/process" | "/submissions" | "/submissions/[project_id]";
		RouteParams(): {
			"/submissions/[project_id]": { project_id: string }
		};
		LayoutParams(): {
			"/": { project_id?: string };
			"/privacy": Record<string, never>;
			"/requirements": Record<string, never>;
			"/resources": Record<string, never>;
			"/shop": Record<string, never>;
			"/shop/confirmation": Record<string, never>;
			"/shop/process": Record<string, never>;
			"/submissions": { project_id?: string };
			"/submissions/[project_id]": { project_id: string }
		};
		Pathname(): "/" | "/privacy" | "/privacy/" | "/requirements" | "/requirements/" | "/resources" | "/resources/" | "/shop" | "/shop/" | "/shop/confirmation" | "/shop/confirmation/" | "/shop/process" | "/shop/process/" | "/submissions" | "/submissions/" | `/submissions/${string}` & {} | `/submissions/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/images/donut.png" | "/images/envelope.png" | "/images/heidiEnvelope.png" | "/images/landing/1.png" | "/images/landing/2.png" | "/images/landing/3.png" | "/images/landing/4.png" | "/images/landing/5.png" | "/images/landingMobile/1.png" | "/images/landingMobile/2.png" | "/images/landingMobile/3.png" | "/images/landingMobile/4.png" | "/images/landingMobile/5.png" | "/images/lesbian.png" | "/images/orphHeidi.png" | "/images/orpheusCard.png" | "/images/shop/lamp.png" | "/images/shop/pens.png" | "/images/shop/plushie.png" | "/images/shop/soon.png" | "/images/shop/sugarRush.png" | "/images/shop/sweatshirt.png" | "/images/shop/sweatshirt2.png" | "/images/sweatshirt.png" | "/images/wave1.png" | "/images/wave2.png" | "/images/wave3.png" | "/images/wave4.png" | "/images/wave5.png" | "/robots.txt" | string & {};
	}
}