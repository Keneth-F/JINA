import { AbstractView } from "../pages/AbstractView.js";
import { Utils } from "../utils.js";

export class ColumnView extends AbstractView {
  constructor(params) {
    super(params);
    this.name = params.name
  }

  async getHtml() {
    return /*HTML*/`
    <div>
        <div class="p-2 rounded-2xl shadow-sm bg-white/50 " id="list${this.name}">
            <h2 class="flex justify-between font-bold text-xl p-2 py-1 handle">${this.name}<span
                    class="text-gray-500 bg-gray-200 rounded-full font-normal px-2 py-1">0</span></h2>
            <div class="space-y-2">
                <div class="flex items-end justify-end p-2"><button id=${this.name} class="text-green-500 hover:text-green-600"><svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            aria-hidden="true" class="h-10 w-10">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                                clip-rule="evenodd"></path>
                        </svg></button></div>
            </div>
            <div class="list-group min-h-[20px]">
            ${[{ data: Math.floor(Math.random() * 100) }].reduce((acc, cur) => acc + `
            <div class="border m-1 p-2 flex gap-1 justify-center items-center">${cur.data}</div>
            `, "")}
            </div>
        </div>
    </div>
    `;
  }
  getScripts() {
    const btn = document.querySelector("#" + this.name)
    console.log(btn)
    btn.addEventListener("click", (e) => {
      const b = document.createElement("div")
      b.innerHTML = `<div class="border m-1 p-2 flex gap-1 justify-center items-center">${Math.floor(Math.random() * 100)}</div>`
      document.querySelector("#list" + this.name + ">.list-group")
        .append(b)
    })
  }
}