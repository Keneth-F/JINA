export async function fetchProjects() {
  try {
    const response = await fetch('/project/', {
      method: 'GET',
      credentials: 'include'
    });


    const result = await response.json();
    if (!response.ok) throw result

    return result.data;
  } catch (error) {
    console.error('Error durante la solicitud de proyectos:', error);
    throw new Error('Error during fetch projects');
  }
}

export const upsertProject = async (data) => {
  try {
    const method = data.id >= 0 ? 'PUT' : 'POST';
    const endpoint = data.id >= 0 ? `/project/${data.id}` : '/project/';
    const response = await fetch(endpoint, {
      method: method,
      credentials: 'include',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (!response.ok) throw result;
    return result.data;
  } catch (error) {
    console.error('Error durante la operación upsert del proyecto:', error);
    throw new Error('Error during project upsert');
  }
}

export const deleteProject = async (id) => {
  try {
    const response = await fetch(`/project/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    });

    const result = await response.json();
    if (!response.ok) throw result;

    return result.data;
  } catch (error) {
    console.error('Error durante la eliminación del proyecto:', error);
    throw new Error('Error during project deletion');
  }
}

export const getProjectById = async (id) => {
  try {
    const response = await fetch(`/project/${id}`, {
      method: 'GET',
      credentials: 'include'
    });

    const result = await response.json();
    if (!response.ok) throw result;

    return result.data;
  } catch (error) {
    console.error(`Error durante la obtención del proyecto con ID ${id}:`, error);
    throw new Error('Error during fetching project by ID');
  }
}

