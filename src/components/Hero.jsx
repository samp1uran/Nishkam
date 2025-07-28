
const HeroSection = () => {
  return (
    <section className="flex items-center justify-center px-4 mb-2">
      <div className="text-center max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Courses We <span className='text-yellow-400'>Offer</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Providing focused and practical programs to help you build the skills and knowledge required to excel in your career path
        </p>

        <div className="min-w-3xs grid grid-cols-4 ">
          <button className="text-gray-700 text-center py-2 px-4 border-2 hover: transition">
            All
          </button>
          <button className=" text-center text-gray-700 py-2 px-4 border-2 border-l-0 hover: transition">
            CFA
          </button>
          <button className="text-center text-gray-700 py-2 px-4 border-2 border-l-0 hover: transition">
            FRM
          </button>
          <button className=" text-center text-gray-700 py-1 px-1 border-2 border-l-0 hover:transition">
            Upskill
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
