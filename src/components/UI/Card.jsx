const Card = ({ icon, text, title }) => {
  return (
    <article
      className="xs:w-full  lg:w-[300px] h-[300px]  shadow-md hover:shadow-[#f24e3f]/10 hover:scale-105 
                transition-all  duration-300 cursor-pointer rounded-md flex flex-col justify-center items-center gap-10"
    >
      <div className="text-2xl text-[#f24e3f]/75">{icon}</div>
      <h3 className="text-2xl font-bold text-center">{title}</h3>
      <p className="text-xs font-bitcount-medium text-center w-[200px] text-gray-400">{text}</p>
    </article>
  );
};

export default Card;
