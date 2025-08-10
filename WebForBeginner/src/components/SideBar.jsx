import { useParams, Link } from "react-router-dom";
const SideBar = ({ titles, subtitles }) => {
  const { tema } = useParams();



  return (
    <div className="col-span-1 lg:h-[600px] p-2 gap-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg top-20">
      {titles.map((title, index) => {
        const isActive = title.toLowerCase() === tema?.toLowerCase();
        return (
          <div
            key={index}
            className="rounded-lg m-2 items-center justify-between transition-colors duration-300 cursor-pointer"
          >
            {/* Link al título */}
            <Link
              to={`/Introduct/${title}/`}
              className="text-gray-800 dark:text-gray-200 dark:hover:text-gray-50 hover:underline text-lg font-semibold"
            >
              {title}
            </Link>
            {/* Subtítulos solo si está activo */}
            {isActive && subtitles.length > 0 && (
              <ul>
                {subtitles.map((subtitle, subIndex) => (
                  <li
                    key={subIndex}
                    className="text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 text-md mt-2"
                  >
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
