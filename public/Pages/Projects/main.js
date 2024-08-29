import { GetProjects } from "../../data/index.js";
import { createProjectCard } from "./components/projectCard.js";
document.querySelector('#add-project').addEventListener("click", () => {
  const modal = document.querySelector('#modal-create-project')
  modal.showModal()

})

document.getElementById('gradient').addEventListener('change', function () {
  const gradientPreview = document.getElementById('gradientPreview');
  const selectedGradient = this.value;
  gradientPreview.className = `w-full h-8 rounded-md mt-2 ${selectedGradient}`;
});

const projects = await GetProjects()
document.querySelector("#projects-container").append(...projects.map(({ title, bgColor }) => createProjectCard(title, bgColor)))