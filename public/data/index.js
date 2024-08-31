const labels = [
    {
        text: "high",
        bgColor: 'bg-error'
    },
    {
        text: "medium",
        bgColor: 'bg-warning'
    },
    {
        text: "normal",
        bgColor: 'bg-success'
    },
    {
        text: "low",
        bgColor: 'bg-info'
    }]
export const GetProjects = async () => {
    try {
        const response = await fetch('/project/', {
            method: 'GET',
            credentials: 'include'
        });

        if (response.ok) {
            const { data } = await response.json()
            console.log(data)
            return data
        } else {
            // Manejar errores (ej. credenciales incorrectas)
            alert('Nombre de usuario o contraseña inválidos');
            return []
        }
    } catch (error) {
        console.error('Error al verificar la sesión:', error);
        return []
    }
}

export const InsertProject = async (data) => {
    try {
        const response = await fetch('/project/', {
            method: 'POST',
            credentials: 'include',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const { data } = await response.json()
            return data
        } else {
            // Manejar errores (ej. credenciales incorrectas)
            alert('Nombre de usuario o contraseña inválidos');
            return []
        }
    } catch (error) {
        console.error('Error al verificar la sesión:', error);
        return []
    }
}
export const InsertColumn = async (data) => {
    try {
        const response = await fetch('/scene/', {
            method: 'POST',
            credentials: 'include',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const { data } = await response.json()
            return data
        } else {
            // Manejar errores (ej. credenciales incorrectas)
            alert('Nombre de usuario o contraseña inválidos');
            return []
        }
    } catch (error) {
        console.error('Error al verificar la sesión:', error);
        return []
    }

}

export const InsertCard = async (data) => {
    try {
        const response = await fetch('/ticket/', {
            method: 'POST',
            credentials: 'include',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const { data } = await response.json()
            return data
        } else {
            // Manejar errores (ej. credenciales incorrectas)
            alert('Nombre de usuario o contraseña inválidos');
            return []
        }
    } catch (error) {
        console.error('Error al verificar la sesión:', error);
        return []
    }

}