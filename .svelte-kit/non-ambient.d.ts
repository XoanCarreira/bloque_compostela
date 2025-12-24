
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
		RouteId(): "/" | "/almacen" | "/boulder_compostela" | "/components" | "/eucaliptos" | "/lampai" | "/novas" | "/recorda";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/almacen": Record<string, never>;
			"/boulder_compostela": Record<string, never>;
			"/components": Record<string, never>;
			"/eucaliptos": Record<string, never>;
			"/lampai": Record<string, never>;
			"/novas": Record<string, never>;
			"/recorda": Record<string, never>
		};
		Pathname(): "/" | "/almacen" | "/almacen/" | "/boulder_compostela" | "/boulder_compostela/" | "/components" | "/components/" | "/eucaliptos" | "/eucaliptos/" | "/lampai" | "/lampai/" | "/novas" | "/novas/" | "/recorda" | "/recorda/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/almacen/Almacen_01.jpg" | "/almacen/mapa_almacen.jpg" | "/favicon.png" | "/favicon_152.png" | "/favicon_16.png" | "/favicon_167.png" | "/favicon_180.png" | "/favicon_192.png" | "/favicon_32.png" | "/favicon_48.png" | "/favicon_512.png" | "/favicon_96.png" | "/favicon_boulder02.png" | "/favicon_limpio.svg" | "/home.svg" | "/info.svg" | "/inicio.png" | "/lampai/campo_01.jpg" | "/lampai/campo_02.jpg" | "/lampai/campo_03.jpg" | "/lampai/campo_04.jpg" | "/lampai/campo_05.jpg" | "/lampai/campo_06.jpg" | "/lampai/campo_07.jpg" | "/lampai/campo_08.jpg" | "/lampai/campo_09.jpg" | "/lampai/congrio_01.jpg" | "/lampai/congrio_02.jpg" | "/lampai/gaia_01.jpg" | "/lampai/gaia_02.jpg" | "/lampai/ladeira_01.jpg" | "/lampai/ladeira_02.jpg" | "/lampai/ladeira_03.jpg" | "/lampai/ladeira_04.jpg" | "/lampai/ladeira_06.jpg" | "/lampai/ladeira_07.jpg" | "/lampai/mangui_00.jpg" | "/lampai/mangui_01.jpg" | "/lampai/mangui_02.jpg" | "/lampai/mangui_03.jpg" | "/lampai/mangui_04.jpg" | "/lampai/mangui_05.jpg" | "/lampai/mangui_06.jpg" | "/lampai/mapa_ladeira.jpg" | "/lampai/mapa_lampai.jpg" | "/lampai/mapa_mangui.jpg" | "/lampai/mapa_mirador.jpg" | "/lampai/mapa_mole.jpg" | "/lampai/mapa_oriente.jpg" | "/lampai/mirador_01.jpg" | "/lampai/mirador_02.jpg" | "/lampai/mirador_03.jpg" | "/lampai/mole_01.jpg" | "/lampai/mole_02.jpg" | "/lampai/mole_03.jpg" | "/lampai/mole_04.jpg" | "/lampai/mole_05.jpg" | "/lampai/mole_06.jpg" | "/lampai/oriente_01.jpg" | "/lampai/oriente_02.jpg" | "/lampai/teito_01.jpg" | "/lampai/teito_02.jpg" | "/lampai/verme_01.jpg" | "/manifest.json" | "/sectores.svg" | string & {};
	}
}