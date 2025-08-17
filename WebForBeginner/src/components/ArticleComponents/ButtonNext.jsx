import { Link, useParams } from "react-router-dom";

const ButtonNext = ({ titles }) => {
  const { tema } = useParams();
  console.log("Tema desde URL:", tema);

  const numberPage = titles.findIndex(
    title => tema.toLowerCase() === title.toLowerCase()
  );

  const nextPage = (numberPage !== -1 && numberPage < titles.length - 1)
    ? numberPage + 1
    : -1;

  console.log("Número de página actual:", numberPage);
  console.log("Número de siguiente página:", nextPage);

  if (nextPage !== -1) {
    return (
        <Link
          to={`/Introduct/${titles[nextPage]}/`}
          className="font-body p-2 m-2  align-middle items-center rounded-xl bg-gray-50 text-3xl dark:bg-gray-900 shadow-2xl cursor-pointer hover:bg-blue-200 dark:border border-b-amber-50"
        >
          Siguiente
        </Link>
    );
  }
  
  return null;
};

export default ButtonNext;
