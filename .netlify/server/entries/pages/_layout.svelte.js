import { c as create_ssr_component, b as add_attribute } from "../../chunks/index2.js";
const app = "";
const beerBear = "/_app/immutable/assets/BearbeerCrop.c0fee640.png";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-1vbboch{margin:0;padding:0;box-sizing:border-box}.container.svelte-1vbboch{font-family:Arial}.header.svelte-1vbboch{height:4rem;display:flex;justify-content:space-between;align-items:center;border:2px solid white;font-size:1.5rem}.padding.svelte-1vbboch{margin-left:2rem}img.svelte-1vbboch{height:4rem}h2.svelte-1vbboch{color:white;text-align:center;text-shadow:2px 2px 2px black}h3.svelte-1vbboch{visibility:hidden;margin-right:2rem}button.svelte-1vbboch{font-family:Arial;border:2px solid lightblue;background-color:transparent;color:white;border-radius:0.5rem;outline:none;padding:1rem;margin-right:2rem}button.svelte-1vbboch:hover{background-color:white;color:black}button.svelte-1vbboch:active{background-color:black;color:white}.main.svelte-1vbboch{height:100%}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log("/ +layout.svelte");
  let { data } = $$props;
  let { supabase, session } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ({ supabase, session } = data);
  {
    console.log(session);
  }
  return `<div class="container svelte-1vbboch"><div class="header svelte-1vbboch"><div class="padding svelte-1vbboch"><img${add_attribute("src", beerBear, 0)} alt="Beer Bear" class="svelte-1vbboch"></div>

		${session ? `<h2 class="svelte-1vbboch">Welcome!</h2>
			<button type="button" class="svelte-1vbboch">Log Out</button>` : `<h2 class="svelte-1vbboch">Please log in to continue.</h2>
			<h3 class="padding2 svelte-1vbboch">.</h3>`}</div>

	<div class="main svelte-1vbboch">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
export {
  Layout as default
};
