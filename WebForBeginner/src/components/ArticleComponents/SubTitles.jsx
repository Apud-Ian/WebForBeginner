const subTitels = ({ subTitel }) => {
    return(
        <div id={subTitel} className="p-4">
            <h2 className="text-xl md:text-2xl font-light text-gray-100 tracking-wider mb-2">{subTitel}</h2>
        </div>
    )
}

export default subTitels;