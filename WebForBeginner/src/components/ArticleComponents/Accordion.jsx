import { useState } from 'react';

const Accordion = ({ title, subTitels, content }) => {
    const [hidden, setHidden] = useState([]);
    const handleClick = (index) => {
        setHidden(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
    };
    const Info = {subTitels: [], content: []};
if (Array.isArray(subTitels) && Array.isArray(content) && subTitels.length === content.length) {
  subTitels.forEach((subTitle, index) => {
    Info.subTitels.push(subTitle);
    Info.content.push(content[index]);
  });
} else {
  console.error("Los arrays no existen o no tienen la misma longitud");
}
    return (
        <div className="p-2 m-2 ">
                {Info.subTitels.map((sub, index) => (
                <div key={index} className=" border-b" onClick={() => handleClick(index)}>
                    <div className='flex select-none p-2 my-1
                     justify-between align-middle cursor-pointer'>
                    <h4 className="text-xl">{sub}</h4>
                    <p className={hidden.includes(index)? "rotate-90 text-2xl transition-all ease-in" : "text-2xl transition-all ease-in-out"}>{'>'}</p>
                </div>
                <div className={hidden.includes(index) ? "p-2 my-1 rounded-lg transition-all ease-in" : "hidden transition-all ease-in-out"}>
                <p className="font-light">{Info.content[index]}</p>
                </div>
            </div>
))}
        </div>
    )
};


export default Accordion;