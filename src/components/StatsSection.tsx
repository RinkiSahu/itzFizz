import { stats } from "../data/stats";

const StatsSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 px-6 py-12 w-full">
      {stats.map((item, i) => (
        <div
          key={i}
          className={`stat-box opacity-0 translate-y-10 scale-95 will-change-transform p-6 sm:p-8 rounded-xl
          ${item.bg} text-[#111] w-full sm:w-[320px] shadow-xl`}
        >
          <span className="text-3xl sm:text-5xl font-semibold block">
            {item.value}
          </span>
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
