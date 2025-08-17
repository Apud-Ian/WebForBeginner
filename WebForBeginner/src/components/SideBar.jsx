import { useParams, Link } from "react-router-dom";
const SideBar = ({ titles, subtitles }) => {
  const { tema } = useParams();



  return (
    <div className="fixed col-span-1 font-display lg:h-[600px] p-2 gap-2 border border-gray-300 rounded-lg shadow-lg top-36">
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
              className="text-gray-900 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-50 hover:underline text-lg font-semibold"
            >
              {title}
            </Link>
            {/* Subtítulos solo si está activo */}
            {isActive && subtitles.length > 0 && (
              <ul>
                {subtitles.map((subtitle, subIndex) => (
                  <li
                    key={subIndex}
                    className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-100 text-md mt-2"
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
