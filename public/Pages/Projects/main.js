import { createConfirmationModal } from "../../components/confirmModal.js";
import { createProjectCard } from "../../components/projectCard.js";
import { createTextConfirmationModal } from "../../components/textConfirmationModal.js";
import { fetchSessionStatus, logoutUser } from "../../data/auth.data.js";
import { deleteProject, fetchProjects, upsertProject } from "../../data/projects.data.js";

try {
  const { isAuthenticated, message } = await fetchSessionStatus();

  if (!isAuthenticated) {
    window.location.assign('/pages/sign-in');
  }
} catch (error) {
  alert(`Error: ${error.message}`);
}

const $modal = document.querySelector('#modal-project')
const $form = $modal.querySelector("#project-form")
const logoutBtn = document.querySelector('#logout')
const addProjectBtn = document.querySelector('#add-project')
const gradientSelect = document.getElementById('gradient')
const $projectsContainer = document.querySelector("#projects-container")

$modal.addEventListener("close", (event) => { $form.reset() });
logoutBtn.addEventListener("click", async () => {
  try {
    await logoutUser()
    window.location.assign('/');
  } catch (error) {
    alert(error.message);
  }
})

addProjectBtn.addEventListener("click", () => $modal.showModal())

gradientSelect.addEventListener('change', (e) => {
  const $gradientPreview = document.getElementById('gradientPreview');
  const selectedGradient = e.target.value;
  $gradientPreview.className = `w-full h-8 rounded-md mt-2 ${selectedGradient}`;
});

const projects = await fetchProjects()

$projectsContainer.append(...projects.map(createProjectCardElement))


$form.addEventListener("submit", async (event) => {
  event.preventDefault()
  try {
    const formData = Object.fromEntries(new FormData(event.target));
    const newProject = await upsertProject(formData);

    const $existingProject = document.querySelector(`[data-id="${newProject.id}"]`);
    const $newProjectCard = createProjectCardElement(newProject);

    if ($existingProject) {
      $projectsContainer.replaceChild($newProjectCard, $existingProject);
      const index = projects.findIndex(project => project.id === newProject.id);
      projects.splice(index, 1, newProject)
    } else {
      $projectsContainer.append($newProjectCard);
      projects.push(newProject)
    }
    $modal.close();
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
})


function createProjectCardElement(project) {
  const $project = createProjectCard(project)
  $project.goButton.href = "project?id=" + project.id
  $project.editButton.addEventListener("click", (event) => {
    $form.elements['id'].value = project.id;
    $form.elements['title'].value = project.title;
    $form.elements['bgColor'].value = project.bgColor;
    $modal.showModal()
  })
  $project.deleteButton.addEventListener("click", async (event) => {
    //TODO  message: `Estas seguro de eliminar ${project.title} con ${project.stages?.length} stages y ${project.stages.reduce((acc, c) => acc + c.tickets?.length, 0)} tiquetes?`
    const $confirm = createConfirmationModal({
      title: 'Confirm Action',
      message: `Estas seguro de eliminar ${project.title}?`
    });
    $projectsContainer.append($confirm.modal)
    $confirm.modal.show()
    $confirm.confirmButton.addEventListener("click", () => {




      const $textModal = createTextConfirmationModal({
        title: 'Confirm Deletion',
        message: `Please type "${project.title}" to confirm that you want to delete this item.`,
        requiredText: project.title
      });
      $projectsContainer.append($textModal.modal)
      $textModal.modal.show()
      $textModal.inputField.addEventListener('input', () => {
        $textModal.confirmButton.disabled = $textModal.inputField.value !== project.title;
      });
      $textModal.confirmButton.addEventListener("click", async () => {
        if ($textModal.inputField.value === project.title) {
          try {
            await deleteProject(project.id)
            $project.box.remove()
          } catch (error) {
            alert(`Error: ${error.message}`);
          }
        }

      })

      $textModal.cancelButton.addEventListener("click", async () => {
        $textModal.modal.remove()
      })

    })
    $confirm.cancelButton.addEventListener("click", async () => {
      $confirm.modal.remove()
    })

  })
  return $project.box
}