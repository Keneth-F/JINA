import { GetProjects } from "../../../data/index.js";
import { checkSession } from "../../checkAuth.js";

export async function getCurrentProject() {
  const projects = await GetProjects();
  const projectId = new URLSearchParams(location.search).get("id");

  const project = projects.find(project => project.id == projectId);
  console.log(project)
  const user = await checkSession();

  if (!user) console.error('User not found');
  if (!project) console.error('Project not found');

  return { project, user };
}