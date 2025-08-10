const UnorderList = ({ items }) => {
    return (
        <ul className="list-disc list-inside space-y-2 text-gray-300 text-lg leading-relaxed ">
            {items.map((item, index) => (
                <li className="flex items-start" key={index}>-{item}</li>
            ))}
        </ul>
    );
}

export default UnorderList;