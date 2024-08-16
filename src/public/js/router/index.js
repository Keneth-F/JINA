import { Loader } from "../components/PageLoader.js";
import { Error404View } from "../pages/Error404.js";
import { Utils } from "../utils.js";
import { routes } from "./routes.js";
export const router = async () => {
  document.querySelector("#app").innerHTML = await Loader.getHtml();
  const request = Utils.parseRequestURL()
  const parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
  const Page = routes[parsedURL] ? routes[parsedURL] : Error404View
  const view = new Page(Utils.getParams(parsedURL))
  document.querySelector("#app").innerHTML = await view.getHtml();
  await view.getScripts()
}