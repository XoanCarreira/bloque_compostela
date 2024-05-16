import { c as create_ssr_component, v as validate_component, d as each, e as escape, f as add_attribute } from "../../../../chunks/ssr.js";
import { N as Navbar } from "../../../../chunks/Navbar.js";
const sectores = [
  {
    sector: "Campo",
    descripcion: "Gran concentración de bloques con variedade de grados",
    aproximacion: "5 minutos",
    orientacion: "Todas",
    src: ["/congrio.jpg"],
    ubicacion: "https://maps.app.goo.gl/78zD2reLPzufME6h7",
    cordenadas: `42°46'49.9"N 8°37'34.0"W`
  },
  {
    sector: "Congrio",
    descripcion: "Numerosas liñas en bloques de non mais de 3,5 metros de altura.",
    aproximacion: "20 minutos",
    orientacion: "Sur",
    src: ["/congrio_01.jpg", "/congrio_02.jpg"],
    ubicacion: "https://maps.app.goo.gl/ZKWaUhAN2mdiXkuc7",
    cordenadas: `42°45'56.9"N 8°37'38.5"W`
  },
  {
    sector: "Gaia",
    descripcion: "Bloque enorme con liñas en xeral duras. Mais posibilades",
    aproximacion: "10 minutos",
    orientacion: "Sur",
    src: ["/congrio.jpg"],
    ubicacion: "https://maps.app.goo.gl/qPxyxRD6aHLuDyvf6",
    cordenadas: `42°47'10.1"N 8°38'04.6"W`
  },
  {
    sector: "Ladeira",
    descripcion: "Varios bloques abertos con liñas en xeral de grado medio-baixo. Mais posibilidades.",
    aproximacion: "10 minutos",
    orientacion: "Oeste",
    src: ["/Ladeira_01.jpg"],
    ubicacion: "https://maps.app.goo.gl/yU2Fwu9MC62vx1h4A",
    cordenadas: `42°47'31.6"N 8°38'02.6"W`
  },
  {
    sector: "Mangui",
    descripcion: "Numerosas liñas en bloques de non mais de 3,5 metros de altura.",
    aproximacion: "25 minutos",
    orientacion: "Todas",
    src: ["/congrio.jpg"],
    ubicacion: "https://maps.app.goo.gl/4aAogHw9658esDeh8",
    cordenadas: `42°45'47.0"N 8°37'46.5"W`
  },
  {
    sector: "Mirador",
    descripcion: "Bloque xunto o aparcadoiro e outro baixando polo camiño direción oeste. Mais posibilidades",
    aproximacion: "1 minuto",
    orientacion: "Todas",
    src: ["/congrio.jpg"],
    ubicacion: "https://maps.app.goo.gl/bL9YWKLgP2xE2zE3A",
    cordenadas: `42°47'09.9"N 8°37'23.3"W`
  },
  {
    sector: "Mole",
    descripcion: "Existe unha primeira zona con algunha liña aberta e mais posibilades. A uns 30 metros está a zona principal.",
    aproximacion: "10 minutos",
    orientacion: "Oeste",
    src: [
      "/Mole_01.jpg",
      "/Mole_02.jpg"
    ],
    ubicacion: "https://maps.app.goo.gl/PoXnF9rB7HdU5Mrt9",
    cordenadas: `42°47'18.9"N 8°37'57.3"W`
  },
  {
    sector: "Oriente",
    descripcion: "Bloque principal con varias liñas de calidade. Mais posibilidades",
    aproximacion: "5 minutos",
    orientacion: "Sur",
    src: ["/congrio.jpg"],
    ubicacion: "https://maps.app.goo.gl/TtpgYd3LT4B45Jpy9",
    cordenadas: `42°46'58.3"N 8°37'34.1"W`
  },
  {
    sector: "Teito",
    descripcion: "Bloque con varias liñas de desplome.",
    aproximacion: "10 minutos",
    orientacion: "Oeste",
    src: ["/congrio.jpg"],
    ubicacion: "https://maps.app.goo.gl/wdsyyAbGuz5Ymx6GA",
    cordenadas: `42°47'33.2"N 8°37'58.7"W`
  },
  {
    sector: "Verme",
    descripcion: "Bloque con un par de liñas de grado medio-baixo. Pode sair algunha mais.",
    aproximacion: "5 minutos",
    orientacion: "Noroeste",
    src: ["/Verme_01.jpg"],
    ubicacion: "https://maps.app.goo.gl/SwwFZN2JhyLKU8LQA",
    cordenadas: `42°47'24.1"N 8°37'58.6"W`
  }
];
const css = {
  code: ".container.svelte-1rlmesc{padding:0 20px;display:flex;flex-direction:column;gap:30px}h2.svelte-1rlmesc{font-size:35px;font-weight:800;text-align:center}.selector.svelte-1rlmesc{display:flex;gap:15px;justify-content:center;flex-wrap:wrap}button.svelte-1rlmesc{padding:5px 10px}.grid.svelte-1rlmesc{margin:0 auto;max-width:400px;min-height:500px}img.svelte-1rlmesc{max-width:350px;margin:0 auto}h4.svelte-1rlmesc{text-align:center;font-size:1.5rem}a.svelte-1rlmesc{color:#000;text-decoration:none}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n\\timport Navbar from \'../../components/Navbar.svelte\';\\r\\n\\timport sectores from \'./sectores\';\\r\\n\\r\\n\\tlet sectorSelect = sectores[0].sector;\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"container\\">\\r\\n\\t<h2>Lampai</h2>\\r\\n\\t<Navbar info={`/lampai`} sectores={`/lampai/sectores`} />\\r\\n\\t<div class=\\"selector\\">\\r\\n\\t\\t{#each sectores as sector}\\r\\n\\t\\t\\t<button on:click={() => (sectorSelect = sector.sector)}>{sector.sector}</button>\\r\\n\\t\\t{/each}\\r\\n\\t</div>\\r\\n\\r\\n\\t<div class=\\"grid\\">\\r\\n\\t\\t{#each sectores as sector}\\r\\n\\t\\t\\t{#if sector.sector === sectorSelect}\\r\\n\\t\\t\\t\\t<div class=\\"sector__box\\">\\r\\n\\t\\t\\t\\t\\t<h4>{sector.sector}</h4>\\r\\n\\t\\t\\t\\t\\t<p>{sector.descripcion}</p>\\r\\n\\t\\t\\t\\t\\t<p><strong>Orientación:</strong>{sector.orientacion}</p>\\r\\n\\t\\t\\t\\t\\t<p><strong>Aproximación:</strong>{sector.aproximacion}</p>\\r\\n\\t\\t\\t\\t\\t<a target=\\"_blank\\" href={sector.ubicacion}>{sector.cordenadas}</a>\\r\\n                    {#each sector.src as imaxe }\\r\\n                        <img src={imaxe} alt=\\"Sector {sector.sector}\\">\\r\\n                    {/each}\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t{/if}\\r\\n\\t\\t{/each}\\r\\n\\t</div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t.container {\\r\\n\\t\\tpadding: 0 20px;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tgap: 30px;\\r\\n\\t}\\r\\n\\r\\n\\th2 {\\r\\n\\t\\tfont-size: 35px;\\r\\n\\t\\tfont-weight: 800;\\r\\n\\t\\ttext-align: center;\\r\\n\\t}\\r\\n\\r\\n\\t.selector {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tgap: 15px;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\tflex-wrap: wrap;\\r\\n\\t}\\r\\n\\r\\n\\tbutton {\\r\\n\\t\\tpadding: 5px 10px;\\r\\n\\t}\\r\\n\\r\\n\\t.grid {\\r\\n\\t\\tmargin: 0 auto;\\r\\n\\t\\tmax-width: 400px;\\r\\n\\t\\tmin-height: 500px;\\r\\n\\t}\\r\\n\\r\\n\\timg {\\r\\n\\t\\tmax-width: 350px;\\r\\n\\t\\tmargin: 0 auto;\\r\\n\\t}\\r\\n\\r\\n\\th4 {\\r\\n\\t\\ttext-align: center;\\r\\n\\t\\tfont-size: 1.5rem;\\r\\n\\t}\\r\\n\\r\\n    a{\\r\\n        color:#000;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAmCC,yBAAW,CACV,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IACN,CAEA,iBAAG,CACF,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MACb,CAEA,wBAAU,CACT,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,CACT,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,IACZ,CAEA,qBAAO,CACN,OAAO,CAAE,GAAG,CAAC,IACd,CAEA,oBAAM,CACL,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,KACb,CAEA,kBAAI,CACH,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IACX,CAEA,iBAAG,CACF,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,MACZ,CAEG,gBAAC,CACG,MAAM,IAAI,CACV,eAAe,CAAE,IACrB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sectorSelect = sectores[0].sector;
  $$result.css.add(css);
  return `<div class="container svelte-1rlmesc"><h2 class="svelte-1rlmesc" data-svelte-h="svelte-14b0hii">Lampai</h2> ${validate_component(Navbar, "Navbar").$$render(
    $$result,
    {
      info: `/lampai`,
      sectores: `/lampai/sectores`
    },
    {},
    {}
  )} <div class="selector svelte-1rlmesc">${each(sectores, (sector) => {
    return `<button class="svelte-1rlmesc">${escape(sector.sector)}</button>`;
  })}</div> <div class="grid svelte-1rlmesc">${each(sectores, (sector) => {
    return `${sector.sector === sectorSelect ? `<div class="sector__box"><h4 class="svelte-1rlmesc">${escape(sector.sector)}</h4> <p>${escape(sector.descripcion)}</p> <p><strong data-svelte-h="svelte-1fygo8p">Orientación:</strong>${escape(sector.orientacion)}</p> <p><strong data-svelte-h="svelte-1g1n9te">Aproximación:</strong>${escape(sector.aproximacion)}</p> <a target="_blank"${add_attribute("href", sector.ubicacion, 0)} class="svelte-1rlmesc">${escape(sector.cordenadas)}</a> ${each(sector.src, (imaxe) => {
      return `<img${add_attribute("src", imaxe, 0)} alt="${"Sector " + escape(sector.sector, true)}" class="svelte-1rlmesc">`;
    })} </div>` : ``}`;
  })}</div> </div>`;
});
export {
  Page as default
};
