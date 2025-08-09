const Image = ({ src, alt }) => {
  return (
    <div className="flex justify-center my-4">
      <img src={src} alt={alt} className="max-w-full h-auto rounded-lg shadow-lg" />
    </div>
  );
}
export default Image;