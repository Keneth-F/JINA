import { ColumnView } from "../components/Column.js";
import { AbstractView } from "./AbstractView.js";

export class DashboardView extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        this.columns = ["TODO", "INPROGRESS", "DONE"].map((name) => new ColumnView({ name }))
        const cols = await Promise.all(this.columns.map(async (c) => await c.getHtml()))
        return /*HTML*/`    
    <ul id="item-list"></ul>
    <div class="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
      <div
          class="absolute top-0 left-0 h-96 w-full bg-gradient-to-br from-pink-400 via-slate-[#0055D1] to-[#005] rounded-b-md -z-50 opacity-50 blur-3xl">
      </div>LOGO
      <div class="flex items-center space-x-5 flex-1 justify-end w-full">
          <form class="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                  class="h-6 w-6 text-gray-400">
                  <path fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clip-rule="evenodd"></path>
              </svg><input type="text" placeholder="Search" class="flex-1" value=""><button type="submit"
                  hidden="">Search</button></form>
          <div class=" sb-avatar sb-avatar--text"
              style="display:inline-block;vertical-align:middle;width:50px;height:50px;border-radius:100%;font-family:Helvetica, Arial, sans-serif">
              <div class=" sb-avatar__text"
                  style="width:50px;height:50px;line-height:initial;text-align:center;color:#FFF;background:#0055D1;border-radius:100%"
                  title="Sankar">
                  <div style="display: table; table-layout: fixed; width: 100%; height: 100%; font-size: 16.6667px;"><span
                          style="display: table-cell; vertical-align: middle; white-space: nowrap;"><span>S</span></span>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto" id="columns">
     ${cols.join("")}
      </div>
  </div>
    `;
    }
    async getScripts() {
        this.columns.forEach(async (c) => { await c.getScripts() })
        document.querySelectorAll(".list-group").forEach((ls) => {
            Sortable.create(ls, {
                group: "shared",
                animation: 150
            });
        })
        Sortable.create(columns, {
            handle: '.handle',
            animation: 150
        });
    }
}
