
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
		RouteId(): "/" | "/privacy" | "/requirements" | "/shop";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/privacy": Record<string, never>;
			"/requirements": Record<string, never>;
			"/shop": Record<string, never>
		};
		Pathname(): "/" | "/privacy" | "/privacy/" | "/requirements" | "/requirements/" | "/shop" | "/shop/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/images/donut.png" | "/images/envelope.png" | "/images/heidiEnvelope.png" | "/images/landing/1.png" | "/images/landing/2.png" | "/images/landing/3.png" | "/images/landing/4.png" | "/images/landing/5.png" | "/images/landingMobile/1.png" | "/images/landingMobile/2.png" | "/images/landingMobile/3.png" | "/images/landingMobile/4.png" | "/images/landingMobile/5.png" | "/images/lesbian.png" | "/images/orpheusCard.png" | "/images/shop/lamp.png" | "/images/shop/pens.png" | "/images/shop/plushie.png" | "/images/shop/sugarRush.png" | "/images/shop/sweatshirt.png" | "/images/sweatshirt.png" | "/images/wave1.png" | "/images/wave2.png" | "/images/wave3.png" | "/images/wave4.png" | "/images/wave5.png" | "/robots.txt" | string & {};
	}
}