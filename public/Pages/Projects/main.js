import { GetProjects, InsertProject } from "../../data/index.js";
import { checkSession } from "../checkAuth.js";
import { createProjectCard } from "./components/projectCard.js";

await checkSession()

const modal = document.querySelector('#modal-create-project')
document.querySelector('#add-project').addEventListener("click", () => modal.showModal())

document.getElementById('gradient').addEventListener('change', function () {
  const gradientPreview = document.getElementById('gradientPreview');
  const selectedGradient = this.value;
  gradientPreview.className = `w-full h-8 rounded-md mt-2 ${selectedGradient}`;
});

const projects = await GetProjects()
document.querySelector("#projects-container").append(...projects.map(({ title, bgColor, id, }) => createProjectCard({ title, bgColor, id })))


modal.querySelector("#project-form").addEventListener("submit", async (event) => {
  event.preventDefault()
  const project = await InsertProject(Object.fromEntries(new FormData(event.target)))
  console.log(project)
  document.querySelector("#projects-container").append(createProjectCard(project))
  modal.close()
})