import { GetProjects } from "../../../data/index.js";

export async function getCurrentProject() {
  const projects = await GetProjects();
  const projectId = new URLSearchParams(location.search).get("id");

  const project = projects.find(project => project.id == projectId);
  const user = null; // Aquí se puede ajustar según cómo se obtenga el usuario

  if (!user) console.error('User not found');
  if (!project) console.error('Project not found');

  return { project, user };
}