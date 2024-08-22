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
    <!-- Component Start -->
<div class="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
<div class="flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75">
    <svg class="w-8 h-8 text-indigo-600 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
    <input class="flex items-center h-10 px-4 ml-10 text-sm bg-gray-200 rounded-full focus:outline-none focus:ring" type="search" placeholder="Search for anything…">
    <div class="ml-10">
        <a class="mx-2 text-sm font-semibold text-indigo-700" href="#">Projects</a>
        <a class="mx-2 text-sm font-semibold text-gray-600 hover:text-indigo-700" href="#">Team</a>
        <a class="mx-2 text-sm font-semibold text-gray-600 hover:text-indigo-700" href="#">Activity</a>
    </div>
    <buton class="flex items-center justify-center w-8 h-8 ml-auto overflow-hidden rounded-full cursor-pointer">
        <img src="https://assets.codepen.io/5041378/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1600304177&width=512" alt="">
    </buton>
</div>
<div class="px-10 mt-6">
    <h1 class="text-2xl font-bold">Team Project Board</h1>
</div>
<div class="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
    <div class="flex flex-col flex-shrink-0 w-72">
        <div class="flex items-center flex-shrink-0 h-10 px-2">
            <span class="block text-sm font-semibold">Backlog</span>
            <span class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">6</span>
            <button class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
            </button>
        </div>
        <div class="flex flex-col pb-2 overflow-auto">
            <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                    <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </button>
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">Design</span>
                <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">Dec 12</span>
                    </div>
                    <div class="relative flex items-center ml-4">
                        <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">4</span>
                    </div>
                    <div class="flex items-center ml-4">
                        <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">1</span>
                    </div>
                    <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/26.jpg'/>
                </div>
            </div>
            <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                    <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </button>
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full">Dev</span>
                <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">Dec 12</span>
                    </div>
                    <div class="relative flex items-center ml-4">
                        <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">4</span>
                    </div>
                    <div class="flex items-center ml-4">
                        <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">1</span>
                    </div>
                    <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/44.jpg'/>
                </div>
            </div>
            <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                    <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </button>
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full">Dev</span>
                <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">Dec 12</span>
                    </div>
                    <div class="relative flex items-center ml-4">
                        <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">4</span>
                    </div>
                    <div class="flex items-center ml-4">
                        <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">1</span>
                    </div>
                    <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/men/46.jpg'/>
                </div>
            </div>
            <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                    <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </button>
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-full">Copywriting</span>
                <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">Dec 12</span>
                    </div>
                    <div class="relative flex items-center ml-4">
                        <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">4</span>
                    </div>
                    <div class="flex items-center ml-4">
                        <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">1</span>
                    </div>
                    <img class="w-6 h-6 ml-auto rounded-full" src='https://uifaces.co/our-content/donated/vIqzOHXj.jpg'/>
                </div>
            </div>
            <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                    <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </button>
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full">Dev</span>
                <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">Dec 12</span>
                    </div>
                    <div class="relative flex items-center ml-4">
                        <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">4</span>
                    </div>
                    <div class="flex items-center ml-4">
                        <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">1</span>
                    </div>
                    <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/48.jpg'/>
                </div>
            </div>
            <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                    <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </button>
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-full">Copywriting</span>
                <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">Dec 12</span>
                    </div>
                    <div class="relative flex items-center ml-4">
                        <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">4</span>
                    </div>
                    <div class="flex items-center ml-4">
                        <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">1</span>
                    </div>
                    <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/26.jpg'/>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col flex-shrink-0 w-72">
        <div class="flex items-center flex-shrink-0 h-10 px-2">
            <span class="block text-sm font-semibold">Ready</span>
            <span class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">3</span>
            <button class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
            </button>
        </div>
        <div class="flex flex-col pb-2 overflow-auto">
            <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                    <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </button>
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">Design</span>
                <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">Dec 12</span>
                    </div>
                    <div class="relative flex items-center ml-4">
                        <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">4</span>
                    </div>
                    <div class="flex items-center ml-4">
                        <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">1</span>
                    </div>
                    <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/26.jpg'/>
                </div>
            </div>
            <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                    <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </button>
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full">Dev</span>
                <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">Dec 12</span>
                    </div>
                    <div class="relative flex items-center ml-4">
                        <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">4</span>
                    </div>
                    <div class="flex items-center ml-4">
                        <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">1</span>
                    </div>
                    <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/men/64.jpg'/>
                </div>
            </div>
            <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                    <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </button>
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">Design</span>
                <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">Dec 12</span>
                    </div>
                    <div class="relative flex items-center ml-4">
                        <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">4</span>
                    </div>
                    <div class="flex items-center ml-4">
                        <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">1</span>
                    </div>
                    <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/26.jpg'/>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col flex-shrink-0 w-72">
        <div class="flex items-center flex-shrink-0 h-10 px-2">
            <span class="block text-sm font-semibold">Doing</span>
            <span class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">2</span>
            <button class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
            </button>
        </div>
        <div class="flex flex-col pb-2 overflow-auto">
            <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                    <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </button>
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">Design</span>
                <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">Dec 12</span>
                    </div>
                    <div class="relative flex items-center ml-4">
                        <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">4</span>
                    </div>
                    <div class="flex items-center ml-4">
                        <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">1</span>
                    </div>
                    <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/26.jpg'/>
                </div>
            </div>
            <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                    <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </button>
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full">Dev</span>
                <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">Dec 12</span>
                    </div>
                    <div class="relative flex items-center ml-4">
                        <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">4</span>
                    </div>
                    <div class="flex items-center ml-4">
                        <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">1</span>
                    </div>
                    <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/men/64.jpg'/>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col flex-shrink-0 w-72">
        <div class="flex items-center flex-shrink-0 h-10 px-2">
            <span class="block text-sm font-semibold">Review</span>
            <span class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">3</span>
            <button class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
            </button>
        </div>
        <div class="flex flex-col pb-2 overflow-auto">
            <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                    <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </button>
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full">Dev</span>
                <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">Dec 12</span>
                    </div>
                    <div class="relative flex items-center ml-4">
                        <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">4</span>
                    </div>
                    <div class="flex items-center ml-4">
                        <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">1</span>
                    </div>
                    <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/men/64.jpg'/>
                </div>
            </div>
            <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                    <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </button>
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-full">Copywriting</span>
                <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">Dec 12</span>
                    </div>
                    <div class="relative flex items-center ml-4">
                        <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">4</span>
                    </div>
                    <div class="flex items-center ml-4">
                        <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">1</span>
                    </div>
                    <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/44.jpg'/>
                </div>
            </div>
            <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                    <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </button>
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">Design</span>
                <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">Dec 12</span>
                    </div>
                    <div class="relative flex items-center ml-4">
                        <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">4</span>
                    </div>
                    <div class="flex items-center ml-4">
                        <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">1</span>
                    </div>
                    <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/44.jpg'/>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col flex-shrink-0 w-72">
        <div class="flex items-center flex-shrink-0 h-10 px-2">
            <span class="block text-sm font-semibold">Blocked</span>
            <span class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">1</span>
            <button class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
            </button>
        </div>
        <div class="flex flex-col pb-2 overflow-auto">
            <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                    <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </button>
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">Design</span>
                <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">Dec 12</span>
                    </div>
                    <div class="relative flex items-center ml-4">
                        <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">4</span>
                    </div>
                    <div class="flex items-center ml-4">
                        <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">1</span>
                    </div>
                    <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/26.jpg'/>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col flex-shrink-0 w-72">
        <div class="flex items-center flex-shrink-0 h-10 px-2">
            <span class="block text-sm font-semibold">Done</span>
            <span class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">3</span>
            <button class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
            </button>
        </div>
        <div class="flex flex-col pb-2 overflow-auto">
            <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                    <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </button>
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-full">Copywriting</span>
                <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">Dec 12</span>
                    </div>
                    <div class="relative flex items-center ml-4">
                        <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">4</span>
                    </div>
                    <div class="flex items-center ml-4">
                        <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">1</span>
                    </div>
                    <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/26.jpg'/>
                </div>
            </div>
            <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                    <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </button>
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-full">Copywriting</span>
                <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">Dec 12</span>
                    </div>
                    <div class="relative flex items-center ml-4">
                        <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">4</span>
                    </div>
                    <div class="flex items-center ml-4">
                        <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">1</span>
                    </div>
                    <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/44.jpg'/>
                </div>
            </div>
            <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                    <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </button>
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">Design</span>
                <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">Dec 12</span>
                    </div>
                    <div class="relative flex items-center ml-4">
                        <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">4</span>
                    </div>
                    <div class="flex items-center ml-4">
                        <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">1</span>
                    </div>
                    <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/men/46.jpg'/>
                </div>
            </div>
            <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                    <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </button>
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">Design</span>
                <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">Dec 12</span>
                    </div>
                    <div class="relative flex items-center ml-4">
                        <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">4</span>
                    </div>
                    <div class="flex items-center ml-4">
                        <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">1</span>
                    </div>
                    <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/men/46.jpg'/>
                </div>
            </div>
            <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                    <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </button>
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full">Dev</span>
                <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">Dec 12</span>
                    </div>
                    <div class="relative flex items-center ml-4">
                        <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">4</span>
                    </div>
                    <div class="flex items-center ml-4">
                        <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-1 leading-none">1</span>
                    </div>
                    <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/26.jpg'/>
                </div>
            </div>
        </div>
    </div>
    <div class="flex-shrink-0 w-6"></div>
</div>




</div>
<!-- Component End -->

<a class="fixed bottom-0 right-0 flex items-center justify-center h-8 pl-1 pr-2 mb-6 mr-4 text-blue-100 bg-blue-600 rounded-full shadow-lg hover:bg-blue-600" href="https://twitter.com/lofiui" target="_top">
<div class="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full">
    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" class="r-jwli3a r-4qtqp9 r-yyyyoo r-16y2uox r-1q142lx r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
</div>
<span class="ml-1 text-sm leading-none">@lofiui</span>
</a>
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
<div className={cn('mx-auto w-full max-w-screen-xl px-2.5 md:px-20', className)}>
      {children}
    </div>
<>
<MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
  <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
    <p className='text-sm font-semibold text-gray-700'>
      Quill is now public!
    </p>
  </div>
  <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
    Chat with your{' '}
    <span className='text-blue-600'>documents</span>{' '}
    in seconds.
  </h1>
  <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
    Quill allows you to have conversations with any
    PDF document. Simply upload your file and start
    asking questions right away.
  </p>

  <Link
    className={buttonVariants({
      size: 'lg',
      className: 'mt-5',
    })}
    href='/dashboard'
    target='_blank'>
    Get started{' '}
    <ArrowRight className='ml-2 h-5 w-5' />
  </Link>
</MaxWidthWrapper>

{/* value proposition section */}
<div>
  <div className='relative isolate'>
    <div
      aria-hidden='true'
      className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
      <div
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
      />
    </div>

    <div>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        <div className='mt-16 flow-root sm:mt-24'>
          <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
            <Image
              src='/dashboard-preview.jpg'
              alt='product preview'
              width={1364}
              height={866}
              quality={100}
              className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
            />
          </div>
        </div>
      </div>
    </div>

    <div
      aria-hidden='true'
      className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
      <div
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
      />
    </div>
  </div>
</div>

{/* Feature section */}
<div className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
  <div className='mb-12 px-6 lg:px-8'>
    <div className='mx-auto max-w-2xl sm:text-center'>
      <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
        Start chatting in minutes
      </h2>
      <p className='mt-4 text-lg text-gray-600'>
        Chatting to your PDF files has never been
        easier than with Quill.
      </p>
    </div>
  </div>

  {/* steps */}
  <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
    <li className='md:flex-1'>
      <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
        <span className='text-sm font-medium text-blue-600'>
          Step 1
        </span>
        <span className='text-xl font-semibold'>
          Sign up for an account
        </span>
        <span className='mt-2 text-zinc-700'>
          Either starting out with a free plan or
          choose our{' '}
          <Link
            href='/pricing'
            className='text-blue-700 underline underline-offset-2'>
            pro plan
          </Link>
          .
        </span>
      </div>
    </li>
    <li className='md:flex-1'>
      <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
        <span className='text-sm font-medium text-blue-600'>
          Step 2
        </span>
        <span className='text-xl font-semibold'>
          Upload your PDF file
        </span>
        <span className='mt-2 text-zinc-700'>
          We&apos;ll process your file and make it
          ready for you to chat with.
        </span>
      </div>
    </li>
    <li className='md:flex-1'>
      <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
        <span className='text-sm font-medium text-blue-600'>
          Step 3
        </span>
        <span className='text-xl font-semibold'>
          Start asking questions
        </span>
        <span className='mt-2 text-zinc-700'>
          It&apos;s that simple. Try out Quill today -
          it really takes less than a minute.
        </span>
      </div>
    </li>
  </ol>

  <div className='mx-auto max-w-6xl px-6 lg:px-8'>
    <div className='mt-16 flow-root sm:mt-24'>
      <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
        <Image
          src='/file-upload-preview.jpg'
          alt='uploading preview'
          width={1419}
          height={732}
          quality={100}
          className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
        />
      </div>
    </div>
  </div>
</div>
</>





<div id="app">
  <div id="board-list">
    <h1>My Boards</h1>
    <div id="boards-container"></div>
    <div id="create-board-placeholder" class="placeholder">
      <span class="plus">+</span>
    </div>
  </div>
  <div id="board-view" class="hidden">
    <div id="board-header">
      <button id="back-to-boards" class="icon-button" data-tooltip="Back to Boards">⬅️</button>
      <h1 id="board-title" contenteditable="true"></h1>
      <button id="delete-board" class="icon-button" data-tooltip="Delete Board">🗑️</button>
      <div id="settings-icon" class="settings-icon" data-tooltip="Background Settings">⚙️</div>
    </div>
    <div id="columns-container"></div>
    <div id="create-column-placeholder" class="placeholder">
      <span class="plus">+</span>
    </div>
  </div>
</div>

<div id="settings-modal" class="modal hidden">
  <div class="modal-content">
    <span class="close-button">×</span>
    <h2>Background Settings</h2>
    <label for="gradients">Select Background:</label>
    <select id="gradients"></select>
    <label for="columns-slider">Number of columns per row:</label>
    <input type="range" id="columns-slider" min="1" max="10" value="5">
    <span id="columns-slider-value">5</span>
  </div>
</div>
body {
    font - family: "Segoe UI", sans - serif;
    background: var(
        --background - gradient,
        linear - gradient(to right, #ff7e5f, #feb47b)
    );
    margin: 0;
    padding: 0;
    color: #d1d5db;
    transition: background 0.5s ease;
}

#app {
    display: flex;
    flex - direction: column;
    align - items: center;
    padding: 20px;
}

#board - list,
    #board - view {
    width: 90 %;
    max - width: 1200px;
}

#board - header {
    display: flex;
    justify - content: space - between;
    align - items: center;
    width: 100 %;
    padding: 10px;
    border - bottom: 1px solid #3f3f46;
}

.hidden {
    display: none;
}

h1 {
    color: #ffffff;
    margin: 0;
}

button,
.icon - button {
    background - color: #3f3f46;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    margin - top: 10px;
    border - radius: 5px;
    transition: background - color 0.3s, transform 0.2s;
    position: relative;
    display: inline - flex;
    align - items: center;
    justify - content: center;
}

button: hover,
.icon - button:hover {
    background - color: #575757;
    transform: scale(1.05);
}

button:: after,
.icon - button:: after,
.add - card - btn::after {
    position: absolute;
    top: auto;
    left: auto;
    transform: none;
    transition: none;
}

#boards - container,
    #columns - container {
    display: flex;
    flex - wrap: wrap;
    gap: 10px;
    margin - top: 20px;
}

.board,
.column {
    background - color: #2d2d2f;
    padding: 10px;
    border - radius: 8px;
    box - shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: #d1d5db;
    transition: box - shadow 0.3s, transform 0.2s;
}

.board: hover,
.column:hover {
    box - shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
}

.board {
    width: 200px;
    text - align: center;
    cursor: pointer;
    position: relative;
}

.board.delete - board {
    position: absolute;
    top: 5px;
    right: 5px;
    color: white;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s;
    font - size: 14px;
    background: none;
}

.board: hover.delete - board {
    opacity: 1;
}

.column {
    flex: 1 1 calc(20 % - 10px);
    display: flex;
    flex - direction: column;
}

.column.dragging {
    opacity: 0.5;
}

.column.placeholder - column {
    border: 2px dashed #575757;
    background - color: transparent;
}

.column h2 {
    display: flex;
    justify - content: space - between;
    align - items: center;
    color: #ffffff;
    cursor: pointer;
    overflow: hidden;
    white - space: nowrap;
    text - overflow: ellipsis;
}

.column h2.column - title {
    white - space: normal;
    word - wrap: break-word;
    max - width: 100 %;
    display: inline - block;
    vertical - align: middle;
    font - size: 1em;
    line - height: 1.2em;
    overflow: hidden;
    text - overflow: ellipsis;
}

.column h2.delete - column {
    color: white;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s;
    font - size: 14px;
    background: none;
}

.column:hover h2.delete - column {
    opacity: 1;
}

.cards - container - wrapper {
    max - height: 100 %;
    overflow - y: auto;
}

.cards - container {
    padding: 10px;
    background - color: #2d2d2f;
}

.card {
    background - color: #3f3f46;
    padding: 10px;
    margin - top: 10px;
    border - radius: 5px;
    cursor: move;
    color: #d1d5db;
    position: relative;
    transition: background - color 0.3s, transform 0.2s;
}

.card:hover {
    background - color: #575757;
    transform: scale(1.02);
}

.card.delete - card {
    position: absolute;
    right: 5px;
    top: 5px;
    color: white;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s;
    font - size: 14px;
    background: none;
}

.card: hover.delete - card {
    opacity: 1;
}

.card.card - text {
    cursor: pointer;
}

.card.card - text::before {
    content: attr(data - placeholder);
    color: #aaa;
    display: block;
}

.card.card - text: not(: empty)::before {
    content: "";
}

.add - card - btn {
    display: flex;
    align - items: center;
    color: #3f3f46;
    cursor: pointer;
    margin - top: 10px;
    padding: 10px;
    border - radius: 5px;
    transition: background - color 0.3s, transform 0.2s;
    position: relative;
}

.add - card - btn:hover {
    background - color: #575757;
    color: #ffffff;
    transform: scale(1.02);
}

.add - card - btn::after {
    position: absolute;
    top: auto;
    left: auto;
    transform: none;
    transition: none;
}

.placeholder {
    width: 200px;
    height: 100px;
    display: flex;
    justify - content: center;
    align - items: center;
    border: 2px dashed #575757;
    border - radius: 5px;
    cursor: pointer;
    color: #575757;
    font - size: 2em;
    transition: color 0.3s, transform 0.2s;
    order: 999;
}

#columns - container.placeholder {
    width: 200px;
    height: 50px;
    margin - top: 20px;
}

.settings - icon {
    font - size: 24px;
    cursor: pointer;
    transition: transform 0.2s;
}

.settings - icon:hover {
    transform: rotate(90deg);
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100 %;
    height: 100 %;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify - content: center;
    align - items: center;
    z - index: 1000;
    opacity: 0;
    transition: opacity 0.3s;
    pointer - events: none;
}

.modal.show {
    opacity: 1;
    pointer - events: auto;
}

.modal - content {
    background: #2d2d2f;
    padding: 20px;
    border - radius: 8px;
    text - align: center;
    position: relative;
    transform: scale(0.8);
    transition: transform 0.3s ease -in -out;
}

.modal.show.modal - content {
    transform: scale(1);
}

.modal - content.close - button {
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
    cursor: pointer;
    font - size: 14px;
    background: none;
}

.handle {
    cursor: grab;
    text - align: center;
    padding: 5px;
    font - size: 20px;
    color: #ccc;
}

#board - title {
    white - space: nowrap;
    overflow: hidden;
    text - overflow: ellipsis;
    max - width: 100 %;
    display: inline - block;
    vertical - align: middle;
    font - size: 1.5em;
    line - height: 1.2em;
}

#board - title:focus {
    white - space: normal;
    word - wrap: break-word;
}

.card.placeholder - card {
    background - color: #2d2d2f;
    border: 2px dashed #575757;
    height: 50px;
}

.tooltip {
    position: absolute;
    background - color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 5px;
    border - radius: 5px;
    white - space: nowrap;
    font - size: 12px;
    z - index: 1000;
}

#columns - slider {
    width: 100 %;
}

:root {
    --columns - count: 5;
}

#columns - container {
    display: grid;
    grid - template - columns: repeat(var(--columns - count), 1fr);
    gap: 10px;
    margin - top: 20px;
}

.column {
    display: flex;
    flex - direction: column;
    min - width: 0;
}
document.addEventListener("DOMContentLoaded", () => {
    const boardList = document.getElementById("board-list");
    const boardView = document.getElementById("board-view");
    const boardsContainer = document.getElementById("boards-container");
    const columnsContainer = document.getElementById("columns-container");
    const createBoardPlaceholder = document.getElementById(
        "create-board-placeholder"
    );
    const createColumnPlaceholder = document.getElementById(
        "create-column-placeholder"
    );
    const backToBoardsButton = document.getElementById("back-to-boards");
    const deleteBoardButton = document.getElementById("delete-board");
    const boardTitle = document.getElementById("board-title");
    const gradientSelector = document.getElementById("gradients");
    const settingsIcon = document.getElementById("settings-icon");
    const settingsModal = document.getElementById("settings-modal");
    const closeModalButton = document.querySelector(
        ".modal-content .close-button"
    );
    const columnsSlider = document.getElementById("columns-slider");
    const columnsSliderValue = document.getElementById("columns-slider-value");

    backToBoardsButton.setAttribute("data-tooltip", "Back to Boards");
    deleteBoardButton.setAttribute("data-tooltip", "Delete Board");
    createBoardPlaceholder.setAttribute("data-tooltip", "Create New Board");
    createColumnPlaceholder.setAttribute("data-tooltip", "Create New Column");

    let boards = JSON.parse(localStorage.getItem("boards")) || [];
    let currentBoardId = null;
    let currentBackground =
        localStorage.getItem("background") ||
        "linear-gradient(to right, #ff7e5f, #feb47b)";
    document.body.style.background = currentBackground;

    const gradients = [
        "linear-gradient(to right, #ff7e5f, #feb47b)",
        "linear-gradient(to right, #4facfe, #00f2fe)",
        "linear-gradient(to right, #43e97b, #38f9d7)",
        "linear-gradient(to right, #fa709a, #fee140)",
        "linear-gradient(to right, #30cfd0, #330867)",
        "linear-gradient(to right, #131417, #131417)"
    ];

    function saveBoards() {
        localStorage.setItem("boards", JSON.stringify(boards));
    }

    function applyGradient(gradient) {
        document.body.style.background = gradient;
        localStorage.setItem("background", gradient);
    }

    function populateGradientSelector() {
        gradientSelector.innerHTML = "";
        gradients.forEach((gradient, index) => {
            const option = document.createElement("option");
            option.value = gradient;
            option.textContent = `Gradient ${index + 1}`;
            gradientSelector.appendChild(option);
        });
        gradientSelector.value = currentBackground;
    }

    gradientSelector.addEventListener("change", (e) => {
        applyGradient(e.target.value);
    });

    settingsIcon.addEventListener("click", () => {
        settingsModal.classList.add("show");
    });

    closeModalButton.addEventListener("click", () => {
        settingsModal.classList.remove("show");
    });

    window.addEventListener("click", (e) => {
        if (e.target === settingsModal) {
            settingsModal.classList.remove("show");
        }
    });

    function generateId() {
        return "_" + Math.random().toString(36).substr(2, 9);
    }

    function renderBoards() {
        boardsContainer.innerHTML = "";
        boards.forEach((board) => {
            const boardDiv = document.createElement("div");
            boardDiv.className = "board";
            boardDiv.id = board.id;
            boardDiv.innerHTML = `
                <span class="board-title" contenteditable="true">${board.title || "just a board"
                }</span>
                <span class="delete-board" data-tooltip="Delete Board">✖️</span>
            `;
            boardDiv.addEventListener("click", (e) => {
                if (e.target.classList.contains("delete-board")) {
                    deleteBoard(board.id);
                } else if (!e.target.classList.contains("board-title")) {
                    openBoard(board.id);
                }
            });
            boardDiv.querySelector(".board-title").addEventListener("blur", (e) => {
                board.title = e.target.textContent.trim() || "just a board";
                saveBoards();
                renderBoards();
            });
            boardsContainer.appendChild(boardDiv);
        });
        boardsContainer.appendChild(createBoardPlaceholder);
    }

    function renderBoard(board) {
        boardTitle.textContent = board.title || "just a board";
        columnsContainer.innerHTML = "";
        board.columns.forEach((column, columnIndex) => {
            const columnDiv = document.createElement("div");
            columnDiv.className = "column";
            columnDiv.id = column.id;
            columnDiv.innerHTML = `
                <h2><span class="handle">:::</span> <span class="column-title" contenteditable="true">${column.title || "Untitled Column"
                }</span> <span class="delete-column" data-tooltip="Delete Column">✖️</span></h2>
                <div class="cards-container-wrapper"><div class="cards-container" data-column-id="${column.id
                }"></div></div>
                <div class="add-card-btn" data-tooltip="Add Card">+ Add new card</div>
            `;
            const cardsContainer = columnDiv.querySelector(".cards-container");
            column.cards.forEach((card) => {
                if (!card) return;
                const cardDiv = document.createElement("div");
                cardDiv.className = "card";
                cardDiv.draggable = true;
                cardDiv.id = card.id;
                cardDiv.innerHTML = `<span class="card-text" contenteditable="true" data-placeholder="Type here something...">${card.text || "empty card"
                    }</span> <span class="delete-card" data-tooltip="Delete Card">✖️</span>`;
                cardsContainer.appendChild(cardDiv);

                cardDiv.querySelector(".delete-card").addEventListener("click", () => {
                    if (confirm("Are you sure you want to delete this card?")) {
                        column.cards = column.cards.filter((c) => c.id !== card.id);
                        saveBoards();
                        renderBoard(board);
                    }
                });

                cardDiv.querySelector(".card-text").addEventListener("blur", (e) => {
                    card.text = e.target.textContent.trim() || "empty card";
                    saveBoards();
                });

                cardDiv.addEventListener("dragstart", () => {
                    cardDiv.classList.add("dragging");
                    requestAnimationFrame(() => {
                        cardDiv.style.display = "none";
                    });
                });

                cardDiv.addEventListener("dragend", () => {
                    cardDiv.classList.remove("dragging");
                    cardDiv.style.display = "block";
                    saveBoards();
                    renderBoard(board);
                });
            });

            columnDiv.querySelector(".add-card-btn").addEventListener("click", () => {
                const cardId = generateId();
                const cardDiv = document.createElement("div");
                cardDiv.className = "card";
                cardDiv.draggable = true;
                cardDiv.id = cardId;
                cardDiv.innerHTML = `<span class="card-text" contenteditable="true" data-placeholder="Type here something..."></span> <span class="delete-card" data-tooltip="Delete Card">✖️</span>`;
                cardsContainer.appendChild(cardDiv);

                const cardText = cardDiv.querySelector(".card-text");
                cardText.focus();

                cardDiv.querySelector(".delete-card").addEventListener("click", () => {
                    if (confirm("Are you sure you want to delete this card?")) {
                        column.cards = column.cards.filter((c) => c.id !== cardId);
                        saveBoards();
                        renderBoard(board);
                    }
                });

                cardDiv.querySelector(".card-text").addEventListener("blur", (e) => {
                    if (column.cards[column.cards.length - 1]) {
                        column.cards[column.cards.length - 1].text =
                            e.target.textContent.trim() || "empty card";
                        saveBoards();
                    }
                });

                cardDiv.addEventListener("dragstart", () => {
                    cardDiv.classList.add("dragging");
                    requestAnimationFrame(() => {
                        cardDiv.style.display = "none";
                    });
                });

                cardDiv.addEventListener("dragend", () => {
                    cardDiv.classList.remove("dragging");
                    cardDiv.style.display = "block";
                    saveBoards();
                    renderBoard(board);
                });

                column.cards.push({ id: cardId, text: "" });
                saveBoards();
            });

            columnDiv
                .querySelector(".delete-column")
                .addEventListener("click", () => {
                    if (confirm("Are you sure you want to delete this column?")) {
                        board.columns = board.columns.filter((c) => c.id !== column.id);
                        saveBoards();
                        renderBoard(board);
                    }
                });

            columnDiv.querySelector(".column-title").addEventListener("blur", (e) => {
                column.title = e.target.textContent.trim() || "Untitled Column";
                saveBoards();
            });

            cardsContainer.addEventListener("dragover", (e) => {
                e.preventDefault();
                const placeholder = document.querySelector(".placeholder-card");
                const draggingCard = document.querySelector(".dragging");
                if (!placeholder) {
                    const afterElement = getDragAfterElement(cardsContainer, e.clientY);
                    if (afterElement == null) {
                        cardsContainer.appendChild(createPlaceholder(draggingCard));
                    } else {
                        cardsContainer.insertBefore(
                            createPlaceholder(draggingCard),
                            afterElement
                        );
                    }
                }
            });

            cardsContainer.addEventListener("dragleave", (e) => {
                if (
                    e.relatedTarget &&
                    e.relatedTarget.classList.contains("placeholder-card")
                ) {
                    return;
                }
                const placeholder = document.querySelector(".placeholder-card");
                if (placeholder) {
                    placeholder.remove();
                }
            });

            cardsContainer.addEventListener("drop", (e) => {
                e.preventDefault();
                const draggingCard = document.querySelector(".dragging");
                const draggingCardId = draggingCard.id;
                const placeholder = document.querySelector(".placeholder-card");

                if (e.target.classList.contains("add-card-btn")) {
                    draggingCard.style.display = "block";
                    if (placeholder) {
                        placeholder.remove();
                    }
                    return;
                }

                boards.forEach((b) => {
                    b.columns.forEach((col) => {
                        if (col.cards) {
                            col.cards = col.cards.filter((c) => c.id !== draggingCardId);
                        }
                    });
                });

                const boardIndex = boards.findIndex((b) => b.id === currentBoardId);
                const columnId = e.target
                    .closest(".cards-container")
                    .getAttribute("data-column-id");
                const column = boards[boardIndex].columns.find(
                    (c) => c.id === columnId
                );
                if (column) {
                    column.cards.push({
                        id: draggingCardId,
                        text: draggingCard.textContent.replace("✖️", "").trim()
                    });
                }

                if (placeholder) {
                    placeholder.replaceWith(draggingCard);
                }

                saveBoards();
                renderBoard(board);
            });

            columnsContainer.appendChild(columnDiv);
        });
        columnsContainer.appendChild(createColumnPlaceholder);

        Sortable.create(columnsContainer, {
            animation: 150,
            handle: ".handle",
            onStart: (evt) => {
                evt.item.classList.add("dragging");
            },
            onEnd: (evt) => {
                evt.item.classList.remove("dragging");
                const newColumnsOrder = [];
                columnsContainer
                    .querySelectorAll(".column")
                    .forEach((columnElement) => {
                        const columnId = columnElement.id;
                        const column = board.columns.find((col) => col.id === columnId);
                        newColumnsOrder.push(column);
                    });
                board.columns = newColumnsOrder;
                saveBoards();
            },
            filter: ".placeholder",
            onMove: function (evt) {
                return !evt.related.classList.contains("placeholder");
            }
        });

        document.querySelectorAll(".cards-container").forEach((container) => {
            Sortable.create(container, {
                group: "cards",
                animation: 150,
                onStart: (evt) => {
                    evt.item.classList.add("dragging");
                },
                onEnd: (evt) => {
                    evt.item.classList.remove("dragging");
                    const columnId = container.getAttribute("data-column-id");
                    const column = board.columns.find((c) => c.id === columnId);
                    if (column) {
                        const newCardsOrder = [];
                        container
                            .querySelectorAll(".card .card-text")
                            .forEach((cardElement) => {
                                const cardId = cardElement.parentNode.id;
                                const card = column.cards.find((c) => c.id === cardId);
                                if (card) {
                                    card.text = cardElement.textContent.trim() || "empty card";
                                    newCardsOrder.push(card);
                                }
                            });
                        column.cards = newCardsOrder;
                    }
                    saveBoards();
                }
            });
        });
    }

    function getDragAfterElement(container, y) {
        const draggableElements = [
            ...container.querySelectorAll(".card:not(.dragging)")
        ];
        return draggableElements.reduce(
            (closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = y - box.top - box.height / 2;
                if (offset < 0 && offset > closest.offset) {
                    return { offset, element: child };
                } else {
                    return closest;
                }
            },
            { offset: Number.NEGATIVE_INFINITY }
        ).element;
    }

    function createPlaceholder(draggingCard) {
        const placeholder = document.createElement("div");
        placeholder.className = "card placeholder-card";
        placeholder.style.height = `${draggingCard.offsetHeight}px`;
        return placeholder;
    }

    function openBoard(id) {
        currentBoardId = id;
        const board = boards.find((b) => b.id === id);
        if (board) {
            renderBoard(board);
            boardList.classList.add("hidden");
            boardView.classList.remove("hidden");
        }
    }

    function deleteBoard(id) {
        if (confirm("Are you sure you want to delete this board?")) {
            boards = boards.filter((board) => board.id !== id);
            saveBoards();
            renderBoards();
        }
    }

    createBoardPlaceholder.addEventListener("click", () => {
        const boardTitle = prompt("Enter board title:");
        if (boardTitle) {
            const newBoard = {
                id: generateId(),
                title: boardTitle.trim() || "just a board",
                columns: []
            };
            boards.push(newBoard);
            saveBoards();
            renderBoards();
        }
    });

    createColumnPlaceholder.addEventListener("click", () => {
        const columnTitle = prompt("Enter column title:");
        if (columnTitle) {
            const board = boards.find((b) => b.id === currentBoardId);
            if (board) {
                board.columns.push({
                    id: generateId(),
                    title: columnTitle.trim() || "Untitled Column",
                    cards: []
                });
                saveBoards();
                renderBoard(board);
            }
        }
    });

    backToBoardsButton.addEventListener("click", () => {
        boardList.classList.remove("hidden");
        boardView.classList.add("hidden");
    });

    deleteBoardButton.addEventListener("click", () => {
        deleteBoard(currentBoardId);
        boardList.classList.remove("hidden");
        boardView.classList.add("hidden");
    });

    boardTitle.addEventListener("blur", (e) => {
        const board = boards.find((b) => b.id === currentBoardId);
        if (board) {
            board.title = e.target.textContent.trim() || "just a board";
            saveBoards();
            renderBoards();
        }
    });

    columnsSlider.addEventListener("input", (e) => {
        const columnsCount = e.target.value;
        columnsSliderValue.textContent = columnsCount;
        document.documentElement.style.setProperty("--columns-count", columnsCount);
        localStorage.setItem("columnsCount", columnsCount);
    });

    function initializeColumnsSlider() {
        const columnsCount = localStorage.getItem("columnsCount") || 5;
        columnsSlider.value = columnsCount;
        columnsSliderValue.textContent = columnsCount;
        document.documentElement.style.setProperty("--columns-count", columnsCount);
    }

    populateGradientSelector();
    renderBoards();
    initializeColumnsSlider();

    const tooltipElements = document.querySelectorAll("[data-tooltip]");

    tooltipElements.forEach((element) => {
        element.addEventListener("mouseover", (e) => {
            const tooltip = document.createElement("div");
            tooltip.className = "tooltip";
            tooltip.textContent = e.target.getAttribute("data-tooltip");
            document.body.appendChild(tooltip);

            function moveTooltip(event) {
                tooltip.style.left = event.pageX + 5 + "px";
                tooltip.style.top = event.pageY + 5 + "px";
            }

            function removeTooltip() {
                tooltip.remove();
                e.target.removeEventListener("mousemove", moveTooltip);
                e.target.removeEventListener("mouseleave", removeTooltip);
            }

            e.target.addEventListener("mousemove", moveTooltip);
            e.target.addEventListener("mouseleave", removeTooltip);
        });
    });
});




< !--Trello Clone-- >
    <div class="app">

        <!-- Main Header -->
        <header class="app-header">
            <div class="left">
                <div class="btn"><i class="fas fa-home"></i></div>
                <div class="btn btn-text"><i class="fab fa-trello"></i> Boards</div>
                <div class="btn search">
                    Search
                    <i class="fas fa-search"></i>
                </div>
            </div>
            <div class="center">
                <div class="logo"><i class="fab fa-trello"></i> Trello Clone</div>
            </div>
            <div class="right">
                <div class="btn"><i class="fas fa-plus"></i></div>
                <div class="btn"><i class="fas fa-info-circle"></i></div>
                <div class="btn"><i class="far fa-bell"></i></div>
                <div class="btn"><i class="fas fa-cog"></i></div>
                <div class="btn"><i class="fas fa-user-tie"></i></div>
            </div>
        </header>

        <!-- App Board -->
        <main class="app-board">
            <header class="board-header">
                <div class="left">
                    <div class="title">Your board title</div>
                    <div class="btn"><i class="far fa-star"></i></div>
                    <div class="btn">Personal</div>
                    <div class="btn btn-text"><i class="fas fa-lock"></i> Private</div>
                </div>
                <div class="right">
                    <div class="btn btn-text"><i class="fas fa-male"></i> Butler</div>
                    <div class="btn btn-text"><i class="fas fa-ellipsis-h"></i> Menu</div>
                </div>
            </header>

            <!-- Board -->
            <section class="board-body">
                <div class="wrap-lists">
                    <div class="board-col">
                        <div class="list">
                            <h4 class="list-title">List title</h4>
                            <div class="card">Card 1</div>
                            <div class="card">Card 2</div>
                            <div class="card">Card 3</div>
                            <div class="card">Card 4</div>
                            <div class="card">Card 5</div>
                            <div class="card">Card 6</div>
                            <div class="card">Card 7</div>
                            <div class="card">Card 8</div>
                            <div class="card">Card 9</div>
                            <div class="card">Card 10</div>
                            <a class="btn-list" href="#">+ Add another card</a>
                        </div>
                    </div>
                    <div class="board-col">
                        <div class="list">
                            <h4 class="list-title">List title</h4>
                            <div class="card">Card 1</div>
                            <div class="card">Card 2</div>
                            <div class="card">Card 3</div>
                            <div class="card">Card 4</div>
                            <div class="card">Card 5</div>
                            <div class="card">Card 6</div>
                            <a class="btn-list" href="#">+ Add another card</a>
                        </div>
                    </div>
                    <div class="board-col">
                        <div class="list">
                            <h4 class="list-title">List title</h4>
                            <div class="card">Card 1</div>
                            <div class="card">Card 2</div>
                            <div class="card">Card 3</div>
                            <div class="card">Card 4</div>
                            <a class="btn-list" href="#">+ Add another card</a>
                        </div>
                    </div>
                    <div class="board-col">
                        <div class="list">
                            <h4 class="list-title">List title</h4>
                            <div class="card">Card 1</div>
                            <div class="card">Card 2</div>
                            <div class="card">Card 3</div>
                            <div class="card">Card 4</div>
                            <div class="card">Card 5</div>
                            <div class="card">Card 6</div>
                            <div class="card">Card 7</div>
                            <a class="btn-list" href="#">+ Add another card</a>
                        </div>
                    </div>
                    <div class="board-col">
                        <div class="list">
                            <h4 class="list-title">List title</h4>
                            <div class="card">Card 1</div>
                            <div class="card">Card 2</div>
                            <div class="card">Card 3</div>
                            <a class="btn-list" href="#">+ Add another card</a>
                        </div>
                    </div>
                    <div class="board-col">
                        <div class="list">
                            <a class="btn-list" href="#">+ Add another list</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <!-- App Tint -->
        <div class="app-tint">
            <input type="color" id="app-color">
                <label for="app-color"><i class="fas fa-tint"></i></label>
        </div>
    </div>
// VARS
$white: #fff;
$black: #000;
$grid - gap: 7px;
$grid - gap - 2: 10px;
$main - font: Lato, sans - serif;

// UTILS
.btn {
    padding: .5rem;
    color: $white;
    background: rgba($white, .5);
    border - radius: 4px;
  &.btn - text i{
        margin - right: 0.25rem;
    }
}

// PROPS
:root {
    --app - col: #1976D2;
}

// GENERAL
body {
    font - family: $main - font;
    font - size: 16px;
}

// BASE LAYOUT
.app {
    display: grid;
    grid - template - rows: max - content auto;
    min - height: 100vh;
    background: var(--app - col);
}

// HEADER
.app - header {
    display: grid;
    grid - template - columns: 1fr 1fr 1fr;
    align - items: center;
    padding: 0.5rem;
  .left,
  .right {
        display: grid;
        grid - gap: $grid - gap;
    }
  .left {
        grid - template - columns: repeat(3, max - content);
    }
  .center {
        text - align: center;
    }
  .right {
        justify - content: end;
        grid - template - columns: repeat(5, max - content);
    }
  .logo {
        font - style: italic;
        font - size: 1.25em;
        color: $white;
    i {
            font - style: normal;
        }
    }
  .search {
        display: flex;
        justify - content: space - between;
        min - width: 200px;
    }
}

// BOARD
.app - board {
    display: grid;
    grid - template - rows: max - content auto;
    background: rgba($white, .5);
  .board - header {
        display: grid;
        grid - template - columns: repeat(2, auto);
        padding: .5rem;
    .left,
    .right {
            display: grid;
            grid - gap: $grid - gap;
            align - items: center;
      .btn {
                color: var(--app - col);
            }
        }
    .left {
            grid - template - columns: repeat(4, max - content);
        }
    .right {
            justify - content: end;
            grid - template - columns: repeat(2, max - content);
        }
    .title {
            font - weight: 700;
            font - size: 1.25em;
        }
    }
  .board - body {
        padding: 0 .5rem;
        overflow - y: hidden;
    .wrap - lists {
            display: grid;
            grid - auto - columns: 272px;
            grid - auto - flow: column;
            grid - gap: $grid - gap;
            height: calc(100 % - 16px);
            padding - bottom: .5rem;
            overflow - y: auto;
        }
    .list {
            display: grid;
            grid - auto - rows: max - content;
            grid - gap: $grid - gap - 2;
            padding: 0.5rem;
            font - size: 0.875em;
            background: rgba($white, .5);
            border - radius: 4px;
      .list - title {
                margin: 0;
            }
      .card {
                padding: 0.5rem;
                background: $white;
                border - radius: 4px;
                box - shadow: 0 1px 0 rgba($black, .2);
            }
      .btn - list {
                text - decoration: none;
                color: rgba($black, .5);
            }
        }
    }
}

// BG COLOR PICKER
.app - tint {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    input[type = "color"] {
        position: absolute;
        top: 0;
        left: 0;
        z - index: -1;
        opacity: 0;
    }
  label{
        font - size: 1.25em;
        color: var(--app - col);
        cursor: pointer;
    }
}

/**
 * Set App Tint
 */

// Refs
const root = document.documentElement,
    colorIn = document.getElementById('app-color');

// Color selection
colorIn.addEventListener('input', function () {
    const color = this.value;
    root.style.setProperty('--app-col', color);
})




    < !--Masthead -->
<header class="masthead">

	<div class="boards-menu">

		<button class="boards-btn btn"><i class="fab fa-trello boards-btn-icon"></i>Boards</button>

		<div class="board-search">
			<input type="search" class="board-search-input" aria-label="Board Search">
			<i class="fas fa-search search-icon" aria-hidden="true"></i>
		</div>

	</div>

	<div class="logo">

		<h1><i class="fab fa-trello logo-icon" aria-hidden="true"></i>Trello</h1>

	</div>

	<div class="user-settings">

		<button class="user-settings-btn btn" aria-label="Create">
			<i class="fas fa-plus" aria-hidden="true"></i>
		</button>

		<button class="user-settings-btn btn" aria-label="Information">
			<i class="fas fa-info-circle" aria-hidden="true"></i>
		</button>

		<button class="user-settings-btn btn" aria-label="Notifications">
			<i class="fas fa-bell" aria-hidden="true"></i>
		</button>

		<button class="user-settings-btn btn" aria-label="User Settings">
			<i class="fas fa-user-circle" aria-hidden="true"></i>
		</button>

	</div>

</header>
<!--End of masthead-- >


< !--Board info bar-- >
<section class="board-info-bar">

	<div class="board-controls">

		<button class="board-title btn">
			<h2>Web Development</h2>
		</button>

		<button class="star-btn btn" aria-label="Star Board">
			<i class="far fa-star" aria-hidden="true"></i>
		</button>

		<button class="personal-btn btn">Personal</button>

		<button class="private-btn btn"><i class="fas fa-briefcase private-btn-icon" aria-hidden="true"></i>Private</button>

	</div>

	<button class="menu-btn btn"><i class="fas fa-ellipsis-h menu-btn-icon" aria-hidden="true"></i>Show Menu</button>

</section>
<!--End of board info bar-- >

< !--Lists container-- >
<section class="lists-container">

	<div class="list">

		<h3 class="list-title">Tasks to Do</h3>

		<ul class="list-items">
			<li>Complete mock-up for client website</li>
			<li>Email mock-up to client for feedback</li>
			<li>Update personal website header background image</li>
			<li>Update personal website heading fonts</li>
			<li>Add google map to personal website</li>
			<li>Begin draft of CSS Grid article</li>
			<li>Read new CSS-Tricks articles</li>
			<li>Read new Smashing Magazine articles</li>
			<li>Read other bookmarked articles</li>
			<li>Look through portfolios to gather inspiration</li>
			<li>Create something cool for CodePen</li>
			<li>Post latest CodePen work on Twitter</li>
			<li>Listen to new Syntax.fm episode</li>
			<li>Listen to new CodePen Radio episode</li>
		</ul>

		<button class="add-card-btn btn">Add a card</button>

	</div>

	<div class="list">

		<h3 class="list-title">Completed Tasks</h3>

		<ul class="list-items">
			<li>Clear email inbox</li>
			<li>Finalise requirements for client web design</li>
			<li>Begin work on mock-up for client website</li>
		</ul>

		<button class="add-card-btn btn">Add a card</button>

	</div>

	<div class="list">

		<h3 class="list-title">Topics/Concepts to Revise</h3>

		<ul class="list-items">
			<li>HTML Elements</li>
			<li>HTML Form Validation</li>
			<li>HTML Structured Data</li>
			<li>Advanced CSS Selectors</li>
			<li>CSS Transforms</li>
			<li>CSS Animations</li>
			<li>CSS Flexbox</li>
			<li>CSS Grid</li>
			<li>CSS Methodologies (BEM, SMACSS etc.)</li>
			<li>SASS/SCSS</li>
			<li>Layout Fallbacks</li>
			<li>Responsive Design</li>
			<li>Design Patterns</li>
			<li>JavaScript Fundamentals</li>
			<li>JavaScript OOP</li>
			<li>JavaScript DOM Manipulation</li>
			<li>JavaScript Debugging Techniques</li>
			<li>Node Package Manager</li>
			<li>Grunt/Gulp</li>
			<li>GitHub</li>
			<li>Git Commands</li>
			<li>Web Accessibility</li>
			<li>Web Performance</li>
			<li>Web Hosting</li>
			<li>Browser Dev Tools</li>
			<li>Google Analytics</li>
			<li>Basic Photoshop/Sketch Usage</li>
		</ul>

		<button class="add-card-btn btn">Add a card</button>

	</div>

	<div class="list">

		<h3 class="list-title">Topics/Concepts to Learn</h3>

		<ul class="list-items">
			<li>HTML 5.2 New Features</li>
			<li>Responsive Images (picture element, srcset/sizes etc.)</li>
			<li>Serverless</li>
			<li>Variable Fonts</li>
			<li>Shadow DOM</li>
			<li>ES6+</li>
			<li>JSON & AJAX</li>
			<li>API's</li>
			<li>JavaScript Patterns</li>
			<li>JavaScript Testing</li>
			<li>jQuery</li>
			<li>SVG</li>
			<li>React JS</li>
			<li>Angular JS</li>
			<li>TypeScript</li>
			<li>Vue JS</li>
			<li>Node JS</li>
			<li>Webpack</li>
			<li>SEO Techniques</li>
			<li>HTML Emails</li>
			<li>WordPress</li>
			<li>Static Site Generators (Jekyll, Hugo, Gatsby etc.)</li>
		</ul>

		<button class="add-card-btn btn">Add a card</button>

	</div>

	<div class="list">

		<h3 class="list-title">Useful Websites for Learning</h3>

		<ul class="list-items">
			<li>Code Academy</li>
			<li>CodePen</li>
			<li>Codrops</li>
			<li>CSS-Tricks</li>
			<li>Free Code Camp</li>
			<li>Khan Academy</li>
			<li>Lynda</li>
			<li>Medium</li>
			<li>Mozilla Developer Network</li>
			<li>Stack Overflow</li>
			<li>Team Treehouse</li>
			<li>Tuts Plus</li>
			<li>Udemy</li>
			<li>WPSessions</li>
			<li>YouTube</li>
		</ul>

		<button class="add-card-btn btn">Add a card</button>

	</div>

	<div class="list">

		<h3 class="list-title">Web Dev YouTube Channels</h3>

		<ul class="list-items">
			<li>Adam Khoury</li>
			<li>Brad Hussey</li>
			<li>CSS-Tricks (Chris Coyier)</li>
			<li>Derek Banas</li>
			<li>DevTips (Travis Neilson)</li>
			<li>Free Code Camp</li>
			<li>Fun Fun Function (Mattias Petter Johansson)</li>
			<li>Google Chrome Developers</li>
			<li>Layout Land (Jen Simmons)</li>
			<li>Learn Code Academy</li>
			<li>Level Up Tuts (Scott Tolinski)</li>
			<li>Mackenzie Child</li>
			<li>Rachel Andrew</li>
			<li>The Net Ninja (Shaun Pelling)</li>
			<li>The New Boston (Bucky Roberts)</li>
			<li>Traversy Media (Brad Traversy)</li>
			<li>Wes Bos</li>
		</ul>

		<button class="add-card-btn btn">Add a card</button>

	</div>

	<div class="list">

		<h3 class="list-title">CodePen Ideas</h3>

		<ul class="list-items">
			<li>Something cool with CSS Grid</li>
			<li>Something cool with CSS Flexbox</li>
			<li>Something cool with CSS animations</li>
			<li>Something cool with CSS gradients</li>
			<li>Something cool with CSS pseudo-elements</li>
			<li>Something cool with SVG</li>
			<li>Something cool with JavaScript</li>
			<li>Something cool with all of the above</li>
		</ul>

		<button class="add-card-btn btn">Add a card</button>

	</div>

	<div class="list">

		<h3 class="list-title">Practise Website Ideas</h3>

		<ul class="list-items">
			<li>Airsoft/Paintballing Centre</li>
			<li>Bar/Pub</li>
			<li>Bicycle Shop/Repair</li>
			<li>Cafe/Coffee Shop</li>
			<li>Car Showroom/Garage/Repair/Parts</li>
			<li>Construction Company</li>
			<li>Fitness/Gym/Leisure Centre</li>
			<li>Nightclub</li>
			<li>Party Planning Company</li>
			<li>PC Build/Repair Service</li>
			<li>Portfolio/CV</li>
			<li>Real Estate/AirBnB</li>
			<li>Restaurant</li>
			<li>Skiing/Snowboarding Centre/Company</li>
			<li>Streaming Service for Movies/TV</li>
			<li>Streaming Service for Video Games</li>
			<li>Taxi Service</li>
			<li>Travel Agency</li>
			<li>Zoo/Safari Park</li>
		</ul>

		<button class="add-card-btn btn">Add a card</button>

	</div>

	<div class="list">

		<h3 class="list-title">JavaScript Project Ideas</h3>

		<ul class="list-items">
			<li>Analog Clock</li>
			<li>Basic Quiz</li>
			<li>Bill/Cost Splitter</li>
			<li>Countdown Timer</li>
			<li>Form Validator</li>
			<li>Geolocation (Find places near you etc.)</li>
			<li>Gif Search</li>
			<li>Note Taking App</li>
			<li>Random Name Picker</li>
			<li>Secret Message Encoder/Decoder</li>
			<li>Sortable Image Gallery</li>
			<li>Sortable Table</li>
			<li>Tip Calculator</li>
			<li>To-Do List</li>
			<li>Unit Converter</li>
		</ul>

		<button class="add-card-btn btn">Add a card</button>

	</div>

	<button class="add-list-btn btn">Add a list</button>

</section>
<!--End of lists container-- >

/*

All grid code is placed in a 'supports' rule (feature query) at the bottom of the CSS (Line 320). 
            
The 'supports' rule will only run if your browser supports CSS grid.

Flexbox is used as a fallback so that browsers which don't support grid will still recieve an identical layout.

*/

/* Base styles */

:root {
    font - size: 10px;
}

*,
*:: before,
*::after {
    box - sizing: border - box;
}

body {
    font - family: Arial, sans - serif;
    display: flex;
    flex - direction: column;
    background - color: #0079bf;
}

.btn {
    display: flex;
    justify - content: center;
    align - items: center;
    font: inherit;
    background: none;
    border: none;
    color: inherit;
    padding: 0;
    cursor: pointer;
}

:focus {
    outline - color: #fa0;
}

/* Masthead */

.masthead {
    flex - basis: 4rem;
    display: flex;
    align - items: center;
    padding: 0 0.8rem;
    background - color: #0067a3;
    box - shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
}

.masthead.btn {
    background - color: #4c94be;
    border - radius: 0.3rem;
    transition: background - color 150ms;
}

.masthead.btn:hover {
    background - color: #3385b5;
}

.boards - menu {
    display: flex;
    flex - shrink: 0;
}

.boards - btn {
    flex - basis: 9rem;
    font - size: 1.4rem;
    font - weight: 700;
    color: #fff;
    margin - right: 0.8rem;
    padding: 0.6rem 0.8rem;
}

.boards - btn - icon {
    font - size: 1.7rem;
    padding - right: 1.2rem;
}

.board - search {
    flex - basis: 18rem;
    position: relative;
}

.board - search - input {
    height: 3rem;
    border: none;
    border - radius: 0.3rem;
    background - color: #4c94be;
    width: 100 %;
    padding: 0 3rem 0 1rem;
    color: #fff;
}

.board - search - input:hover {
    background - color: #66a4c8;
}

.search - icon {
    font - size: 1.5rem;
    position: absolute;
    top: 50 %;
    right: 0.8rem;
    transform: translateY(-50 %) rotate(90deg);
    color: #fff;
}

.logo {
    flex: 1;
    font - family: "Courgette", cursive;
    font - size: 2.2rem;
    font - weight: 700;
    color: rgba(255, 255, 255, 0.5);
    margin: 0 2rem;
    transition: color 150ms;
    text - align: center;
    white - space: nowrap;
    cursor: pointer;
}

.logo:hover {
    color: rgba(255, 255, 255, 0.8);
}

.logo - icon {
    padding - right: 0.4rem;
}

.user - settings {
    display: flex;
    height: 3rem;
    color: #fff;
}

.user - settings - btn {
    font - size: 1.5rem;
    width: 3rem;
    margin - right: 0.8rem;
}

.user - settings - btn: last - of - type {
    margin - right: 0;
}

/* Board info bar */

.board - info - bar {
    flex - basis: 3rem;
    display: flex;
    align - items: center;
    justify - content: space - between;
    margin: 0.8rem 0;
    padding: 0 1rem;
    color: #f6f6f6;
}

.board - controls {
    display: flex;
}

.board - controls.btn {
    margin - right: 1rem;
}

.board - controls.btn: last - of - type {
    margin - right: 0;
}

.board - info - bar.btn {
    font - size: 1.4rem;
    font - weight: 400;
    transition: background - color 150ms;
    padding: 0 0.6rem;
    border - radius: 0.3rem;
    height: 3rem;
}

.board - info - bar.btn:hover {
    background - color: #006aa8;
}

.private - btn - icon,
.menu - btn - icon {
    padding - right: 0.6rem;
    white - space: nowrap;
}

.board - title h2 {
    font - size: 1.8rem;
    font - weight: 700;
    white - space: nowrap;
}

/* Lists */

.lists - container:: -webkit - scrollbar {
    height: 2.4rem;
}

.lists - container:: -webkit - scrollbar - thumb {
    background - color: #66a3c7;
    border: 0.8rem solid #0079bf;
    border - top - width: 0;
}

.lists - container {
    display: flex;
    align - items: start;
    padding: 0 0.8rem 0.8rem;
    overflow - x: auto;
    height: calc(100vh - 8.6rem);
}

.list {
    flex: 0 0 27rem;
    display: flex;
    flex - direction: column;
    background - color: #e2e4e6;
    max - height: calc(100vh - 11.8rem);
    border - radius: 0.3rem;
    margin - right: 1rem;
}

.list: last - of - type {
    margin - right: 0;
}

.list - title {
    font - size: 1.4rem;
    font - weight: 700;
    color: #333;
    padding: 1rem;
}

.list - items {
    flex: 1;
    display: flex;
    flex - direction: column;
    align - content: start;
    padding: 0 0.6rem 0.5rem;
    overflow - y: auto;
}

.list - items:: -webkit - scrollbar {
    width: 1.6rem;
}

.list - items:: -webkit - scrollbar - thumb {
    background - color: #c4c9cc;
    border - right: 0.6rem solid #e2e4e6;
}

.list - items li {
    font - size: 1.4rem;
    font - weight: 400;
    line - height: 1.3;
    background - color: #fff;
    padding: 0.65rem 0.6rem;
    color: #4d4d4d;
    border - bottom: 0.1rem solid #ccc;
    border - radius: 0.3rem;
    margin - bottom: 0.6rem;
    word - wrap: break-word;
    cursor: pointer;
}

.list - items li: last - of - type {
    margin - bottom: 0;
}

.list - items li:hover {
    background - color: #eee;
}

.add - card - btn {
    display: block;
    font - size: 1.4rem;
    font - weight: 400;
    color: #838c91;
    padding: 1rem;
    text - align: left;
    cursor: pointer;
}

.add - card - btn:hover {
    background - color: #cdd2d4;
    color: #4d4d4d;
    text - decoration: underline;
}

.add - list - btn {
    flex: 0 0 27rem;
    display: block;
    font - size: 1.4rem;
    font - weight: 400;
    background - color: #006aa7;
    color: #a5cae0;
    padding: 1rem;
    border - radius: 0.3rem;
    cursor: pointer;
    transition: background - color 150ms;
    text - align: left;
}

.add - list - btn:hover {
    background - color: #005485;
}

.add - card - btn:: after,
.add - list - btn::after {
    content: '...';
}

/*

The following rule will only run if your browser supports CSS grid.

Remove or comment-out the code block below to see how the browser will fall-back to flexbox styling. 

*/

@supports(display: grid) {
    body {
        display: grid;
        grid - template - rows: 4rem 3rem auto;
        grid - row - gap: 0.8rem;
    }

    .masthead {
        display: grid;
        grid - template - columns: auto 1fr auto;
        grid - column - gap: 2rem;
    }

    .boards - menu {
        display: grid;
        grid - template - columns: 9rem 18rem;
        grid - column - gap: 0.8rem;
    }

    .user - settings {
        display: grid;
        grid - template - columns: repeat(4, auto);
        grid - column - gap: 0.8rem;
    }

    .board - controls {
        display: grid;
        grid - auto - flow: column;
        grid - column - gap: 1rem;
    }

    .lists - container {
        display: grid;
        grid - auto - columns: 27rem;
        grid - auto - flow: column;
        grid - column - gap: 1rem;
    }

    .list {
        display: grid;
        grid - template - rows: auto minmax(auto, 1fr) auto;
    }

    .list - items {
        display: grid;
        grid - row - gap: 0.6rem;
    }

    .logo,
    .list,
    .list - items li,
    .boards - btn,
    .board - info - bar,
    .board - controls.btn,
    .user - settings - btn {
        margin: 0;
    }
}




https://codepen.io/mgiulio/pen/PjxNpX





<div id="main">
  <div class="list">
    <div class="title removable editable">This is a list</div>
    <div class="content">
      <div class="card removable editable">This is a card</div>
            <div class="card removable editable">This is a card</div>
            <div class="card removable editable">This is a card</div>
            <div class="card removable editable">This is a card</div>
            <div class="card removable editable">This is a card</div>
            <div class="card removable editable">This is a card</div>
            <div class="card removable editable">This is a card</div>
            <div class="card removable editable">This is a card</div>
            <div class="card removable editable">This is a card</div>      <div class="card removable editable">This is a card</div>
            <div class="card removable editable">This is a card</div>
      <div class="card removable editable" style="">Look, another card!</div>
    </div>
    <div class="add-card editable">Add another card</div>
  </div>
  <div class="list">
    <div class="title removable editable">Another list</div>
    <div class="content">
      <div class="card removable editable">Hello world!</div>
    </div>
    <div class="add-card editable">Add another card</div>
  </div>
  <div class="list">
    <div class="title removable editable">Empty list</div>
    <div class="content"></div>
    <div class="add-card editable">Add another card</div>
  </div>
</div>

<div class="add-list">
  <div class="title editable">Add another list</div>
</div>
body {
    font - family: sans - serif;
    color: #172b4d;
    background - color: #00A3E0;
    display: flex;
    align - items: start;
}

div {
    border - radius: 3px;
}

#main {
    display: flex;
    align - items: start;
}

.title {
    font - weight: 600;
    margin: 7px;
    padding: 10px;
}

.editable {
    user - select: none;
    outline: none;
    display: flex;
    justify - content: space - between;
}

.editing {
    background: white;
    color: #172b4d!important;
    box - shadow:inset 0px 0px 0px 2px #0279bf;
}

.editing:hover {
    background: white!important;
}

.card {
    background: white;
    border - bottom: 1px solid #aaa;
    margin: 7px;
    padding: 10px;
    cursor: pointer!important;
}

.list {
    /*   padding: 7px; */
    min - width: 280px;
    margin: 10px 5px;
    position: relative;
    background: #dfe1e6;
}


.add - list {
    min - width: 280px;
    margin: 10px 5px;
    position: relative;
    background: rgba(0, 0, 0, .12);
    color: hsla(0, 0 %, 100 %, .8);
}

.ghost {
    opacity: .1;
    color: #000;
    background - color: #000;
}

.add - card {
    width: calc(100 % - 35px);
    display: inline - block;
    padding: 10px;
    margin - top: 0px;
    color: gray;
    text - decoration: none;
    margin: 7px;
    padding: 10px;
    /*   border-bottom: 1px solid #dfe1e6; */
}

.add - card:hover {
    background - color: rgba(9, 30, 66, .13);
}

.del {
    font - weight: 600;
    color: gray;
}
.content {
    border - bottom: 1px solid #cecece;
}
var main = document.querySelector('#main');

var list = Sortable.create(main, {
    group: 'list',
    sort: true,
    filter: '.add-card',
    draggable: '.list',
    ghostClass: "ghost",
    dragoverBubble: true,
});

function initContent() {
    var dropzones = document.querySelectorAll('.content');

    for (item of dropzones) {
        Sortable.create(item, {
            group: 'card',
            sort: true,
            draggable: '.card',
            ghostClass: "ghost",
        });
    }
}

initContent();

var inputs = document.querySelectorAll('textaread');

for (item of inputs) {
    item.addEventListener('blur', inputBlurHandler);
}

function inputBlurHandler(e) {
    this.classList.add('inactive');
    this.disabled = true;
    this.classList.remove('active');
    list.options.disabled = false;
}

var body = document.querySelector('body');

body.addEventListener('click', bodyClickHandler);

function bodyClickHandler(e) {
    elMouseLeaveHandler(e);
    var el = e.target;
    var isCard = el.classList.contains('card');
    var isTitle = el.classList.contains('title');
    var isInactive = el.classList.contains('inactive');
    var isEditable = el.classList.contains('editable');
    var editing = el.classList.contains('editing');

    if (isCard && isInactive) {
        list.options.disabled = true;
        el.disabled = false;
        el.classList.remove('inactive');
        el.classList.add('active');
        el.select();
    }

    if (isTitle && isInactive) {
        list.options.disabled = true;
        el.disabled = false;
        el.classList.remove('inactive');
        el.classList.add('active');
        el.select();
    }

    if (isEditable && !editing) {
        el.contentEditable = true;
        el.focus();
        document.execCommand('selectAll', false, null);
        el.addEventListener('blur', elBlurHandler);
        el.addEventListener('keypress', elKeypressHandler);
        el.classList.add('editing');

        if (el.parentElement.className === 'add-list') {
            el.parentElement.className = 'list initial';
        }
    }
}

function elKeypressHandler(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        e.target.blur();
    }

    var el = e.target;
    if (el.classList.contains('add-card')) {
        el.classList.add('pending');
    }


    if (el.parentElement.className === 'list initial') {
        el.parentElement.className = 'list pending';
    }

    // el.removeEventListener('keypress', elKeypressHandler);
}

function elBlurHandler(e) {
    var el = e.target;
    el.contentEditable = false;
    el.classList.remove('editing');

    if (el.classList.contains('pending')) {
        el.className = 'card removable editable';
        var newEl = document.createElement('div');
        newEl.className = 'add-card editable';
        var text = document.createTextNode('Add another card');
        newEl.appendChild(text);
        el.parentNode.appendChild(newEl);

        el.parentNode.querySelector('.content').appendChild(el);
    }

    if (el.parentElement.className === 'list initial') {
        el.parentElement.className = 'add-list';
    }

    if (el.parentElement.className === 'list pending') {
        el.parentElement.className = 'list';
        el.className = 'title removable editable';
        var newContent = document.createElement('div');
        newContent.className = 'content';
        el.parentElement.appendChild(newContent);

        var newEl = document.createElement('div');
        newEl.className = 'add-card editable';
        var text = document.createTextNode('Add another card');
        newEl.appendChild(text);
        el.parentNode.appendChild(newEl);

        document.querySelector('#main').appendChild(el.parentElement);

        initContent();

        var addList = document.createElement('div');
        addList.className = 'add-list';
        var title = document.createElement('div');
        title.className = 'title editable';
        var text = document.createTextNode('Add another list');
        title.appendChild(text);
        addList.appendChild(title);
        document.querySelector('body').appendChild(addList);
    }

    initDelete();
}

function initDelete() {
    var editables = document.querySelectorAll('.editable');

    for (item of editables) {
        item.addEventListener('mouseenter', elMouseEnterHandler);
        item.addEventListener('mouseleave', elMouseLeaveHandler);
    }
}

initDelete();

function elMouseEnterHandler(e) {
    var el = e.target;
    var isRemovable = el.classList.contains('removable');

    if (isRemovable) {
        var del = document.createElement('span');
        del.className = 'del';
        del.innerHTML = '&times;';
        el.appendChild(del);

        el.addEventListener('click', deleteHandler);
    }
}


function elMouseLeaveHandler(e) {
    var del = e.target.querySelector('span');
    if (del) e.target.removeChild(del);
}

function deleteHandler(e) {
    var parent = e.target.parentElement;

    if (parent.classList.contains('card')) {
        parent.parentElement.removeChild(parent);
    }

    if (parent.classList.contains('title')) {
        parent.parentElement.parentElement.removeChild(parent.parentElement);
    }
}