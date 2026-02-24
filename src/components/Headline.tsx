const Headline = () => {
  return (
    <div className="w-full h-40 sm:h-50 bg-[#1e1e1e] flex items-center justify-center overflow-hidden px-4">
      <h1 className="headline flex flex-wrap justify-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest text-center">
        {"WELCOME ITZFIZZ".split("").map((char, i) => (
          <span key={i} className="inline-block will-change-transform">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Headline;
