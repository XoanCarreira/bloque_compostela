import { c as create_ssr_component, f as add_attribute } from "./ssr.js";
const css = {
  code: "nav.svelte-1oo4iyt{display:flex;gap:15px 30px;justify-content:center}a.svelte-1oo4iyt{text-decoration:none;color:black;font-weight:800;font-size:1.2rem;width:100px;padding:10px;border:5px solid black;text-align:center;border-radius:5px}a.svelte-1oo4iyt:hover{background-color:greenyellow}",
  map: '{"version":3,"file":"Navbar.svelte","sources":["Navbar.svelte"],"sourcesContent":["<script>\\r\\n    export let info;\\r\\n    export let sectores;\\r\\n\\r\\n<\/script>\\r\\n\\r\\n<nav>\\r\\n    <a href=\\"/\\">Inicio</a>\\r\\n    <a href={info}>Info</a>\\r\\n    <a href={sectores}>Sectores</a>\\r\\n</nav>\\r\\n\\r\\n<style>\\r\\n    nav{\\r\\n        display: flex;\\r\\n        gap: 15px 30px;\\r\\n        justify-content: center;\\r\\n    }\\r\\n\\r\\n    a{\\r\\n        text-decoration: none;\\r\\n        color: black;\\r\\n        font-weight: 800;\\r\\n        font-size: 1.2rem;\\r\\n        width: 100px;\\r\\n        padding: 10px;\\r\\n        border: 5px solid black;\\r\\n        text-align: center;\\r\\n        border-radius: 5px;\\r\\n    }\\r\\n\\r\\n    a:hover{\\r\\n        background-color: greenyellow;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAaI,kBAAG,CACC,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,CAAC,IAAI,CACd,eAAe,CAAE,MACrB,CAEA,gBAAC,CACG,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,KAAK,CACZ,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,MAAM,CACjB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,UAAU,CAAE,MAAM,CAClB,aAAa,CAAE,GACnB,CAEA,gBAAC,MAAM,CACH,gBAAgB,CAAE,WACtB"}'
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { info } = $$props;
  let { sectores } = $$props;
  if ($$props.info === void 0 && $$bindings.info && info !== void 0)
    $$bindings.info(info);
  if ($$props.sectores === void 0 && $$bindings.sectores && sectores !== void 0)
    $$bindings.sectores(sectores);
  $$result.css.add(css);
  return `<nav class="svelte-1oo4iyt"><a href="/" class="svelte-1oo4iyt" data-svelte-h="svelte-1vkqsk0">Inicio</a> <a${add_attribute("href", info, 0)} class="svelte-1oo4iyt">Info</a> <a${add_attribute("href", sectores, 0)} class="svelte-1oo4iyt">Sectores</a> </nav>`;
});
export {
  Navbar as N
};
