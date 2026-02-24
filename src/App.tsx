import { useRef } from "react";
import Headline from "./components/Headline";
import StatsSection from "./components/StatsSection";
import RoadSection from "./components/RoadSection";
import { useScrollAnimation } from "./animations/useScrollAnimation";

const App = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLImageElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const valueTextRef = useRef<HTMLDivElement>(null);

  useScrollAnimation({
    sectionRef,
    trackRef,
    carRef,
    trailRef,
    valueTextRef,
  });

  return (
    <div className="font-sans overflow-x-hidden bg-[#121212] text-white">
      <div
        ref={sectionRef}
        className="section h-[200vh] relative bg-[#121212] border-b-4 border-red-300"
      >
        <div
          ref={trackRef}
          className="track sticky top-0 h-screen w-full flex flex-col justify-between items-center bg-[#d1d1d1]"
        >
          <Headline />
          <StatsSection />
          <RoadSection
            carRef={carRef}
            trailRef={trailRef}
            valueTextRef={valueTextRef}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
