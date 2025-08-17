import { NavLink } from "react-router-dom";
import ImageHero from "../assets/ImageHero.webp";

const Hero = () => {
  return (
    <section className="relative font-body w-full min-h-screen overflow-hidden">
      <img
        src={ImageHero}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover dark:mask-b-from-15% mask-b-from-85% mask-to-transparent mask-image-linear-gradient-to-b"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold font-display mb-6 drop-shadow-md">
          ¿Querés programar? Empezá por la web
        </h1>
        <p className="text-lg md:text-2xl font-medium drop-shadow-sm">
          Te enseño desde cero cómo crear páginas con HTML, CSS y JS con una ruta clara y sin vueltas.
          Tu camino para dominar el desarrollo web empieza acá.
        </p>
<div className="pt-60 flex justify-center items-center gap-24">
  <NavLink to="/Introduct/Introduccíon a la guia/"  className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300">
    Iniciar
  </NavLink>
  <a href="#Introducción" className="text-indigo-600 hover:text-indigo-200 border border-indigo-600 hover:border-indigo-200 text-xl font-semibold px-6 py-3 rounded-xl transition-all duration-300">
    Saber más...
  </a>
</div>

      </div>
    </section>
  )
};

export default Hero;
