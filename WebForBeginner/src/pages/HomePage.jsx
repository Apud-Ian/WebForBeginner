import Hero from "../components/Hero";
import html from "/img-introduct/html.svg";
import css from "/img-introduct/css.svg";
import js from "/img-introduct/js.svg";
import { motion } from "framer-motion";

const HomePage = () => {
  // Animación unificada (fadeInUp para todos)
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
  };

  const transition = { duration: 0.8, delay: 0.1, ease: "easeInOut" };

  return (
    <div className="flex flex-col items-center overflow-y-hidden">
      <Hero />

      <div className="px-6 space-y-16 mt-10 text-gray-800 dark:text-gray-100 py-10 max-w-6xl">

        {/* Recomendaciones */}
        <motion.div
          {...fadeInUp}
          transition={transition}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-8 p-8 rounded-xl dark:bg-stone-800 bg-gray-100 shadow-lg"
        >
          <div className="p-4">
            <h2 id="Introducción" className="text-4xl font-display font-bold mb-4">
              ¿Que es esta guia?
            </h2>
            <p className="text-lg font-body leading-relaxed">
              Esta guía está diseñada para principiantes que desean aprender a programar para la web. 
              Comenzaremos desde lo más básico, cubriendo HTML, CSS y JavaScript, y avanzaremos hacia conceptos más complejos. 
              Cada sección incluirá ejemplos prácticos y ejercicios para ayudarte a consolidar tus conocimientos.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <img src={html} alt="HTML Logo" className="h-32" />
            <img src={css} alt="CSS Logo" className="h-32" />
            <img src={js} alt="JS Logo" className="h-32" />
          </div>
        </motion.div>

        {/* ¿Por qué aprender desarrollo web? */}
        <motion.div
          {...fadeInUp}
          transition={transition}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-8 p-8 rounded-xl dark:bg-stone-800 bg-gray-100 shadow-lg"
        >
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-display font-semibold">¿Qué aprenderás?</h3>
          <ul className="list-disc list-inside text-lg mt-4 font-body space-y-2">
            <li>Introducción a la web</li>
            <li>Fundamentos de HTML: Estructura de páginas web</li>
            <li>CSS: Estilización y diseño visual</li>
            <li>JavaScript: Interactividad y lógica de programación</li>
            <li>Consumo de APIs</li>
            <li>Prácticas recomendadas y herramientas útiles</li>
          </ul>
          </div>
          <div>
            <h3 className="text-2xl mb-2 font-display font-semibold">¿Por qué aprender desarrollo web?</h3>
            <p className="text-lg mt-6 font-body leading-relaxed">
              El desarrollo web es una habilidad valiosa en el mundo digital actual. 
              Aprender a crear sitios web te permitirá expresar tu creatividad, resolver problemas y, potencialmente, abrirte a nuevas oportunidades laborales.
            </p>
          </div>
        </motion.div>
        {/* Sugerencias */}
        <motion.div
          {...fadeInUp}
          transition={transition}
          viewport={{ once: true, amount: 0.3 }}
          className="p-8 rounded-xl dark:bg-stone-800 bg-gray-100 shadow-lg"
        >
          <h3 className="text-2xl font-display font-semibold">Sugerencias</h3>
          <ul className="list-disc list-inside text-lg mt-4 font-body space-y-2">
            <li>Practicá regularmente: La programación mejora con la práctica constante.</li>
            <li>No temas cometer errores: Son parte del proceso de aprendizaje.</li>
            <li>Buscá recursos adicionales: Hay muchos tutoriales, cursos y comunidades online.</li>
            <li>No abuses de la IA: Usala para entender conceptos, no para evitar aprender.</li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
};

export default HomePage;
