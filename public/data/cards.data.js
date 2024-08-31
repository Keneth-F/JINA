export const upsertCard = async (data) => {
  try {
    const method = data.id != -1 ? 'PUT' : 'POST';
    const url = data.id != -1 ? `/ticket/${id}` : '/ticket/';

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
    console.error(`Error durante la ${id ? 'actualización' : 'inserción'} de la tarjeta:`, error);
    throw new Error(`Error during card ${id ? 'update' : 'insertion'}`);
  }
}

