import Hero from "../components/Hero";
import { motion } from "framer-motion";

const HomePage = () => {
  const fadeInLeft = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
  };

  const transition = { duration: 0.8, delay: 0.4, ease: "easeInOut" };

  return (
    <div className="flex flex-col items-center justify-center overflow-y-hidden ">
      <Hero />

      <div className="max-w-4xl mx-auto px-6 text-gray-800 dark:text-gray-100 py-10">

        {/* Recomendaciones */}
        <motion.div
          {...fadeInLeft}
          transition={transition}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 id="Introducíon" className="text-3xl font-bold mb-4">
            Recomendaciones
          </h2>
          <p className="text-lg">
            Esta guía está diseñada para principiantes que desean aprender a programar para la web. 
            Comenzaremos desde lo más básico, cubriendo HTML, CSS y JavaScript, y avanzaremos hacia conceptos más complejos. 
            Cada sección incluirá ejemplos prácticos y ejercicios para ayudarte a consolidar tus conocimientos.
          </p>
        </motion.div>

        {/* ¿Por qué aprender desarrollo web? */}
        <motion.div
          {...fadeInRight}
          transition={transition}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold">¿Por qué aprender desarrollo web?</h3>
          <p className="text-lg mt-2">
            El desarrollo web es una habilidad valiosa en el mundo digital actual. 
            Aprender a crear sitios web te permitirá expresar tu creatividad, resolver problemas y, potencialmente, abrirte a nuevas oportunidades laborales.
          </p>
        </motion.div>
        <motion.div
          {...fadeInLeft}
          transition={transition}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold">¿Qué aprenderás?</h3>
          <ul className="list-disc list-inside text-lg mt-2">
            <li>Introducción a la web</li>
            <li>Fundamentos de HTML: Estructura de páginas web</li>
            <li>CSS: Estilización y diseño visual</li>
            <li>JavaScript: Interactividad y lógica de programación</li>
            <li>Consumo de APIs</li>
            <li>Prácticas recomendadas y herramientas útiles</li>
          </ul>
        </motion.div>

        {/* Sugerencias */}
        <motion.div
          {...fadeInUp}
          transition={transition}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold">Sugerencias:</h3>
          <ul className="list-disc list-inside text-lg mt-2">
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
