export async function fetchSessionStatus() {
  try {
    const response = await fetch('/auth/verify', {
      method: 'GET',
      credentials: 'include'
    });

    const message = await response.text();
    if (!response.ok) console.error(message)

    const isAuthenticated = response.ok;

    return { isAuthenticated, message };
  } catch (error) {
    console.error('Error during session verification:', error);
    return { isAuthenticated: false, message: null };
  }
}

export async function loginRequest(email, password) {
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) throw await response.json()

  } catch (error) {
    console.error('Error durante la solicitud de inicio de sesión:', error);
    throw new Error('An error occurred during login request.');
  }
}

export async function registerRequest(email, password) {
  try {
    const response = await fetch('/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) throw await response.json()

  } catch (error) {
    console.error('Error durante la solicitud de registro:', error);
    throw new Error('An error occurred during registration request.');
  }
}

export async function logoutUser() {
  try {
    const response = await fetch('/auth/logout', {
      method: 'POST',
      credentials: 'include'
    });

    if (!response.ok) throw await response.json()

  } catch (error) {
    console.error('Error durante la solicitud de inicio de sesión:', error);
    throw new Error('An error occurred during logout request.');
  }
}
