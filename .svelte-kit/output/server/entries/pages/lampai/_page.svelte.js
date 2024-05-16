import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar } from "../../../chunks/Navbar.js";
const css = {
  code: "h2.svelte-11jky53{font-size:35px;font-weight:800;text-align:center;margin:20px 0}.descripcion.svelte-11jky53{max-width:90%;margin:0 auto;margin-top:20px}p.svelte-11jky53{margin-bottom:10px;font-size:1.1rem}.mapa.svelte-11jky53{display:flex;justify-content:center;max-width:90%}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n\\timport Navbar from \'../components/Navbar.svelte\';\\r\\n<\/script>\\r\\n\\r\\n<main>\\r\\n\\t<h2>Lampai</h2>\\r\\n\\t<Navbar info={`./lampai`} sectores={`./lampai/sectores`} />\\r\\n\\t<div class=\\"descripcion\\">\\r\\n\\t\\t<p>\\r\\n\\t\\t\\tZona con un número considerable de liñas abertas, ainda que na maioría dos casos os bloques\\r\\n\\t\\t\\testán dispersos. En xeral a calidade da pedra é excepcional, con un gran fino e compacto.\\r\\n\\t\\t\\tPodemos atopar placas, desplomes, adherencias e incluso algún teito.\\r\\n\\t\\t</p>\\r\\n\\t\\t<p>\\r\\n\\t\\t\\tA orientación é maiormente sur e oeste, aínda que hai sectores como Mangui ou Fortaleza nos\\r\\n\\t\\t\\tque podemos atopar sombra todo o día.\\r\\n\\t\\t</p>\\r\\n\\t\\t<p>As aproximacións van dende 1 minuto, caso do Mirador, ata 25 minutos no caso do Mangui.</p>\\r\\n\\t\\t<p>\\r\\n\\t\\t\\tEn canto o grado hai bloques para todos os públicos, incluso de máxima dificultade como é o\\r\\n\\t\\t\\tcaso do Gaia.\\r\\n\\t\\t</p>\\r\\n\\t</div>\\r\\n\\t<div class=\\"mapa\\">\\r\\n\\t\\t<img src=\\"mapa_lampai.avif\\" alt=\\"Mapa de sectores lampai\\" />\\r\\n\\t</div>\\r\\n</main>\\r\\n\\r\\n<style>\\r\\n\\th2 {\\r\\n\\t\\tfont-size: 35px;\\r\\n\\t\\tfont-weight: 800;\\r\\n\\t\\ttext-align: center;\\r\\n\\t\\tmargin: 20px 0;\\r\\n\\t}\\r\\n\\r\\n\\t.descripcion {\\r\\n\\t\\tmax-width: 90%;\\r\\n\\t\\tmargin: 0 auto;\\r\\n\\t\\tmargin-top: 20px;\\r\\n\\t}\\r\\n\\r\\n\\tp {\\r\\n\\t\\tmargin-bottom: 10px;\\r\\n\\t\\tfont-size: 1.1rem;\\r\\n\\t}\\r\\n\\r\\n\\t.mapa {\\r\\n\\t\\tdisplay: flex;\\r\\n        justify-content: center;\\r\\n\\t\\tmax-width: 90%;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA6BC,iBAAG,CACF,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,IAAI,CAAC,CACd,CAEA,2BAAa,CACZ,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,IACb,CAEA,gBAAE,CACD,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,MACZ,CAEA,oBAAM,CACL,OAAO,CAAE,IAAI,CACP,eAAe,CAAE,MAAM,CAC7B,SAAS,CAAE,GACZ"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main><h2 class="svelte-11jky53" data-svelte-h="svelte-14b0hii">Lampai</h2> ${validate_component(Navbar, "Navbar").$$render(
    $$result,
    {
      info: `./lampai`,
      sectores: `./lampai/sectores`
    },
    {},
    {}
  )} <div class="descripcion svelte-11jky53" data-svelte-h="svelte-cvn1b1"><p class="svelte-11jky53">Zona con un número considerable de liñas abertas, ainda que na maioría dos casos os bloques
			están dispersos. En xeral a calidade da pedra é excepcional, con un gran fino e compacto.
			Podemos atopar placas, desplomes, adherencias e incluso algún teito.</p> <p class="svelte-11jky53">A orientación é maiormente sur e oeste, aínda que hai sectores como Mangui ou Fortaleza nos
			que podemos atopar sombra todo o día.</p> <p class="svelte-11jky53">As aproximacións van dende 1 minuto, caso do Mirador, ata 25 minutos no caso do Mangui.</p> <p class="svelte-11jky53">En canto o grado hai bloques para todos os públicos, incluso de máxima dificultade como é o
			caso do Gaia.</p></div> <div class="mapa svelte-11jky53" data-svelte-h="svelte-bbl8cc"><img src="mapa_lampai.avif" alt="Mapa de sectores lampai"></div> </main>`;
});
export {
  Page as default
};
