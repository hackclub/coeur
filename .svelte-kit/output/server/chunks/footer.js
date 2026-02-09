import { y as attr_style, x as attr, G as stringify } from "./index.js";
import { b as base } from "./server.js";
import "@sveltejs/kit/internal/server";
function Footer($$renderer) {
  $$renderer.push(`<div class="svelte-1le3tlg"><button>Hack Club</button> <p>Made with love; by teens, for teens</p> <span class="material-symbols-outlined" translate="no"${attr_style("", { color: "white" })}>favorite</span> <nav><a${attr("href", `${stringify(base)}/`)}>Home</a> | <a${attr("href", `${stringify(base)}/privacy`)}>Privacy Policy</a></nav></div>`);
}
export {
  Footer as F
};
