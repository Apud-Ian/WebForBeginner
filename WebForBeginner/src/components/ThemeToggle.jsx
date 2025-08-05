import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import {motion} from "framer-motion";
const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" || 
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="rounded-full p-2 align-middle overflow-hidden hover:bg-gray-600"
    >
      <motion.div
        initial={{ rotate: 180 }}
        animate={{ rotate: darkMode ? 0 : 180 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {darkMode ? <Moon size={18} /> : <Sun size={18} />}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;