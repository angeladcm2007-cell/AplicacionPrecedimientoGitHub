function Navegacion() {

    return (

        <>

            <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-[#ffd6e7] shadow-lg">

                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* LOGO */}
                    <div className="flex items-center gap-3">

                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f9a8d4] to-[#f472b6] flex items-center justify-center shadow-md">

                            <span className="text-2xl">
                                🌸
                            </span>

                        </div>

                        <div>

                            <h1 className="text-2xl font-black text-[#db2777] tracking-wide">
                                Floricultura
                            </h1>

                            <p className="text-xs text-[#f472b6] tracking-[3px] uppercase">
                                Pink Garden
                            </p>

                        </div>

                    </div>


                    {/* LINKS */}
                    <div className="hidden md:flex items-center gap-3">

                        <a
                            href="#"
                            className="px-5 py-2 rounded-full text-[#be185d] font-semibold hover:bg-[#ffe4ef] hover:text-[#ec4899] transition duration-300"
                        >
                            Inicio
                        </a>

                        <a
                            href="#"
                            className="px-5 py-2 rounded-full text-[#be185d] font-semibold hover:bg-[#ffe4ef] hover:text-[#ec4899] transition duration-300"
                        >
                            Flores
                        </a>

                        <a
                            href="#"
                            className="px-5 py-2 rounded-full text-[#be185d] font-semibold hover:bg-[#ffe4ef] hover:text-[#ec4899] transition duration-300"
                        >
                            Catálogo
                        </a>

                        <a
                            href="#"
                            className="px-5 py-2 rounded-full text-[#be185d] font-semibold hover:bg-[#ffe4ef] hover:text-[#ec4899] transition duration-300"
                        >
                            Contacto
                        </a>

                    </div>


                    {/* BOTÓN */}
                    <button className="bg-gradient-to-r from-[#f472b6] to-[#ec4899] hover:scale-105 transition duration-300 text-white font-bold px-6 py-3 rounded-full shadow-lg">

                        Explorar 🌷

                    </button>

                </div>

            </nav>

        </>

    );

}

export default Navegacion;