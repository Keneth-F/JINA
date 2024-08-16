import { Loader } from "./components/PageLoader.js";
import { router } from "./router/index.js";
document.querySelector("#app").innerHTML = await Loader.getHtml();
window.addEventListener('hashchange', router);
window.addEventListener('load', router);