import { useState } from "react";

import { InsertarFlower } from "../Services/Api";

function FormularioF({ cargarFlowers }) {

    const [nombre, setNombre] = useState("");
    const [color, setColor] = useState("");
    const [tamaño, setTamaño] = useState("");
    const [significado, setSignificado] = useState("");
    const [origen, setOrigen] = useState("");


    const guardar = async (e) => {

        e.preventDefault();

        try {

            const nuevaFlower = {

                nombre,
                color,
                tamaño,
                significado,
                origen

            };

            await InsertarFlower(nuevaFlower);

            cargarFlowers();

            setNombre("");
            setColor("");
            setTamaño("");
            setSignificado("");
            setOrigen("");

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <form
            onSubmit={guardar}
            className="space-y-5"
        >

            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) =>
                    setNombre(e.target.value)
                }
                className="w-full border border-[#ffd6e7] rounded-2xl px-5 py-4"
            />

            <input
                type="text"
                placeholder="Color"
                value={color}
                onChange={(e) =>
                    setColor(e.target.value)
                }
                className="w-full border border-[#ffd6e7] rounded-2xl px-5 py-4"
            />

            <input
                type="text"
                placeholder="Tamaño"
                value={tamaño}
                onChange={(e) =>
                    setTamaño(e.target.value)
                }
                className="w-full border border-[#ffd6e7] rounded-2xl px-5 py-4"
            />

            <textarea
                placeholder="Significado"
                value={significado}
                onChange={(e) =>
                    setSignificado(e.target.value)
                }
                className="w-full border border-[#ffd6e7] rounded-2xl px-5 py-4"
            />

            <input
                type="text"
                placeholder="Origen"
                value={origen}
                onChange={(e) =>
                    setOrigen(e.target.value)
                }
                className="w-full border border-[#ffd6e7] rounded-2xl px-5 py-4"
            />

            <button
                type="submit"
                className="w-full bg-[#ec4899] hover:bg-[#db2777] text-white py-4 rounded-2xl font-bold"
            >
                Guardar Flower 🌸
            </button>

        </form>

    );
}

export default FormularioF;