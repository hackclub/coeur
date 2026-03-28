import { w as head, x as attr, z as attr_class, y as attr_style, F as ensure_array_like, G as stringify } from "../../../../chunks/index.js";
import { b as base } from "../../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { F as Footer } from "../../../../chunks/footer.js";
import { e as escape_html } from "../../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let Mobile = "";
    let cart = [];
    let total = "Loading...";
    let slackID = "";
    head("1kl2wff", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Shop | Coeur</title>`);
      });
    });
    $$renderer2.push(`<div id="background" class="svelte-1kl2wff"><img${attr("src", `${stringify(base)}/images/landing${stringify(Mobile)}/1.png`)} alt="Heart background" class="svelte-1kl2wff"/></div> <div id="title" class="svelte-1kl2wff"><h1${attr_class("svelte-1kl2wff", void 0, { "mobile": Mobile == "Mobile" })}${attr_style("", { "margin-top": "50px" })}>CONFIRMATION</h1> <p class="svelte-1kl2wff"${attr_style("", { "margin-bottom": "10px" })}>Please review your order and provide your Slack ID in order to proceed.</p> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <form><p class="svelte-1kl2wff"><input${attr("value", slackID)} type="text" min="11" max="11" placeholder="Slack ID"${attr_style("", { "border-radius": "15px", padding: "10px" })}/></p></form></div> <div id="content" class="svelte-1kl2wff"><!--[-->`);
    const each_array = ensure_array_like(cart);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let x = each_array[$$index];
      $$renderer2.push(`<h3>${escape_html(x[0])}</h3> <p translate="no" class="svelte-1kl2wff">${escape_html(x[1])} (x ${escape_html(x[2])})</p>`);
    }
    $$renderer2.push(`<!--]--> <p class="svelte-1kl2wff">______________</p> <h1 class="svelte-1kl2wff">${escape_html(total)} total hearts</h1> `);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img id="heidiEnvelope"${attr("src", `${stringify(base)}/images/heidiEnvelope.png`)} alt="Heidi in an envelope" style="width: 35%; height: auto; display: block; margin: 0 auto;"/>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
