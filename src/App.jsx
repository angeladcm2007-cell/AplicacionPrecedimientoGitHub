import { useEffect, useState } from 'react'

// COMPONENTES
import Navegacion from './Pages/Navegacion'
import Principal from './Pages/Principal'
import FormularioF from './Pages/FormularioF'
import FormularioUpdate from './Pages/FormularioUpdate'
import ListarFlowers from './Pages/ListarFlowers'
import Login from './Pages/Login'

// API
import {
  ListarFlowers as ObtenerFlowers
} from './Services/Api'

// ESTILOS
import './App.css'


function App() {

  // =========================
  // TOKEN
  // =========================
  const [token, setToken] = useState(
    localStorage.getItem("token")
  )


  // =========================
  // ESTADOS FLOWERS
  // =========================
  const [flowers, setFlowers] = useState([])

  const [flowerEditar, setFlowerEditar] = useState(null)



  // =========================
  // CARGAR FLOWERS
  // =========================
  const cargarFlowers = async () => {

    try {

      const respuesta = await ObtenerFlowers()

      setFlowers(respuesta)

    } catch (error) {

      console.error(
        "Error al cargar flowers:",
        error
      )

    }

  }



  // =========================
  // CERRAR UPDATE
  // =========================
  const cerrarFormularioUpdate = () => {

    setFlowerEditar(null)

  }



  // =========================
  // USE EFFECT
  // =========================
  useEffect(() => {

    if (token) {

      cargarFlowers()

    }

  }, [token])



  // =========================
  // LOGOUT
  // =========================
  const cerrarSesion = () => {

    localStorage.removeItem("token")

    setToken(null)

  }



  // =========================
  // SI NO HAY TOKEN
  // =========================
  if (!token) {

    return <Login setToken={setToken} />

  }



  // =========================
  // SI HAY TOKEN
  // =========================
  return (

    <div className="bg-[#fff7fb] min-h-screen font-sans">

      {/* HEADER */}
      <header className="relative overflow-hidden bg-gradient-to-r from-[#ffe4ef] via-[#ffd6e7] to-[#ffeaf4] py-10 rounded-b-[40px] shadow-xl border-b border-[#ffd1e3]">

        {/* EFECTOS */}
        <div className="absolute top-[-50px] left-[-50px] w-56 h-56 bg-white/40 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-60px] right-[-60px] w-64 h-64 bg-[#ffc2d1]/40 rounded-full blur-3xl"></div>


        <div className="relative max-w-6xl mx-auto px-6 text-center">

          {/* ETIQUETA */}
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md border border-white/60 px-5 py-2 rounded-full shadow-md mb-5">

            <span className="text-lg">
              🌸
            </span>

            <p className="uppercase tracking-[4px] text-[#ec4899] text-xs md:text-sm font-bold">
              React • Fetch • Laravel
            </p>

          </div>


          {/* TÍTULO */}
          <h1 className="text-5xl md:text-6xl font-black leading-none mb-4">

            <span className="text-[#f472b6] drop-shadow-sm">
              FLOWER
            </span>

            <span className="block text-[#db2777]">
              GARDEN
            </span>

          </h1>


          {/* DESCRIPCIÓN */}
          <p className="max-w-2xl mx-auto text-sm md:text-lg text-[#9d6680] leading-relaxed">

            Administra y organiza flores con una interfaz
            elegante, delicada y llena de tonos pastel.

          </p>

        </div>

      </header>



      {/* BOTÓN LOGOUT */}
      <div className="flex justify-end max-w-6xl mx-auto px-6 pt-6">

        <button
          onClick={cerrarSesion}
          className="
            bg-gradient-to-r
            from-[#f472b6]
            to-[#ec4899]
            hover:from-[#ec4899]
            hover:to-[#db2777]
            text-white
            px-7
            py-3
            rounded-2xl
            font-semibold
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
          "
        >

          Cerrar Sesión

        </button>

      </div>



      {/* NAV */}
      <Navegacion />


      {/* PRINCIPAL */}
      <Principal />


      {/* FORMULARIO */}
      <section className="max-w-5xl mx-auto px-6 py-10">

        <div className="bg-white rounded-[35px] shadow-xl p-10 border border-[#ffd6e7]">

          <h2 className="text-3xl font-bold text-[#db2777] mb-8 text-center">
            Registrar Flower 🌷
          </h2>

          <FormularioF
            cargarFlowers={cargarFlowers}
          />

        </div>

      </section>



      {/* UPDATE */}
      <section className="max-w-5xl mx-auto px-6 py-10">

        <FormularioUpdate
          flowerEditar={flowerEditar}
          cargarFlowers={cargarFlowers}
          cerrarFormularioUpdate={cerrarFormularioUpdate}
        />

      </section>



      {/* TABLA */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <ListarFlowers
          flowers={flowers}
          cargarFlowers={cargarFlowers}
          seleccionarEditar={setFlowerEditar}
        />

      </section>

    </div>

  )

}

export default App