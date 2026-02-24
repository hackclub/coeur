import { w as head, x as attr, y as attr_style, z as attr_class, F as ensure_array_like, G as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { F as Footer } from "../../chunks/footer.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let mobile = "";
    let charY = 0;
    let mobileFactor = 1;
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Coeur</title>`);
      });
      $$renderer3.push(`<!--[-->`);
      const each_array = ensure_array_like([1, 2, 3, 4, 5]);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let num = each_array[$$index];
        $$renderer3.push(`<link rel="preload" as="image"${attr("href", `${stringify(base)}/images/landing/${stringify(num)}.png`)} class="svelte-1uha8ag"/> <link rel="preload" as="image"${attr("href", `${stringify(base)}/images/landingMobile/${stringify(num)}.png`)} class="svelte-1uha8ag"/>`);
      }
      $$renderer3.push(`<!--]--> <!--[-->`);
      const each_array_1 = ensure_array_like([1, 2, 3, 4]);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let num = each_array_1[$$index_1];
        $$renderer3.push(`<link rel="preload" as="image"${attr("href", `${stringify(base)}/images/wave${stringify(num)}.png`)} class="svelte-1uha8ag"/>`);
      }
      $$renderer3.push(`<!--]-->`);
    });
    $$renderer2.push(`<div id="landing" class="svelte-1uha8ag">`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img${attr("src", `${stringify(base)}/images/landing${stringify(mobile)}/1.png`)} alt="background" class="svelte-1uha8ag"${attr_style("", {
        transform: `translateY(${stringify(charY * 0.5 * mobileFactor)}px)`
      })}/>`);
    }
    $$renderer2.push(`<!--]--> <img${attr("src", `${stringify(base)}/images/landing${stringify(mobile)}/2.png`)} id="titleLogo" translate="no" alt="Title" class="graphic svelte-1uha8ag"${attr_style("", {
      transform: `translateY(${stringify(charY * 0.5 * mobileFactor)}px)`
    })}/> <img${attr("src", `${stringify(base)}/images/landing${stringify(mobile)}/3.png`)} class="graphic svelte-1uha8ag" alt="Orpheus and Heidi"/> <img${attr("src", `${stringify(base)}/images/landing${stringify(mobile)}/4.png`)} class="graphic wave svelte-1uha8ag" alt="Pink Wave"/> <img${attr("src", `${stringify(base)}/images/landing${stringify(mobile)}/5.png`)} class="graphic svelte-1uha8ag" alt="Orpheus's Hands"/></div> <div id="ys" class="svelte-1uha8ag"><div class="svelte-1uha8ag"><h1 class="svelte-1uha8ag"${attr_style("", { "font-size": "50px" })}>Make E-Cards</h1> <h3 class="svelte-1uha8ag">E-Cards should be viewable on the web and engaging!</h3> <button class="svelte-1uha8ag"${attr_style("", { "margin-top": "20px", width: "60%" })}>View requirements for submissions</button></div> <div class="svelte-1uha8ag"><a href="https://hacklyn.city/orpheus" class="svelte-1uha8ag"><img translate="no"${attr("src", `${stringify(base)}/images/orpheusCard.png`)} alt="Demo e-card" class="svelte-1uha8ag"${attr_style("", { "max-width": "90%", transform: "rotate(2deg)" })}/></a> <p class="svelte-1uha8ag">Check out this example! <i class="svelte-1uha8ag">(Click on the image)</i></p></div></div> <div id="ws" class="svelte-1uha8ag"><img class="waveDown svelte-1uha8ag"${attr("src", `${stringify(base)}/images/wave1.png`)} alt="Wave graphic"${attr_style("", {
      width: "100%",
      "user-select": "none",
      "-webkit-user-drag": "none"
    })}/> <div id="grid"${attr_class("svelte-1uha8ag", void 0, { "mobile": mobile != "" })}>`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="svelte-1uha8ag"><img translate="no"${attr("src", `${stringify(base)}/images/sweatshirt.png`)} alt="Sweatshirt" class="svelte-1uha8ag"${attr_style("", {
        "max-width": "60%",
        height: "auto",
        transform: "rotate(-2deg)",
        "border-radius": "30px"
      })}/> <p class="svelte-1uha8ag">Each item requires hearts to purchase. You can earn hearts from your submissions; the amount of hearts for each submission depends on the quality of your project, duration of time you put into making it, and sugar rushes <i class="svelte-1uha8ag">(next section)</i>.</p></div> <div class="svelte-1uha8ag"><h1 class="svelte-1uha8ag"${attr_style("", { "font-size": "50px" })}>Earn Prizes</h1> <h3 class="svelte-1uha8ag">The shop includes heart themed merch and even a Hack Club sweatshirt!</h3> <button class="svelte-1uha8ag"${attr_style("", { "margin-top": "20px", width: "60%" })}>Check out the Shop</button></div>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div id="sugarRush" class="svelte-1uha8ag"><img class="waveDown svelte-1uha8ag"${attr("src", `${stringify(base)}/images/wave2.png`)} alt="Wave graphic"${attr_style("", {
      width: "100%",
      "user-select": "none",
      "-webkit-user-drag": "none"
    })}/> <h1 class="svelte-1uha8ag"${attr_style("", { "font-size": "50px" })}>Sugar Rushes!</h1> <p class="svelte-1uha8ag"${attr_style("", { "margin-bottom": "30px" })}>You can earn more hearts for each project you submit by getting sugar rushes. Sugar rushes are bonuses for completing tasks and pushing your bounds!</p> `);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img${attr("src", `${stringify(base)}/images/donut.png`)} alt="Orpheus in a giant donut" style="width: 30%; height: auto" class="svelte-1uha8ag"/>`);
    }
    $$renderer2.push(`<!--]--> <h2 class="svelte-1uha8ag"${attr_style("", {
      "font-family": "Playwrite DK Loopet, Montserrat, Gabarito",
      "margin-bottom": "20px"
    })}>Sugar Rush Bonuses</h2> <div id="sugarGrid" class="svelte-1uha8ag"><div class="svelte-1uha8ag"><h3 class="svelte-1uha8ag">+1 Heart</h3> <p class="svelte-1uha8ag">Spend over 10 hours on your project</p></div> <div class="svelte-1uha8ag"><h3 class="svelte-1uha8ag">+1 Heart</h3> <p class="svelte-1uha8ag">Make a card for someone in Hack Club! Include a picture in the slack channel of you sending them the card.</p></div> <div class="svelte-1uha8ag"><h3 class="svelte-1uha8ag">+2 Hearts</h3> <p class="svelte-1uha8ag">Full usability through keyboard. Users should be able to fully control what pages they are on without having to use buttons or elements on the UI.</p></div> <div class="svelte-1uha8ag"><h3 class="svelte-1uha8ag">+3 Hearts</h3> <p class="svelte-1uha8ag">Incorporate music, speech, or both to your project.</p></div> <div class="svelte-1uha8ag"><h3 class="svelte-1uha8ag">+4 Hearts</h3> <p class="svelte-1uha8ag">Participate in a demo and get approved by staff for this bonus. Demos will be announced in the slack channel. You can only get this bonus once for an individual project.</p></div> <div class="svelte-1uha8ag"><h3 class="svelte-1uha8ag">+5 Hearts</h3> <p class="svelte-1uha8ag">Exceptional use of animations and graphics. All illustrations should also be original.</p></div> <div class="svelte-1uha8ag"><h3 class="svelte-1uha8ag">+5 Hearts</h3> <p class="svelte-1uha8ag">Use a web-framework you've never learned or used before!</p></div></div> <p class="svelte-1uha8ag">More may be added in the future. Check back here periodically!</p></div> <div id="submit" class="svelte-1uha8ag"><img${attr("src", `${stringify(base)}/images/wave3.png`)} alt="Wave graphic" class="waveDown svelte-1uha8ag" style="width: 100%; user-select: none; -webkit-user-drag: none"/> <h1 style="padding: 20px;" class="svelte-1uha8ag">Ready to submit?</h1> <button class="svelte-1uha8ag">Submit Work</button><br class="svelte-1uha8ag"/> `);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img${attr("src", `${stringify(base)}/images/envelope.png`)} alt="Envelope" style="max-width: 500px; transform: rotate(3deg);" class="svelte-1uha8ag"/>`);
    }
    $$renderer2.push(`<!--]--></div> <div id="faq" class="svelte-1uha8ag"><img class="waveDown svelte-1uha8ag" alt="Wave graphic"${attr("src", `${stringify(base)}/images/wave4.png`)} style="width: 100%; height: auto; user-select: none; -webkit-user-drag: none"/> <h1 class="svelte-1uha8ag"${attr_style("", { "text-shadow": "0px 0px 20px grey" })}>FAQ</h1> <div class="svelte-1uha8ag"><h2 class="svelte-1uha8ag">Can I participate in this program?</h2> <p class="svelte-1uha8ag">If you are 13-18 and in high school, then yes! However, we aren't able to ship items or distribute grants in some countries <i class="svelte-1uha8ag">(most countries are supported)</i>. Let us know if you have any doubts about your ability to recieve prizes!</p></div> <div class="svelte-1uha8ag"><h2 class="svelte-1uha8ag">Can I submit multiple projects?</h2> <p class="svelte-1uha8ag">Yes! You can make multiple e-cards; however, you should challenge yourself to add more features to each new submission <i class="svelte-1uha8ag">(we will check the progression of your submissions)</i>. For prizes such as the sweatshirt, you aren't likely to get enough hearts from one submission to purchase.</p></div> <div class="svelte-1uha8ag"><h2 class="svelte-1uha8ag">How many hours do I need to put into a project at minimum?</h2> <p class="svelte-1uha8ag">You need to put in 6 hours for each submission, at a minimum.</p></div> <div class="svelte-1uha8ag"><h2 class="svelte-1uha8ag">If I get a grant for an item, how can I use it?</h2> <p class="svelte-1uha8ag">All grants will be processed and distributed on <a href="https://hcb.hackclub.com" class="svelte-1uha8ag">HCB</a>. You should signup on the platform and use the same email that you use on your submission form.</p></div> <div class="svelte-1uha8ag"><h2 class="svelte-1uha8ag">How many hearts will an average project get?</h2> <p class="svelte-1uha8ag">The average amount of hearts a 6-hour project with no sugar rushes will get is around 5 hearts. The demo project would get around 8 hearts in total, including one +2 sugar rush.</p></div> <div class="svelte-1uha8ag"><h2 class="svelte-1uha8ag">I have more questions!</h2> <p class="svelte-1uha8ag">Ask your questions in the <i class="svelte-1uha8ag">#coeur</i> channel on the Hack Club slack!</p></div></div> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
