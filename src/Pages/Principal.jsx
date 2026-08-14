function Principal() {

    return (

        <section className="relative overflow-hidden bg-gradient-to-br from-[#fff0f6] via-[#ffe4ef] to-[#ffd6e7] py-24">

            {/* CÍRCULOS DECORATIVOS */}
            <div className="absolute top-[-60px] left-[-60px] w-72 h-72 bg-[#f9a8d4]/30 rounded-full blur-3xl"></div>

            <div className="absolute bottom-[-80px] right-[-80px] w-80 h-80 bg-[#fbcfe8]/40 rounded-full blur-3xl"></div>


            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

                {/* TEXTO */}
                <div className="text-center md:text-left relative z-10">

                    <p className="uppercase tracking-[5px] text-[#ec4899] font-bold mb-4">
                        🌸 Naturaleza • Elegancia • Aroma
                    </p>

                    <h1 className="text-5xl md:text-6xl font-black text-[#be185d] leading-tight mb-6">

                        La magia de las flores
                        <span className="block text-[#f472b6]">
                            en cada detalle
                        </span>

                    </h1>

                    <p className="text-lg text-[#6b7280] leading-relaxed mb-8 max-w-xl">

                        Descubre una colección delicada y llena de vida.
                        Registra, administra y organiza tus flores favoritas
                        en una experiencia visual elegante y moderna.

                    </p>


                    {/* BOTONES */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

                        <a
                            href="#"
                            className="bg-gradient-to-r from-[#f472b6] to-[#ec4899] hover:scale-105 transition duration-300 text-white font-bold px-8 py-4 rounded-full shadow-xl"
                        >
                            Explorar Flores 🌷
                        </a>

                        <a
                            href="#"
                            className="bg-white/70 backdrop-blur-md border border-[#fbcfe8] hover:bg-white text-[#be185d] font-semibold px-8 py-4 rounded-full shadow-lg transition"
                        >
                            Ver Catálogo
                        </a>

                    </div>

                </div>


                {/* TARJETA DECORATIVA */}
                <div className="relative flex justify-center">

                    <div className="bg-white/70 backdrop-blur-lg border border-[#ffd6e7] rounded-[40px] shadow-2xl p-10 max-w-md w-full">

                        <div className="flex justify-center mb-6">

                            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#f9a8d4] to-[#f472b6] flex items-center justify-center shadow-xl">

                                <span className="text-6xl">
                                    🌸
                                </span>

                            </div>

                        </div>

                        <h2 className="text-3xl font-black text-[#db2777] text-center mb-4">
                            Floristería Bloom
                        </h2>

                        <p className="text-center text-[#6b7280] leading-relaxed mb-6">

                            Flores frescas, colores delicados y un diseño
                            pensado para transmitir elegancia y dulzura
                            en cada rincón de tu aplicación.

                        </p>

                        <div className="grid grid-cols-3 gap-4 text-center">

                            <div className="bg-[#fff0f6] rounded-2xl py-4 shadow-sm">

                                <h3 className="text-2xl font-black text-[#ec4899]">
                                    120+
                                </h3>

                                <p className="text-sm text-[#6b7280]">
                                    Flores
                                </p>

                            </div>

                            <div className="bg-[#fff0f6] rounded-2xl py-4 shadow-sm">

                                <h3 className="text-2xl font-black text-[#ec4899]">
                                    24h
                                </h3>

                                <p className="text-sm text-[#6b7280]">
                                    Frescura
                                </p>

                            </div>

                            <div className="bg-[#fff0f6] rounded-2xl py-4 shadow-sm">

                                <h3 className="text-2xl font-black text-[#ec4899]">
                                    100%
                                </h3>

                                <p className="text-sm text-[#6b7280]">
                                    Amor
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Principal;