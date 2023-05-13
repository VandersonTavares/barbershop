
const Hero = () => {
  return (
    <section className="hero">
      <div className="h-screen">
      <div className="container mx-auto max-w-6xl text-center flex flex-col items-center justify-center mt-14 lg:mt-36">
        <h1 className="text-5xl font-dance text-[#88521a]">Corte e qualidade</h1>
        <h2 className="text-[#729476] font-bold text-8xl uppercase mt-[-20px]">since 1997</h2>
        <p className="text-white max-w-2xl mt-10"> 
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          eveniet atque quasi, illo vel ex accusantium quis officia sequi, ullam
          enim. Porro perferendis magni vel natus. Laudantium beatae veniam sed.
        </p>
        <button className="mt-24 py-3 px-10 rounded text-white uppercase bg-[#88521a] lg:mt-10">Agendar</button>
      </div>
      </div>
    </section>
  );
};

export default Hero;
