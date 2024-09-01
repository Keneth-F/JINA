export const upsertCard = async (data) => {
  try {
    const method = data.id != -1 ? 'PUT' : 'POST';
    const url = data.id != -1 ? `/ticket/${data.id}` : '/ticket/';

    const response = await fetch(url, {
      method,
      credentials: 'include',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (!response.ok) throw result;
    const [user, ...team] = result.data.team
    result.data.team = team
    return result.data;
  } catch (error) {
    console.error(`Error durante la ${data.id ? 'actualización' : 'inserción'} de la tarjeta:`, error);
    throw new Error(`Error during card ${data.id ? 'update' : 'insertion'}`);
  }
}

export const deleteCard = async (id) => {
  try {
    const response = await fetch(`/ticket/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    });

    const result = await response.json();
    if (!response.ok) throw result;

    return result.data;
  } catch (error) {
    console.error(`Error durante la eliminación de la tarjeta con ID ${id}:`, error);
    throw new Error('Error during card deletion');
  }
}

