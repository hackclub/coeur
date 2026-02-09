import { w as head, x as attr, y as attr_style, G as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { F as Footer } from "../../../chunks/footer.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let scroll = 0;
    let mobile = "";
    head("8sduu1", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Requirements | Coeur</title>`);
      });
      $$renderer3.push(`<link rel="preload"${attr("href", `${stringify(base)}/images/landing/1.png`)} as="image" class="svelte-8sduu1"/> <link rel="preload"${attr("href", `${stringify(base)}/images/landingMobile/1.png`)} as="image" class="svelte-8sduu1"/> <link rel="preload"${attr("href", `${stringify(base)}/images/wave5.png`)} as="image" class="svelte-8sduu1"/> <link rel="preload"${attr("href", `${stringify(base)}/images/heidiEnvelope.png`)} as="image" class="svelte-8sduu1"/>`);
    });
    $$renderer2.push(`<div id="header" class="svelte-8sduu1"><img${attr("src", `${stringify(base)}/images/landing${stringify(mobile)}/1.png`)} alt="Heart background" class="svelte-8sduu1"/> <div id="parallax" class="svelte-8sduu1"><div id="parallaxContent" class="svelte-8sduu1"${attr_style("", { transform: `translateY(${stringify(scroll * 0.7)}px)` })}><h1 class="svelte-8sduu1">REQUIREMENTS</h1> <p class="svelte-8sduu1"${attr_style("", { "margin-bottom": "40px" })}>These must be completed for all submissions to <span translate="no" class="svelte-8sduu1">Cœur</span></p> `);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img id="heidiEnvelope"${attr("src", `${stringify(base)}/images/heidiEnvelope.png`)} alt="Heidi in an envelope" style="width: 35%; height: auto; display: block; margin: 0 auto;" class="svelte-8sduu1"/>`);
    }
    $$renderer2.push(`<!--]--></div></div></div> <div id="content" class="svelte-8sduu1"><img${attr("src", `${stringify(base)}/images/wave5.png`)} alt="Wave graphic" class="svelte-8sduu1"${attr_style("", { width: "100%", transform: "translateY(15px)" })}/> <div id="container" class="svelte-8sduu1"><button class="svelte-8sduu1">Return Home</button> <div class="svelte-8sduu1"><h3 class="svelte-8sduu1">Minimum 6 Hours</h3> <p class="svelte-8sduu1">You must work on each submission for a minimum of 6 hours before submitting. All hours must be tracked on <a href="https://hackatime.hackclub.com" class="svelte-8sduu1">Hackatime</a></p></div> <div class="svelte-8sduu1"><h3 class="svelte-8sduu1">Theme</h3> <p class="svelte-8sduu1">All projects must be e-cards, made about either someone you love <i class="svelte-8sduu1">(find cool)</i> or about something that you love.</p></div> <div class="svelte-8sduu1"><h3 class="svelte-8sduu1">Deployed on the Web</h3> <p class="svelte-8sduu1">All submissions need to be be deployed on the web and should remain on the web. You can choose between hosting your site statically or on a server; however, server crashes will not warrant accomodation.</p></div> <div class="svelte-8sduu1"><h3 class="svelte-8sduu1">Usage of Artificial Intelligence</h3> <p class="svelte-8sduu1">No submission should ever be written by AI. Usage of AI is permitted for reference and must be written into your project by you entirely. AI reference code cannot make up more than 30% of your submission.</p></div> <div class="svelte-8sduu1"><h3 class="svelte-8sduu1">Accessibility</h3> <p class="svelte-8sduu1">All submissions should fully work on mobile and desktop/laptop devices. This can be through interaction with the GUI.</p></div> <div class="svelte-8sduu1"><h3 class="svelte-8sduu1">Including a README</h3> <p class="svelte-8sduu1">The repository that contains your code must include a <i class="svelte-8sduu1">README.md</i>. Your README should include a description of your e-card and who/what it's for/about, what framework or languages you used to make it, areas in which you pushed yourself to make a new feature, and a list of all sugar rushes that apply to your project (alongside an explanation for why you should get that sugar rush). No sugar rushes will be applied to projects that do not have them listed on the README.</p></div></div></div> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
