const UnorderList = ({ items }) => {
    return (
        <ul className="flex flex-col space-y-2 p-4 rounded-2xl ">
            {items.map((item, index) => (
                <li className="text-xl font-semibold " key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default UnorderList;