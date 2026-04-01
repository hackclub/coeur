import { b as attr_style, a as attr, s as stringify } from "./index.js";
import { b as base } from "./server.js";
import "./url.js";
import "@sveltejs/kit/internal/server";
import "./root.js";
function Footer($$renderer) {
  $$renderer.push(`<div class="svelte-1le3tlg"><button>Hack Club</button> <p>Made with love; by teens, for teens</p> <span class="material-symbols-outlined" translate="no"${attr_style("", { color: "white" })}>favorite</span> <nav><a${attr("href", `${stringify(base)}/`)}>Home</a> | <a${attr("href", `${stringify(base)}/privacy`)}>Privacy Policy</a></nav></div>`);
}
export {
  Footer as F
};
