const Paragraphs = ({ paragraphs }) => {
    return(
        <div>
            {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg mb-4">
                    {paragraph}
                </p>    
            ))}
        </div>
    )
}

export default Paragraphs;