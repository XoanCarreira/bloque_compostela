import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/ssr.js";
const css$1 = {
  code: ".card.svelte-1y9u74y{width:300px;height:300px;padding:15px;border-radius:10px;display:flex;place-content:center;flex-wrap:wrap;box-shadow:5px 5px 5px black}.card.svelte-1y9u74y:hover{opacity:0.5}.titulo.svelte-1y9u74y{font-size:30px;text-align:center}",
  map: '{"version":3,"file":"Card.svelte","sources":["Card.svelte"],"sourcesContent":["<script>\\r\\n    export let tittle;\\r\\n\\r\\n<\/script>\\r\\n\\r\\n\\r\\n<!--Tarxeta/botón para identificar cada escola/sector-->\\r\\n<div class=\\"card\\">\\r\\n    <h3 class=\\"titulo\\">{tittle}</h3>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n    .card{\\r\\n        width: 300px;\\r\\n        height: 300px;\\r\\n        padding: 15px;\\r\\n        border-radius: 10px;\\r\\n        display: flex;\\r\\n        place-content: center;\\r\\n        flex-wrap: wrap;\\r\\n        box-shadow: 5px 5px 5px black;\\r\\n    }\\r\\n\\r\\n    .card:hover{\\r\\n        opacity: 0.5;\\r\\n    }\\r\\n\\r\\n    .titulo{\\r\\n        font-size: 30px;\\r\\n        text-align: center;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAYI,oBAAK,CACD,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MAAM,CACrB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAC5B,CAEA,oBAAK,MAAM,CACP,OAAO,CAAE,GACb,CAEA,sBAAO,CACH,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MAChB"}'
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tittle } = $$props;
  if ($$props.tittle === void 0 && $$bindings.tittle && tittle !== void 0)
    $$bindings.tittle(tittle);
  $$result.css.add(css$1);
  return ` <div class="card svelte-1y9u74y"><h3 class="titulo svelte-1y9u74y">${escape(tittle)}</h3> </div>`;
});
const css = {
  code: "main.svelte-11ew94n{background-color:rgb(219, 217, 217);display:flex;justify-content:center;flex-wrap:wrap;gap:30px;padding:15px}a.svelte-11ew94n{background-color:rgb(72, 82, 221);border-radius:10px;text-decoration:none;color:#ffffff}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import Card from \\"./components/Card.svelte\\";\\n<\/script>\\n\\n<main>\\n    <a href=\\"/eucaliptos\\"><Card tittle=\\"Eucaliptos-free\\"/></a>\\n    <a href=\\"/figueiras\\"><Card tittle=\\"Figueiras\\"/></a>\\n    <a href=\\"/lampai\\"><Card tittle=\\"Lampai\\"/></a>\\n    <a href=\\"/sura\\"><Card tittle=\\"Sura\\"/></a>\\n    <a href=\\"/vilas\\"><Card tittle=\\"Vilas\\"/></a>\\n\\n</main>\\n\\n<style>\\n    main{\\n        background-color: rgb(219, 217, 217);\\n        display: flex;\\n        justify-content: center;\\n        flex-wrap: wrap;\\n        gap: 30px;\\n        padding: 15px;\\n    }\\n\\n    a{\\n        background-color: rgb(72, 82, 221);\\n        border-radius: 10px;\\n        text-decoration: none;\\n        color: #ffffff;\\n    }\\n\\n</style>"],"names":[],"mappings":"AAcI,mBAAI,CACA,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,IAAI,CACf,GAAG,CAAE,IAAI,CACT,OAAO,CAAE,IACb,CAEA,gBAAC,CACG,gBAAgB,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAClC,aAAa,CAAE,IAAI,CACnB,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,OACX"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-11ew94n"><a href="/eucaliptos" class="svelte-11ew94n">${validate_component(Card, "Card").$$render($$result, { tittle: "Eucaliptos-free" }, {}, {})}</a> <a href="/figueiras" class="svelte-11ew94n">${validate_component(Card, "Card").$$render($$result, { tittle: "Figueiras" }, {}, {})}</a> <a href="/lampai" class="svelte-11ew94n">${validate_component(Card, "Card").$$render($$result, { tittle: "Lampai" }, {}, {})}</a> <a href="/sura" class="svelte-11ew94n">${validate_component(Card, "Card").$$render($$result, { tittle: "Sura" }, {}, {})}</a> <a href="/vilas" class="svelte-11ew94n">${validate_component(Card, "Card").$$render($$result, { tittle: "Vilas" }, {}, {})}</a> </main>`;
});
export {
  Page as default
};
