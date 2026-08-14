import { EliminarFlower } from "../Services/Api";

function ListarFlowers({

    flowers,
    cargarFlowers,
    seleccionarEditar

}) {

    const eliminar = async (id) => {

        try {

            await EliminarFlower(id);

            cargarFlowers();

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <div className="bg-gradient-to-br from-[#fff7fb] via-[#fff0f6] to-[#ffe4ef] rounded-[40px] p-8 shadow-[0_15px_40px_rgba(244,114,182,0.18)] border border-[#ffd6e7] overflow-x-auto">

            {/* ENCABEZADO */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

                <div>

                    <p className="uppercase tracking-[4px] text-[#f472b6] text-sm font-bold mb-2">
                        Flower Collection
                    </p>

                    <h2 className="text-5xl font-black text-[#db2777] leading-tight mb-3">
                        Catálogo Floral 🌸
                    </h2>

                    <p className="text-[#9d174d] text-lg max-w-2xl">
                        Administra tu colección de flores con un diseño elegante,
                        delicado y completamente organizado.
                    </p>

                </div>

                {/* BOTÓN */}
                <button
                    className="bg-gradient-to-r from-[#f9a8d4] to-[#f472b6] hover:scale-105 hover:shadow-xl text-white font-bold px-7 py-4 rounded-2xl transition duration-300"
                >
                    + Nueva Flower
                </button>

            </div>


            {/* TABLA */}
            <table className="min-w-full border-separate border-spacing-y-5">

                {/* CABECERA */}
                <thead>

                    <tr>

                        <th className="bg-[#ffd6e7] text-[#be185d] px-6 py-5 rounded-l-[25px] text-sm uppercase tracking-[2px] font-extrabold">
                            ID
                        </th>

                        <th className="bg-[#ffd6e7] text-[#be185d] px-6 py-5 text-sm uppercase tracking-[2px] font-extrabold">
                            Flower
                        </th>

                        <th className="bg-[#ffd6e7] text-[#be185d] px-6 py-5 text-sm uppercase tracking-[2px] font-extrabold">
                            Color
                        </th>

                        <th className="bg-[#ffd6e7] text-[#be185d] px-6 py-5 text-sm uppercase tracking-[2px] font-extrabold">
                            Tamaño
                        </th>

                        <th className="bg-[#ffd6e7] text-[#be185d] px-6 py-5 text-sm uppercase tracking-[2px] font-extrabold">
                            Significado
                        </th>

                        <th className="bg-[#ffd6e7] text-[#be185d] px-6 py-5 text-sm uppercase tracking-[2px] font-extrabold">
                            Origen
                        </th>

                        <th className="bg-[#ffd6e7] text-[#be185d] px-6 py-5 rounded-r-[25px] text-sm uppercase tracking-[2px] font-extrabold text-center">
                            Acciones
                        </th>

                    </tr>

                </thead>


                {/* CUERPO */}
                <tbody>

                    {

                        flowers?.length > 0 ? (

                            flowers.map((flower) => (

                                <tr
                                    key={flower.id}
                                    className="bg-white hover:scale-[1.01] hover:shadow-[0_10px_25px_rgba(244,114,182,0.15)] transition duration-300"
                                >

                                    {/* ID */}
                                    <td className="px-6 py-6 rounded-l-[25px] text-center">

                                        <div className="flex items-center justify-center">

                                            <span className="bg-[#ffe4ef] text-[#be185d] font-black px-4 py-2 rounded-full text-sm shadow-sm">
                                                #{flower.id}
                                            </span>

                                        </div>

                                    </td>


                                    {/* NOMBRE */}
                                    <td className="px-6 py-6">

                                        <div className="flex items-center gap-4">

                                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f9a8d4] to-[#f472b6] flex items-center justify-center text-white text-2xl shadow-md">
                                                🌸
                                            </div>

                                            <div>

                                                <h3 className="font-black text-[#db2777] text-lg">
                                                    {flower.nombre}
                                                </h3>

                                                <p className="text-[#9d174d] text-sm">
                                                    Flower registrada
                                                </p>

                                            </div>

                                        </div>

                                    </td>


                                    {/* COLOR */}
                                    <td className="px-6 py-6 text-[#7a284b] font-medium">
                                        {flower.color}
                                    </td>


                                    {/* TAMAÑO */}
                                    <td className="px-6 py-6">

                                        <span className="bg-[#fff0f6] text-[#be185d] px-4 py-2 rounded-full text-sm font-semibold">
                                            {flower.tamaño}
                                        </span>

                                    </td>


                                    {/* SIGNIFICADO */}
                                    <td className="px-6 py-6 max-w-[300px] text-[#7a284b] leading-relaxed">
                                        {flower.significado}
                                    </td>


                                    {/* ORIGEN */}
                                    <td className="px-6 py-6 text-[#7a284b] font-medium">
                                        {flower.origen}
                                    </td>


                                    {/* BOTONES */}
                                    <td className="px-6 py-6 rounded-r-[25px]">

                                        <div className="flex justify-center gap-4">

                                            {/* EDITAR */}
                                            <button

                                                onClick={() =>
                                                    seleccionarEditar(flower)
                                                }

                                                className="bg-[#ffe4ef] hover:bg-[#ffd6e7] text-[#be185d] font-bold px-5 py-3 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
                                            >
                                                ✏️ Editar
                                            </button>


                                            {/* ELIMINAR */}
                                            <button

                                                onClick={() =>
                                                    eliminar(flower.id)
                                                }

                                                className="bg-gradient-to-r from-[#f472b6] to-[#ec4899] hover:from-[#ec4899] hover:to-[#db2777] text-white font-bold px-5 py-3 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                                            >
                                                🗑 Eliminar
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan="7"
                                    className="py-20 text-center"
                                >

                                    <div className="flex flex-col items-center gap-5">

                                        <div className="text-7xl">
                                            🌷
                                        </div>

                                        <h3 className="text-3xl font-black text-[#db2777]">
                                            No hay flowers registradas
                                        </h3>

                                        <p className="text-[#9d174d] text-lg">
                                            Agrega tu primera flower para comenzar.
                                        </p>

                                    </div>

                                </td>

                            </tr>

                        )

                    }

                </tbody>

            </table>

        </div>

    );
}

export default ListarFlowers;