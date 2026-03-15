import { w as head, x as attr } from "../../chunks/index.js";
const favicon = "/_app/immutable/assets/favicon.HuKca9eS.png";
function _layout($$renderer, $$props) {
  let { children } = $$props;
  head("12qhfyh", $$renderer, ($$renderer2) => {
    $$renderer2.push(`<link rel="icon"${attr("href", favicon)}/> <link rel="stylesheet" href="https://css.hackclub.com/theme.css"/> <link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/> <link href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400..900&amp;family=Montserrat:ital,wght@0,100..900;1,100..900&amp;family=Playwrite+DK+Loopet:wght@100..400&amp;display=swap" rel="stylesheet"/> <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&amp;icon_names=favorite,shopping_cart_checkout"/>`);
  });
  children($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _layout as default
};
