import { AbstractView } from "./AbstractView.js";

export class LandingView extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("JINA");
  }

  async getHtml() {
    return /*HTML*/`
    <!-- <AppHeader /> -->
    <header>
      <nav class="absolute z-10 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent">
        <!-- <Container> -->
        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div class="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
            <div class="relative z-20 flex justify-between md:px-0 lg:w-max">
              <a href="/#home" aria-label="logo" class="flex items-center space-x-2">
                <div aria-hidden="true" class="flex space-x-1">
                  <div class="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
                  <div class="h-6 w-2 bg-primary"></div>
                </div>
                <span class="text-2xl font-bold text-gray-900 dark:text-white">JINA</span>
              </a>

            </div>
            <div class="relative flex max-h-10">
              <a href="/#/admin"
                class="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                <span class="relative text-sm font-semibold text-white"> Get Started</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main class="space-y-40 h-screen place-content-center">
      <!-- <HeroSection /> -->
      <div class="relative" id="home">
        <div aria-hidden="true" class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
          <div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        <!-- <Container> -->
        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div class="relative pt-36 ml-auto">
            <div class="lg:w-2/3 text-center mx-auto">
              <h1 class="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">JINA helps team move
                <span class="text-primary dark:text-white">work forward.</span>
              </h1>
              <p class="mt-8 text-gray-700 dark:text-gray-300">Collaborate, manage projects, and reach new productivity
                peaks. From
                high rises to the home office, the way your team works is unique -
                accomplish it all with JINA</p>
              <div class="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                <a href="/#/admin"
                  class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                  <span class="relative text-base font-semibold text-white">Get started</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    `;
  }
  async getScripts() {
  }
}
