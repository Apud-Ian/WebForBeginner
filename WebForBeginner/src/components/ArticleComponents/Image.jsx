const Image = ({ src, alt }) => {
  console.log('src de la imagen', src, src.length);

  if (src.length <= 0) {
    return null;
  }

  if (src.length === 1) {
    return (
      <div className="flex justify-center my-4">
        <img className="w-auto h-auto" src={src[0]} alt={alt[0]} />
      </div>
    );
  }
  if (src.length<=5){
    return(
      <div className="flex gap-4 justify-between align-middle items-center">
        {src.map((item,index)=>(
          <div className=" size-auto align-middle">
          <img key={index} className="w-auto h-auto" src={item} alt={alt[index]}/>
          </div>
        ))}
      </div>
    )
  }
  if (src.length > 5) {
    return (
      <div className={`grid grid-cols-${src.length <= 10 ? Math.ceil(src.length / 2) : 4} gap-2 my-4`}>
        {src.map((item, index) => (
          <img
            className="w-auto h-auto"
            src={item}
            alt={alt[index]}
            key={index}
          />
        ))}
      </div>
    );
  }

  return null;
};

export default Image;
