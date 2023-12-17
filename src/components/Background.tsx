import bgimg from "../assets/images/bg-sidebar-mobile.svg";
export default function background() {
  const button = [1, 2, 3, 4];

  return (
    <div className="w-full h-[761px] flex flex-col items-center justify-between bg-[#EFF5FF] relative">
      <img src={bgimg} alt="" />
      <div className="flex flex-row items-center justify-center gap-[16px] absolute top-[50px]">
        {button.map((item) => (
          <button
            key={item}
            className="w-[33px] h-[33px] rounded-[50%] border border-[#fff] text-[#fff] text-[14px] font-bold"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
