import { useParams, Link } from "react-router-dom";

const SideBar = ({ titles, subtitles }) => {
  const { tema } = useParams();

  return (
    <div className="col-span-1 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg h-fit sticky top-20">
      {titles.map((title, index) => {
        const isActive = title.toLowerCase() === tema?.toLowerCase();

        return (
          <div
            key={index}
            className="p-4 m-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
          >
            {/* Link al título */}
            <Link
              to={`/Introduct/${title.toLowerCase()}`}
              className="text-gray-800 dark:text-gray-200 text-lg font-semibold"
            >
              {title}
            </Link>

            {/* Subtítulos solo si está activo */}
            {isActive && subtitles.length > 0 && (
              <ul>
                {subtitles.map((subtitle, subIndex) => (
                  <li
                    key={subIndex}
                    className="text-gray-600 dark:text-gray-400 text-md mt-2"
                  >
                    {/* NO ponemos barra antes del hash */}
                    <a
                      href={`/Introduct/${title}/#${subtitle}`}
                      className="hover:underline"
                    >
                      {subtitle}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
