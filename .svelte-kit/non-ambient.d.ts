
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
		RouteId(): "/" | "/boulder_compostela" | "/components" | "/novas" | "/recorda" | "/zonas" | "/zonas/[zona]" | "/zonas/[zona]/[sector]";
		RouteParams(): {
			"/zonas/[zona]": { zona: string };
			"/zonas/[zona]/[sector]": { zona: string; sector: string }
		};
		LayoutParams(): {
			"/": { zona?: string; sector?: string };
			"/boulder_compostela": Record<string, never>;
			"/components": Record<string, never>;
			"/novas": Record<string, never>;
			"/recorda": Record<string, never>;
			"/zonas": { zona?: string; sector?: string };
			"/zonas/[zona]": { zona: string; sector?: string };
			"/zonas/[zona]/[sector]": { zona: string; sector: string }
		};
		Pathname(): "/" | "/boulder_compostela" | "/boulder_compostela/" | "/components" | "/components/" | "/novas" | "/novas/" | "/recorda" | "/recorda/" | "/zonas" | "/zonas/" | `/zonas/${string}` & {} | `/zonas/${string}/` & {} | `/zonas/${string}/${string}` & {} | `/zonas/${string}/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/almacen/almacen_01.jpg" | "/almacen/mapa_almacen.jpg" | "/almacen/portada_almacen.jpg" | "/data/zonas/almacen/index.json" | "/data/zonas/almacen/sectores/principal.json" | "/data/zonas/biofilia/index.json" | "/data/zonas/biofilia/sectores/biofilia.json" | "/data/zonas/eucaliptos/index.json" | "/data/zonas/eucaliptos/sectores/principal.json" | "/data/zonas/lampai/index.json" | "/data/zonas/lampai/sectores/campo.json" | "/data/zonas/lampai/sectores/congrio.json" | "/data/zonas/lampai/sectores/gaia.json" | "/data/zonas/lampai/sectores/ladeira.json" | "/data/zonas/lampai/sectores/mangui.json" | "/data/zonas/lampai/sectores/mirador.json" | "/data/zonas/lampai/sectores/mole.json" | "/data/zonas/lampai/sectores/oriente.json" | "/data/zonas/lampai/sectores/teito.json" | "/data/zonas/lampai/sectores/verme.json" | "/data/zonas/pedroso/index.json" | "/data/zonas/pedroso/sectores/zipi_zape.json" | "/data/zonas/sura/index.json" | "/data/zonas/sura/sectores/principal.json" | "/data/zonas/vilas/index.json" | "/data/zonas/vilas/sectores/principal.json" | "/data/zonas.json" | "/favicon.png" | "/favicon_152.png" | "/favicon_16.png" | "/favicon_167.png" | "/favicon_180.png" | "/favicon_192.png" | "/favicon_32.png" | "/favicon_48.png" | "/favicon_512.png" | "/favicon_96.png" | "/favicon_boulder02.png" | "/favicon_limpio.svg" | "/iconas/aproximacion.png" | "/iconas/grado.png" | "/iconas/sectores.png" | "/iconas/vias.png" | "/info.svg" | "/lampai/campo_01.jpg" | "/lampai/campo_02.jpg" | "/lampai/campo_03.jpg" | "/lampai/campo_04.jpg" | "/lampai/campo_05.jpg" | "/lampai/campo_06.jpg" | "/lampai/campo_07.jpg" | "/lampai/campo_08.jpg" | "/lampai/campo_09.jpg" | "/lampai/congrio_01.jpg" | "/lampai/congrio_02.jpg" | "/lampai/gaia_01.jpg" | "/lampai/gaia_02.jpg" | "/lampai/ladeira_01.jpg" | "/lampai/ladeira_02.jpg" | "/lampai/ladeira_03.jpg" | "/lampai/ladeira_04.jpg" | "/lampai/ladeira_06.jpg" | "/lampai/ladeira_07.jpg" | "/lampai/mangui_00.jpg" | "/lampai/mangui_01.jpg" | "/lampai/mangui_02.jpg" | "/lampai/mangui_03.jpg" | "/lampai/mangui_04.jpg" | "/lampai/mangui_05.jpg" | "/lampai/mangui_06.jpg" | "/lampai/mapa_ladeira.jpg" | "/lampai/mapa_lampai.jpg" | "/lampai/mapa_mangui.jpg" | "/lampai/mapa_mirador.jpg" | "/lampai/mapa_mole.jpg" | "/lampai/mapa_oriente.jpg" | "/lampai/mirador_01.jpg" | "/lampai/mirador_02.jpg" | "/lampai/mirador_03.jpg" | "/lampai/mole_01.jpg" | "/lampai/mole_02.jpg" | "/lampai/mole_03.jpg" | "/lampai/mole_04.jpg" | "/lampai/mole_05.jpg" | "/lampai/mole_06.jpg" | "/lampai/oriente_01.jpg" | "/lampai/oriente_02.jpg" | "/lampai/portada_lampai.jpg" | "/lampai/teito_01.jpg" | "/lampai/teito_02.jpg" | "/lampai/verme_01.jpg" | "/manifest.json" | "/pedroso/portada_pedroso.jpg" | "/sura/portada_sura.jpg" | string & {};
	}
}