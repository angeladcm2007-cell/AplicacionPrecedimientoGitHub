// URL PRINCIPAL API
const URL = "http://localhost/api/flowers";


// =========================
// LOGIN
// =========================
export async function LoginUsuario(email, password) {

    try {

        const response = await fetch("http://localhost/api/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email,
                password
            })

        });

        const data = await response.json();

        if (data.token) {

            localStorage.setItem("token", data.token);

        }

        return data;

    } catch (error) {

        console.error("Error login:", error);

    }
}



// =========================
// REGISTER
// =========================
export async function RegistrarUsuario(name, email, password) {

    try {

        const response = await fetch("http://localhost/api/register", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name,
                email,
                password
            })

        });

        const data = await response.json();

        if (data.token) {

            localStorage.setItem("token", data.token);

        }

        return data;

    } catch (error) {

        console.error("Error register:", error);

    }
}



// =========================
// TOKEN
// =========================
function obtenerHeaders() {

    const token = localStorage.getItem("token");

    return {

        'Accept': 'application/json',

        'Content-Type': 'application/json',

        'Authorization': `Bearer ${token}`

    };
}



// =========================
// LISTAR FLORES
// =========================
export function ListarFlowers() {

    return fetch(URL, {

        method: 'GET',

        headers: obtenerHeaders()

    })

    .then((response) => response.json())

    .catch((error) => {

        console.error(
            "Error al listar:",
            error
        );

    });

}



// =========================
// INSERTAR FLOR
// =========================
export function InsertarFlower(datos) {

    return fetch(URL, {

        method: 'POST',

        headers: obtenerHeaders(),

        body: JSON.stringify(datos)

    })

    .then((response) => response.json())

    .catch((error) => {

        console.error(
            "Error al insertar:",
            error
        );

    });

}



// =========================
// ACTUALIZAR FLOR
// =========================
export function ActualizarFlower(id, datos) {

    return fetch(`${URL}/${id}`, {

        method: 'PUT',

        headers: obtenerHeaders(),

        body: JSON.stringify(datos)

    })

    .then((response) => response.json())

    .catch((error) => {

        console.error(
            "Error al actualizar:",
            error
        );

    });

}



// =========================
// ELIMINAR FLOR
// =========================
export function EliminarFlower(id) {

    return fetch(`${URL}/${id}`, {

        method: 'DELETE',

        headers: obtenerHeaders()

    })

    .then((response) => response.json())

    .catch((error) => {

        console.error(
            "Error al eliminar:",
            error
        );

    });

}