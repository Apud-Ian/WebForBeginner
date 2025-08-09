import { useState } from 'react';

const Accordion = ({ title, subTitels, content }) => {
    const [hidden, setHidden] = useState([]);
    const handleClick = (index) => {
        setHidden(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
    };
    const Info = {subTitels: [], content: []};
    if (!subTitels || !content || subTitels.length !== content.length) { 
    subTitels.map((subTitle, index) => {
        Info.subTitels.push(subTitle)
        Info.content.push(content[index])    
    })
}
    return (
        <div className="p-4 m-2">
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <div className="space-y-4">
                {Info.map((Info, index) => (
                    <div key={index} className="p-4" onClick={()=> handleClick(index)}>
                        <h4 className="text-xl">{Info.subTitels[index]}</h4>
                        <div className={hidden.includes(index) ? "p-4 rounded-lg" : "hidden"}>
                            <p className="font-light">{Info.content[index]}</p>
                        </div>
                    </div>
    ))}
            </div>
        </div>
    )
};


export default Accordion;