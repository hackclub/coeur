import { w as head, x as attr, z as attr_class, y as attr_style, F as ensure_array_like, G as stringify } from "../../../../chunks/index.js";
import { b as base } from "../../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { F as Footer } from "../../../../chunks/footer.js";
import { e as escape_html } from "../../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let Mobile = "";
    let slackID = "";
    let totalHearts = 0;
    let totalUserHearts = 0;
    let rawOrder = "";
    let cart = [];
    head("czqqvv", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Shop | Coeur</title>`);
      });
    });
    $$renderer2.push(`<div id="background" class="svelte-czqqvv"><img${attr("src", `${stringify(base)}/images/landing${stringify(Mobile)}/1.png`)} alt="Heart background" class="svelte-czqqvv"/></div> <div id="title" class="svelte-czqqvv"><h1${attr_class("svelte-czqqvv", void 0, { "mobile": Mobile == "Mobile" })}${attr_style("", { "margin-top": "50px" })}>PROCESS ORDER</h1> <form class="svelte-czqqvv"${attr_style("", { "margin-top": "30px" })}><input${attr("value", slackID)} required type="text" placeholder="Slack ID"/><br/> <input${attr("value", rawOrder)} required type="text" placeholder="Order"${attr_style("", { "margin-top": "15px" })}/><br/> <input type="submit" class="svelte-czqqvv"${attr_style("", { "margin-top": "15px" })}/></form></div> <div id="content" class="svelte-czqqvv"><h2 class="svelte-czqqvv">User</h2> <p class="svelte-czqqvv">${escape_html(slackID)}</p> `);
    if (cart.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<h3${attr_style("", { "font-family": "Montserrat" })}>${escape_html(totalHearts)} hearts are needed for this purchase. User has ${escape_html(totalUserHearts)}.</h3> `);
      {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<h3${attr_style("", { "font-family": "Montserrat" })}>Thir purchase is valid.</h3>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <p class="svelte-czqqvv">______________</p> <h2 class="svelte-czqqvv">Breakdown</h2> <!--[-->`);
    const each_array = ensure_array_like(cart);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let x = each_array[$$index];
      $$renderer2.push(`<div class="product svelte-czqqvv"><h3>${escape_html(x[0])}</h3> <p translate="no" class="svelte-czqqvv">${escape_html(x[1])} (x ${escape_html(x[2])})</p> <p class="svelte-czqqvv">${escape_html(x[3])}</p></div>`);
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img id="heidiEnvelope"${attr("src", `${stringify(base)}/images/donut.png`)} alt="Orpheus in a donut" style="width: 35%; height: auto; display: block; margin: 0 auto;"/>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
