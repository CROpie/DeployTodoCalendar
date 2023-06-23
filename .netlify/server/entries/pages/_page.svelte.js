import { c as create_ssr_component, b as add_attribute } from "../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".login-box.svelte-1rvim6n{flex:auto;margin:5rem auto;width:50%;border:3px solid lightblue;padding:2rem;border-radius:0.5rem}form.svelte-1rvim6n{display:flex;flex-direction:column;gap:0.5rem}input.svelte-1rvim6n,button.svelte-1rvim6n{text-shadow:2px 2px 2px black;font-size:1.5rem;color:white;background-color:transparent;padding:0.5rem;border:2px solid white;border-radius:0.5rem;padding-left:1rem}input.svelte-1rvim6n:hover,button.svelte-1rvim6n:hover{background-color:rgba(138, 43, 226, 0.7)}footer.svelte-1rvim6n{text-align:center;height:1rem;color:white}a.svelte-1rvim6n{color:white;font-size:0.75rem}.toggle.svelte-1rvim6n{margin-top:2rem}.toggleContainer.svelte-1rvim6n{display:flex;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let email;
  let password;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `

<div class="Login"><div class="login-box svelte-1rvim6n">${`<form class="svelte-1rvim6n"><input name="email" class="svelte-1rvim6n"${add_attribute("value", email, 0)}>
				<input type="password" name="password" class="svelte-1rvim6n"${add_attribute("value", password, 0)}>
				<button class="svelte-1rvim6n">Sign in</button></form>
			<div class="toggleContainer svelte-1rvim6n"><button class="outline secondary toggle svelte-1rvim6n">Need to sign up?</button></div>`}</div>

	<footer class="svelte-1rvim6n"><a href="http://www.freepik.com" class="svelte-1rvim6n">Background image designed by Freepik</a></footer>
</div>`;
});
export {
  Page as default
};
