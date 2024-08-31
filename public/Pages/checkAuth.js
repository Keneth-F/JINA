export async function checkSession() {
  try {
    const response = await fetch('/auth/verify', {
      method: 'GET',
      credentials: 'include'
    });

    if (!response.ok) {
      window.location.assign('/pages/sign-in');
    }
    const res = await response.json()
    console.log(res)
    return res
  } catch (error) {
    console.error('Error al verificar la sesión:', error);
  }
}
export async function checkAlreadySession() {
  try {
    const response = await fetch('/auth/verify', {
      method: 'GET',
      credentials: 'include'
    });

    if (response.ok) {
      window.location.assign('/pages/projects');
    } else {
      // Manejar errores (ej. credenciales incorrectas)
      alert('Nombre de usuario o contraseña inválidos');
    }
  } catch (error) {
    console.error('Error al verificar la sesión:', error);
  }
}
