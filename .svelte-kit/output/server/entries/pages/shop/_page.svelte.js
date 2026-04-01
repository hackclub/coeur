import { h as head, a as attr, b as attr_style, d as ensure_array_like, c as attr_class, s as stringify, e as escape_html } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "../../../chunks/url.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/root.js";
import { F as Footer } from "../../../chunks/footer.js";
let products = [
  {
    "name": "Plushie",
    "hearts": 2,
    "desc": "$10 USD for a heart themed plushie, or heart themed plushies! You can put this grant towards Amazon, Miniso, Shopee, Ikea, or EBay. This grant can be stacked.",
    "img": "plushie",
    "grant": true,
    "stocked": true,
    "id": 0
  },
  {
    "name": "Stationary",
    "hearts": 2,
    "desc": "$10 USD for heart themed stationary! You can put this grant towards Amazon, Miniso, Shopee, Ikea, or EBay. This grant can be stacked.",
    "img": "pens",
    "grant": true,
    "stocked": true,
    "id": 1
  },
  {
    "name": "Sticker Sheet",
    "hearts": 6,
    "desc": "More details soon...",
    "img": "soon",
    "grant": false,
    "stocked": false,
    "id": 2
  },
  {
    "name": "Stamp Shirt",
    "hearts": 15,
    "desc": "Orpheus and Heidi on a stamp! Note that this item will only be shipped out at the end of the program entirely; however, you can lock in your purchase at the current price displayed above before it fluctuates.",
    "img": "shirt",
    "grant": false,
    "stocked": true,
    "info": "This is a cardinal red shirt available in XS, S, M, L, and XL adult sizes",
    "id": 3
  },
  {
    "name": "Orpheus x Heidi Sweatshirt",
    "hearts": 17,
    "desc": "Featuring Orpheus and Heidi, the official Cœur sweatshirt with Hack Club branding! Note that this item will only be shipped out at the end of the program entirely; however, you can lock in your purchase at the current price displayed above before it fluctuates.",
    "img": "sweatshirt",
    "grant": false,
    "stocked": true,
    "info": "This is a white sweatshirt available in S, M, L, and XL adult sizes",
    "id": 4
  },
  {
    "name": "Sugar Rush Sweatshirt",
    "hearts": 17,
    "desc": "This is what happens when Orpheus is on a sugar rush. This item gets unlocked when our Slack channel gets to 200 channel members!",
    "img": "sweatshirt2",
    "grant": false,
    "stocked": false,
    "info": "This is a pale pink sweatshirt available in S, M, L, and XL adult sizes",
    "id": 5
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
    $$renderer2.push(`<div id="background" class="svelte-a8yt2h"><img${attr("src", `${stringify(base)}/images/landing${stringify(Mobile)}/1.png`)} alt="Heart background" class="svelte-a8yt2h"/></div> <div id="title" class="svelte-a8yt2h"><h1 class="svelte-a8yt2h"${attr_style("", { "margin-top": "50px", "font-size": "50px" })}>SHOP</h1> <p class="svelte-a8yt2h"${attr_style("", { "margin-bottom": "10px" })}>Welcome to the shop! Note that prices may fluctuate, as this is a work in progress.</p> <p class="svelte-a8yt2h"><button class="svelte-a8yt2h">Return Home</button></p></div> <div id="content" class="svelte-a8yt2h"><!--[-->`);
    const each_array = ensure_array_like(products);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let x = each_array[$$index];
      $$renderer2.push(`<div${attr_class("svelte-a8yt2h", void 0, { "purchased": cart[x.id] > 0 })}><img${attr("src", `${stringify(base)}/images/shop/${stringify(x.img)}.png`)}${attr("alt", x.name)} class="svelte-a8yt2h"/> <h2 class="svelte-a8yt2h">${escape_html(x.name)}</h2> <h3 translate="no" class="svelte-a8yt2h"><span class="material-symbols-outlined svelte-a8yt2h" translate="no">favorite</span> ${escape_html(x.hearts)} `);
      if (cart[x.id] > 0) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<i class="svelte-a8yt2h">(x ${escape_html(cart[x.id])})</i>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></h3> `);
      if (x.stocked) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<p class="svelte-a8yt2h"><button${attr_class("purchase svelte-a8yt2h", void 0, { "invisible": cart[x.id] == 0 })} translate="no">-</button><button class="purchase svelte-a8yt2h" translate="no">+</button></p>`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<p class="outOfStock svelte-a8yt2h"><i class="svelte-a8yt2h"><em class="svelte-a8yt2h">This item is not currently in stock</em></i></p>`);
      }
      $$renderer2.push(`<!--]--> <p class="svelte-a8yt2h">${escape_html(x.desc)}</p> `);
      if (x.grant) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<span class="hcb svelte-a8yt2h">HCB Grant</span>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (x.info != null) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="info svelte-a8yt2h"><p class="svelte-a8yt2h">${escape_html(x.info)}</p></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div id="checkOut"${attr_class("svelte-a8yt2h", void 0, { "active": checkOut, "mobile": Mobile == "Mobile" })}><p class="svelte-a8yt2h"><button class="svelte-a8yt2h"${attr_style("", { padding: "20px" })}><span translate="no" class="material-symbols-outlined svelte-a8yt2h">shopping_cart_checkout</span></button></p></div> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
