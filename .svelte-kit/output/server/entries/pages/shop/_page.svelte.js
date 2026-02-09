import { w as head, x as attr, y as attr_style, G as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { F as Footer } from "../../../chunks/footer.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let Mobile = "";
    head("a8yt2h", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Shop | Coeur</title>`);
      });
    });
    $$renderer2.push(`<div id="background" class="svelte-a8yt2h"><img${attr("src", `${stringify(base)}/images/landing${stringify(Mobile)}/1.png`)} alt="Heart background" class="svelte-a8yt2h"/></div> <div id="title" class="svelte-a8yt2h"><h1 class="svelte-a8yt2h"${attr_style("", { "margin-top": "50px", "font-size": "50px" })}>SHOP</h1> <p class="svelte-a8yt2h"${attr_style("", { "margin-bottom": "10px" })}>The shop is under construction and is subject to changes, along with the catalog of items and the price of each item. Items cannot currently be purchased.</p> <p class="svelte-a8yt2h"><button>Return Home</button></p></div> <div id="content" class="svelte-a8yt2h"><div class="svelte-a8yt2h"><img${attr("src", `${stringify(base)}/images/shop/plushie.png`)} alt="Boy holding plushie" class="svelte-a8yt2h"/> <h2 class="svelte-a8yt2h">Heart Plushie</h2> <h3 class="svelte-a8yt2h"><span class="material-symbols-outlined svelte-a8yt2h">favorite</span> 2</h3> <p class="svelte-a8yt2h">$10 USD for a heart themed plushie, or heart themed plushies! You can put this grant towards Amazon, Miniso, Shopee, Ikea, or EBay.</p> <span class="hcb svelte-a8yt2h">HCB Grant</span></div> <div class="svelte-a8yt2h"><img${attr("src", `${stringify(base)}/images/shop/pens.png`)} alt="Pens" class="svelte-a8yt2h"/> <h2 class="svelte-a8yt2h">Heart Themed Stationary</h2> <h3 class="svelte-a8yt2h"><span class="material-symbols-outlined svelte-a8yt2h">favorite</span> 2</h3> <p class="svelte-a8yt2h">$10 USD for heart themed stationary! You can put this grant towards Amazon, Miniso, Shopee, Ikea, or EBay.</p> <span class="hcb svelte-a8yt2h">HCB Grant</span></div> <div class="svelte-a8yt2h"><img${attr("src", `${stringify(base)}/images/shop/sugarRush.png`)} alt="Sugar rush sticker" class="svelte-a8yt2h"/> <h2 class="svelte-a8yt2h">Sugar Rush Orpheus Sticker</h2> <h3 class="svelte-a8yt2h"><span class="material-symbols-outlined svelte-a8yt2h">favorite</span> 3</h3> <p class="svelte-a8yt2h">Don't try consuming this much sugar at home... you can get the sticker, though.</p></div> <div class="svelte-a8yt2h"><img${attr("src", `${stringify(base)}/images/shop/lamp.png`)} alt="Lamp" class="svelte-a8yt2h"/> <h2 class="svelte-a8yt2h">Heart Lamp</h2> <h3 class="svelte-a8yt2h"><span class="material-symbols-outlined svelte-a8yt2h">favorite</span> 5</h3> <p class="svelte-a8yt2h">$20 USD for a heart themed lamp, or heart themed lamps! You can put this grant towards Amazon, Miniso, Shopee, Ikea, or EBay.</p> <span class="hcb svelte-a8yt2h">HCB Grant</span></div> <div class="svelte-a8yt2h"><img${attr("src", `${stringify(base)}/images/shop/sweatshirt.png`)} alt="Sweatshirt" class="svelte-a8yt2h"/> <h2 class="svelte-a8yt2h">Sweatshirt</h2> <h3 class="svelte-a8yt2h"><span class="material-symbols-outlined svelte-a8yt2h">favorite</span> 20</h3> <p class="svelte-a8yt2h">Featuring Orpheus and Heidi, the official <span>Cœur</span> sweatshirt with Hack Club branding!</p></div></div> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
