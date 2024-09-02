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
  const response = await fetch('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) throw await response.json()
}

export async function registerRequest(email, password) {
  const response = await fetch('/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) throw await response.json()
}

export async function logoutUser() {
  const response = await fetch('/auth/logout', {
    method: 'POST',
    credentials: 'include'
  });

  if (!response.ok) throw await response.json()
}
