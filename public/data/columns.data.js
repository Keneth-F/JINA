export const upsertColumn = async (data) => {
  try {
    const method = data.id != -1 ? 'PUT' : 'POST';
    const url = data.id != -1 ? `/scene/${data.id}` : '/scene/';

    const response = await fetch(url, {
      method,
      credentials: 'include',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (!response.ok) throw result;

    return result.data;
  } catch (error) {
    console.error(`Error durante la ${id ? 'actualización' : 'inserción'} de la columna:`, error);
    throw new Error(`Error during column ${id ? 'update' : 'insertion'}`);
  }
}


export const deleteColumn = async (id) => {
  try {
    const response = await fetch(`/scene/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    });

    const result = await response.json();
    if (!response.ok) throw result;

    return result.data;
  } catch (error) {
    console.error(`Error durante la eliminación de la columna con ID ${id}:`, error);
    throw new Error('Error during column deletion');
  }
}