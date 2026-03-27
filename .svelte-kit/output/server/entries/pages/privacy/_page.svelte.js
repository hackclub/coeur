import { w as head, x as attr, y as attr_style, G as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { F as Footer } from "../../../chunks/footer.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let mobile = "";
    head("7ke6fz", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Privacy Policy | Coeur</title>`);
      });
      $$renderer3.push(`<link rel="preload"${attr("href", `${stringify(base)}/images/landing/1.png`)} as="image"/> <link rel="preload"${attr("href", `${stringify(base)}/images/landingMobile/1.png`)} as="image"/>`);
    });
    $$renderer2.push(`<div id="header" class="svelte-7ke6fz"><img${attr("src", `${stringify(base)}/images/landing${stringify(mobile)}/1.png`)} alt="Heart background" class="svelte-7ke6fz"/> <div class="svelte-7ke6fz"><h1${attr_style("", { "margin-bottom": "20px" })}>Privacy Policy</h1> <h2${attr_style("", { "margin-bottom": "40px" })}>Your privacy is paramount to us</h2> <button>Return Home</button></div></div> <div id="content" class="svelte-7ke6fz"><h2${attr_style("", { "margin-bottom": "20px" })}><span translate="no">Cœur</span> is dedicated to keeping your personal information secure and safe, and committed to having no data breach incidents. Below are our privacy policies for handling your data.</h2> <div class="svelte-7ke6fz"><h3 class="svelte-7ke6fz">Identity Vault Verification</h3> <p>Identity Vault will be used to verify your eligibility. No staff member outside HCB's operations team can directly access your data in the Identity Vault at <a href="https://auth.hackclub.com">auth.hackclub.com</a>. <span translate="no">Cœur</span> staff will only receive your full legal name, email, eligibility to participate, and outside information that we request from you on your submission form.</p></div> <div class="svelte-7ke6fz"><h3 class="svelte-7ke6fz">Authorized Access to Information</h3> <p>All individuals that have access to your submission data and Identity Vault information are under NDA. This includes all staff for <span translate="no">Cœur</span>. No public API, behind auth or not, will contain PII (personally identifiable information), which includes emails, preferred names, legal names, and shipping addresses. All PII will be securely stored on Airtable, Fillout, or on a local computer.</p></div> <div class="svelte-7ke6fz"><h3 class="svelte-7ke6fz">Usage of Artificial Intelligence</h3> <p>No PII (personally identifiable information), which includes preferred names, legal names, and shipping addresses, will be given to any publically available AI model or platform. Statistics such as coding hours or heart balances, as well as publically available information such as usernames or Slack IDs, may be given to a publically available AI model or platform.</p></div></div> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
