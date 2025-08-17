const subTitels = ({ subTitel }) => {
    return(
        <div id={subTitel} className="p-4">
            <h2 className="text-xl md:text-3xl font-display tracking-wider mb-2">{subTitel}</h2>
        </div>
    )
}

export default subTitels;