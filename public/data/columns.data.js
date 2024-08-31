export const insertColumn = async (data) => {
  try {
    const response = await fetch('/scene/', {
      method: 'POST',
      credentials: 'include',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (!response.ok) throw result;

    return result.data;
  } catch (error) {
    console.error('Error durante la inserción de la columna:', error);
    throw new Error('Error during column insertion');
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