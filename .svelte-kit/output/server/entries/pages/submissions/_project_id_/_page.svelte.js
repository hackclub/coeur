import { w as head, y as attr_style, F as ensure_array_like } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/index2.js";
import "@sveltejs/kit/internal/server";
import { F as Footer } from "../../../../chunks/footer.js";
import { e as escape_html } from "../../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    page.params.project_id;
    let projectName = "Loading...";
    let sugarRushes = [];
    let slackId = "";
    let totalHearts = 0;
    let notes = "";
    head("1qq66qo", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(projectName)} | Coeur</title>`);
      });
    });
    $$renderer2.push(`<div id="background" class="svelte-1qq66qo"><img src="/images/landing/1.png" alt="Background" style="visibility: hidden" class="svelte-1qq66qo"/></div> <p class="svelte-1qq66qo"><button class="svelte-1qq66qo"${attr_style("", { "margin-top": "30px", border: "4px pink solid" })}>Return to Site</button></p> <p class="svelte-1qq66qo"${attr_style("", { "margin-top": "50px" })}>Project Review</p> <h1 class="svelte-1qq66qo"${attr_style("", { "margin-bottom": "10px" })}>${escape_html(projectName)}</h1> <h2 class="svelte-1qq66qo"${attr_style("", { "margin-bottom": "10px", color: "pink" })}>${escape_html(slackId)}</h2> <h3 class="svelte-1qq66qo"${attr_style("", { "margin-bottom": "100px" })}>Total Hearts: ${escape_html(totalHearts)}</h3> <img src="/images/orphHeidi.png" style="width: 100%" alt="Orpheus and Heidi" class="svelte-1qq66qo"/> <div id="pinkBackground" class="svelte-1qq66qo"><div id="pinkContainer" class="svelte-1qq66qo">`);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<h2 class="svelte-1qq66qo"${attr_style("", { "margin-top": "30px" })}>No Hearts Awarded</h2>`);
    }
    $$renderer2.push(`<!--]--> <p class="svelte-1qq66qo"${attr_style("", { "font-size": "20px", "margin-bottom": "70px" })}>${escape_html(notes)}</p> <h3 class="svelte-1qq66qo">Sugar Rushes</h3> <!--[-->`);
    const each_array = ensure_array_like(sugarRushes);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let x = each_array[$$index];
      $$renderer2.push(`<div class="rush svelte-1qq66qo"><h4 class="svelte-1qq66qo">+${escape_html(x[0])}</h4> <p class="svelte-1qq66qo">${escape_html(x[1])}</p></div>`);
    }
    $$renderer2.push(`<!--]--> `);
    if (sugarRushes.length == 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="svelte-1qq66qo">None</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    Footer($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _page as default
};
