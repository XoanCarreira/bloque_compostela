import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const css$1 = {
  code: "header.svelte-4raq4e{text-align:center;font-size:30px;font-weight:800;min-height:80px}",
  map: '{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<header>\\r\\n    <h1>Boulder Compostela</h1>\\r\\n</header>\\r\\n\\r\\n<style>\\r\\n    header{\\r\\n        text-align: center;\\r\\n        font-size: 30px;\\r\\n        font-weight: 800;\\r\\n        min-height: 80px;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAKI,oBAAM,CACF,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,IAChB"}'
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="svelte-4raq4e" data-svelte-h="svelte-1q3qcal"><h1>Boulder Compostela</h1> </header>`;
});
const css = {
  code: "*{margin:0;padding:0;box-sizing:border-box}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\r\\n    import Header from \\"./components/Header.svelte\\";\\r\\n<\/script>\\r\\n\\r\\n<Header/>\\r\\n<slot/>\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<style>\\r\\n    :global(*){\\r\\n        margin: 0;\\r\\n        padding: 0;\\r\\n        box-sizing: border-box;\\r\\n    }\\r\\n\\r\\n</style>"],"names":[],"mappings":"AAWY,CAAE,CACN,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,UAChB"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
