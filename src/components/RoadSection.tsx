import { RefObject } from "react";

interface Props {
  carRef: RefObject<HTMLImageElement>;
  trailRef: RefObject<HTMLDivElement>;
  valueTextRef: RefObject<HTMLDivElement>;
}

const RoadSection = ({ carRef, trailRef, valueTextRef }: Props) => {
  return (
    <div className="road w-screen h-[120px] sm:h-[200px] bg-[#1e1e1e] relative overflow-hidden">
      <img
        ref={carRef}
        src="/img/McLaren 720S 2022 top view.png"
        alt="car"
        className="h-[120px] sm:h-[200px] absolute top-0 left-0 z-10"
      />

      <div
        ref={trailRef}
        className="h-[120px] sm:h-[200px] bg-[#45db7d] absolute top-0 left-0 w-0 z-[1]"
      ></div>

      <div
        ref={valueTextRef}
        className="absolute left-[5%] top-[20%] z-[5] flex gap-[0.3rem] text-3xl sm:text-5xl md:text-7xl lg:text-[8rem] font-bold"
      >
        {"WELCOME ITZFIZZ".split("").map((char, i) => (
          <span key={i} className="value-letter text-[#111] opacity-0">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RoadSection;
