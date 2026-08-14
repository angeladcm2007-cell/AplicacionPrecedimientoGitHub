import { useState } from "react";

import {
    LoginUsuario,
    RegistrarUsuario
} from "../Services/Api";


export default function Login({ setToken }) {

    // =========================
    // LOGIN / REGISTER
    // =========================
    const [modoRegistro, setModoRegistro] = useState(false);



    // =========================
    // ENVIAR FORMULARIO
    // =========================
    async function manejarFormulario(e) {

        e.preventDefault();

        const name = e.target.name?.value;

        const email = e.target.email.value;

        const password = e.target.password.value;



        try {

            let data;



            // REGISTER
            if (modoRegistro) {

                data = await RegistrarUsuario(
                    name,
                    email,
                    password
                );

            }

            // LOGIN
            else {

                data = await LoginUsuario(
                    email,
                    password
                );

            }



            console.log(data);



            if (data.token) {

                localStorage.setItem("token", data.token);

                setToken(data.token);

                alert(
                    modoRegistro
                        ? "Cuenta creada correctamente 🌸"
                        : "Bienvenido nuevamente 🌷"
                );

            } else {

                alert(data.message || "Error");

            }

        } catch (error) {

            console.log(error);

            alert("Ocurrió un error");

        }

    }


return (

    <section className="min-h-screen bg-[#fffdff] flex items-center justify-center px-6 py-12 relative overflow-hidden">

        {/* FONDO */}
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#ffe4ef]/50 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>

        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#fbcfe8]/40 rounded-full blur-3xl translate-x-28 translate-y-28"></div>



        {/* CONTENEDOR */}
        <div className="relative w-full max-w-6xl bg-white border border-[#f8d7e5] rounded-[45px] overflow-hidden shadow-[0_30px_90px_rgba(190,24,93,0.08)] grid lg:grid-cols-2">


            {/* PANEL LOGIN */}
            <div className="flex items-center justify-center px-8 md:px-16 py-14 bg-white relative">

                <div className="w-full max-w-md">

                    {/* LOGO */}
                    <div className="mb-12">

                        <div className="w-20 h-20 rounded-[28px] bg-gradient-to-br from-[#f472b6] to-[#db2777] flex items-center justify-center shadow-lg mb-6">

                            <span className="text-4xl">
                                🌷
                            </span>

                        </div>

                        <p className="uppercase tracking-[4px] text-xs font-bold text-[#ec4899] mb-4">

                            Flower Garden

                        </p>

                        <h1 className="text-5xl font-black text-[#881337] leading-tight mb-5">

                            {
                                modoRegistro
                                    ? "Crea una nueva cuenta"
                                    : "Bienvenida de nuevo"
                            }

                        </h1>

                        <p className="text-[#9d6680] text-lg leading-relaxed">

                            {
                                modoRegistro
                                    ? "Comienza a registrar flores, colores y significados en tu espacio floral."
                                    : "Ingresa para administrar tu colección floral en una experiencia elegante y moderna."
                            }

                        </p>

                    </div>



                    {/* FORMULARIO */}
                    <form
                        onSubmit={manejarFormulario}
                        className="space-y-6"
                    >

                        {
                            modoRegistro && (

                                <div>

                                    <label className="block text-sm font-semibold text-[#be185d] mb-3">

                                        Nombre completo

                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Angela Dayana"
                                        className="w-full h-16 rounded-2xl border border-[#f8d7e5] bg-[#fffafd] px-5 text-[#881337] outline-none focus:border-[#f472b6] focus:ring-4 focus:ring-[#ffe4ef] transition-all"
                                    />

                                </div>

                            )
                        }



                        <div>

                            <label className="block text-sm font-semibold text-[#be185d] mb-3">

                                Correo electrónico

                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="correo@ejemplo.com"
                                className="w-full h-16 rounded-2xl border border-[#f8d7e5] bg-[#fffafd] px-5 text-[#881337] outline-none focus:border-[#f472b6] focus:ring-4 focus:ring-[#ffe4ef] transition-all"
                            />

                        </div>



                        <div>

                            <label className="block text-sm font-semibold text-[#be185d] mb-3">

                                Contraseña

                            </label>

                            <input
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                className="w-full h-16 rounded-2xl border border-[#f8d7e5] bg-[#fffafd] px-5 text-[#881337] outline-none focus:border-[#f472b6] focus:ring-4 focus:ring-[#ffe4ef] transition-all"
                            />

                        </div>



                        {/* OPCIONES */}
                        <div className="flex items-center justify-between text-sm pt-1">

                            <label className="flex items-center gap-3 text-[#9d6680]">

                                <input
                                    type="checkbox"
                                    className="accent-[#ec4899] w-4 h-4"
                                />

                                Mantener sesión

                            </label>

                            <button
                                type="button"
                                className="text-[#be185d] font-semibold hover:underline"
                            >

                                Ayuda

                            </button>

                        </div>



                        {/* BOTÓN */}
                        <button
                            type="submit"
                            className="w-full h-16 rounded-2xl bg-gradient-to-r from-[#ec4899] to-[#be185d] hover:from-[#db2777] hover:to-[#9d174d] text-white font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >

                            {
                                modoRegistro
                                    ? "Crear Cuenta"
                                    : "Ingresar al sistema"
                            }

                        </button>

                    </form>



                    {/* SWITCH */}
                    <div className="mt-10 text-center text-[#9d6680]">

                        {
                            modoRegistro
                                ? "¿Ya tienes una cuenta?"
                                : "¿Todavía no tienes cuenta?"
                        }

                        <button
                            onClick={() =>
                                setModoRegistro(!modoRegistro)
                            }
                            className="ml-2 text-[#be185d] font-bold hover:underline"
                        >

                            {
                                modoRegistro
                                    ? "Iniciar sesión"
                                    : "Registrarme"
                            }

                        </button>

                    </div>

                </div>

            </div>



            {/* PANEL DERECHO */}
            <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-[#fff1f6] via-[#ffe4ef] to-[#ffd6e7] p-16 relative overflow-hidden">

                {/* EFECTOS */}
                <div className="absolute top-[-80px] right-[-80px] w-96 h-96 rounded-full bg-white/40 blur-3xl"></div>

                <div className="absolute bottom-[-90px] left-[-90px] w-[420px] h-[420px] rounded-full bg-[#ffffff50] blur-3xl"></div>



                {/* PARTE SUPERIOR */}
                <div className="relative z-10">

                    <div className="inline-flex items-center gap-3 bg-white/70 border border-white px-5 py-2 rounded-full shadow-sm mb-10">

                        <div className="w-2.5 h-2.5 rounded-full bg-[#ec4899] animate-pulse"></div>

                        <span className="text-xs tracking-[4px] uppercase font-bold text-[#be185d]">

                            Dashboard Floral

                        </span>

                    </div>



                    <h2 className="text-6xl font-black leading-[1.05] text-[#881337] mb-8">

                        {
                            modoRegistro
                                ? "Tu colección merece un lugar especial."
                                : "Organiza flores con estilo y elegancia."
                        }

                    </h2>



                    <p className="text-lg text-[#9d6680] leading-relaxed max-w-xl">

                        Flower Garden combina diseño moderno y organización inteligente para administrar flores, significados y detalles en un entorno visual delicado y profesional.

                    </p>

                </div>



                {/* CARDS */}
                <div className="relative z-10 grid grid-cols-2 gap-5 mt-16">

                    <div className="bg-white/70 backdrop-blur-md border border-white rounded-3xl p-6 shadow-sm">

                        <p className="text-sm uppercase tracking-[3px] text-[#ec4899] font-bold mb-3">

                            Colecciones

                        </p>

                        <h3 className="text-4xl font-black text-[#be185d] mb-2">

                            +500

                        </h3>

                        <p className="text-[#9d6680] leading-relaxed">

                            Flores registradas y organizadas.

                        </p>

                    </div>



                    <div className="bg-white/70 backdrop-blur-md border border-white rounded-3xl p-6 shadow-sm">

                        <p className="text-sm uppercase tracking-[3px] text-[#ec4899] font-bold mb-3">

                            Seguridad

                        </p>

                        <h3 className="text-4xl font-black text-[#be185d] mb-2">

                            JWT

                        </h3>

                        <p className="text-[#9d6680] leading-relaxed">

                            Acceso protegido y autenticación segura.

                        </p>

                    </div>

                </div>

            </div>

        </div>

    </section>

)
}