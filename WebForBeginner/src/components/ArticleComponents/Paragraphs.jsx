const Paragraphs = ({ paragraphs }) => {
    return(
        <div className="space-y-4 font-body">
            {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-gray-950 dark:text-gray-300 font-light  tracking-wide">
                    {paragraph}
                </p>    
            ))}
        </div>
    )
}

export default Paragraphs;