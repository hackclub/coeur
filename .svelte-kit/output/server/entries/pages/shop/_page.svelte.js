import { w as head, x as attr, y as attr_style, F as ensure_array_like, z as attr_class, G as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { F as Footer } from "../../../chunks/footer.js";
import { e as escape_html } from "../../../chunks/context.js";
let products = [
  {
    "name": "Plushie",
    "hearts": 2,
    "desc": "$10 USD for a heart themed plushie, or heart themed plushies! You can put this grant towards Amazon, Miniso, Shopee, Ikea, or EBay. This grant can be stacked.",
    "img": "plushie",
    "grant": true,
    "id": 0
  },
  {
    "name": "Stationary",
    "hearts": 2,
    "desc": "$10 USD for heart themed stationary! You can put this grant towards Amazon, Miniso, Shopee, Ikea, or EBay. This grant can be stacked.",
    "img": "pens",
    "grant": true,
    "id": 1
  },
  {
    "name": "Lamp",
    "hearts": 5,
    "desc": "$25 USD for heart themed stationary! You can put this grant towards Amazon, Miniso, Shopee, Ikea, or EBay. This grant can be stacked.",
    "img": "lamp",
    "grant": true,
    "id": 2
  },
  {
    "name": "Orpheus x Heidi Sweatshirt",
    "hearts": 20,
    "desc": "Featuring Orpheus and Heidi, the official Cœur sweatshirt with Hack Club branding!",
    "img": "sweatshirt",
    "grant": false,
    "id": 3
  }
];
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let cart = [];
    for (let i = 0; i < products.length; i++) {
      cart.push(0);
    }
    let checkOut = false;
    let Mobile = "";
    head("a8yt2h", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Shop | Coeur</title>`);
      });
    });
    $$renderer2.push(`<div id="background" class="svelte-a8yt2h"><img${attr("src", `${stringify(base)}/images/landing${stringify(Mobile)}/1.png`)} alt="Heart background" class="svelte-a8yt2h"/></div> <div id="title" class="svelte-a8yt2h"><h1 class="svelte-a8yt2h"${attr_style("", { "margin-top": "50px", "font-size": "50px" })}>SHOP</h1> <p class="svelte-a8yt2h"${attr_style("", { "margin-bottom": "10px" })}>The shop is under construction and is subject to changes, along with the catalog of items and the price of each item. Items cannot currently be purchased.</p> <p class="svelte-a8yt2h"><button>Return Home</button></p></div> <div id="content" class="svelte-a8yt2h"><!--[-->`);
    const each_array = ensure_array_like(products);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let x = each_array[$$index];
      $$renderer2.push(`<div${attr_class("svelte-a8yt2h", void 0, { "purchased": cart[x.id] > 0 })}><img${attr("src", `${stringify(base)}/images/shop/${stringify(x.img)}.png`)} alt="Boy holding plushie" class="svelte-a8yt2h"/> <h2 class="svelte-a8yt2h">${escape_html(x.name)}</h2> <h3 translate="no" class="svelte-a8yt2h"><span class="material-symbols-outlined svelte-a8yt2h" translate="no">favorite</span> ${escape_html(x.hearts)} `);
      if (cart[x.id] > 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<i>(x ${escape_html(cart[x.id])})</i>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></h3> <p class="svelte-a8yt2h"><button${attr_class("purchase svelte-a8yt2h", void 0, { "invisible": cart[x.id] == 0 })} translate="no">-</button><button class="purchase svelte-a8yt2h" translate="no">+</button></p> <p class="svelte-a8yt2h">${escape_html(x.desc)}</p> `);
      if (x.grant) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="hcb svelte-a8yt2h">HCB Grant</span>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div id="checkOut"${attr_class("svelte-a8yt2h", void 0, { "active": checkOut })}><p class="svelte-a8yt2h"><button class="svelte-a8yt2h">Checkout</button></p></div> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
