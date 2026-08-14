import { useState, useEffect } from "react";

import { ActualizarFlower } from "../Services/Api";

function FormularioUpdate({

    flowerEditar,
    cargarFlowers,
    cerrarFormularioUpdate

}) {

    const [nombre, setNombre] = useState("");
    const [color, setColor] = useState("");
    const [tamaño, setTamaño] = useState("");
    const [significado, setSignificado] = useState("");
    const [origen, setOrigen] = useState("");

    useEffect(() => {

        if (flowerEditar) {

            setNombre(flowerEditar.nombre);
            setColor(flowerEditar.color);
            setTamaño(flowerEditar.tamaño);
            setSignificado(flowerEditar.significado);
            setOrigen(flowerEditar.origen);

        }

    }, [flowerEditar]);

    const actualizar = async (e) => {

        e.preventDefault();

        try {

            const flowerActualizada = {

                nombre,
                color,
                tamaño,
                significado,
                origen

            };

            await ActualizarFlower(

                flowerEditar.id,
                flowerActualizada

            );

            cargarFlowers();

            cerrarFormularioUpdate();

        } catch (error) {

            console.error(error);

        }

    };

    if (!flowerEditar) return null;

    return (

        <div className="bg-white rounded-[35px] shadow-xl p-10 border border-[#ffd6e7]">

            <form
                onSubmit={actualizar}
                className="space-y-5"
            >

                <h2 className="text-3xl font-bold text-[#db2777] text-center">
                    Actualizar Flower 🌷
                </h2>

                <input
                    type="text"
                    value={nombre}
                    onChange={(e) =>
                        setNombre(e.target.value)
                    }
                    className="w-full border border-[#ffd6e7] rounded-2xl px-5 py-4"
                />

                <input
                    type="text"
                    value={color}
                    onChange={(e) =>
                        setColor(e.target.value)
                    }
                    className="w-full border border-[#ffd6e7] rounded-2xl px-5 py-4"
                />

                <input
                    type="text"
                    value={tamaño}
                    onChange={(e) =>
                        setTamaño(e.target.value)
                    }
                    className="w-full border border-[#ffd6e7] rounded-2xl px-5 py-4"
                />

                <textarea
                    value={significado}
                    onChange={(e) =>
                        setSignificado(e.target.value)
                    }
                    className="w-full border border-[#ffd6e7] rounded-2xl px-5 py-4"
                />

                <input
                    type="text"
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
                    Actualizar Flower 🌸
                </button>

            </form>

        </div>

    );
}

export default FormularioUpdate;
