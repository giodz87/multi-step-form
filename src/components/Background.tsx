import bgimg from "../assets/images/bg-sidebar-mobile.svg";

import bgdesk from "../assets/images/bg-sidebar-desktop.svg";
export default function background() {
  const button = [1, 2, 3, 4];

  return (
    <div className="w-full h-[761px] flex flex-col items-center justify-between bg-[#EFF5FF] relative xl:w-[940px] xl:bg-white xl:h-[600px] xl:justify-center xl:items-start xl:py-[16px] xl:pl-[16px]">
      <img src={bgimg} alt="" className="xl:hidden" />
      <img src={bgdesk} alt="" className=" hidden xl:flex" />
      <div className="flex flex-row items-center justify-center gap-[16px] absolute top-[50px] xl:flex-col xl:gap-[32px] xl:left-[48px] ">
        {button.map((item) => (
          <button
            key={item}
            className="w-[33px] h-[33px] rounded-[50%] border border-[#fff] text-[#fff] text-[14px] font-bold"
          >
            {item}
          </button>
        ))}

        <div className="xl:flex absolute left-[58px] top-[1px] w-[200px] flex-col items-start justify-start gap-[25px] hidden">
          <div>
            <p className="text-[12px] font-normal text-[#ABBCFF]">STEP 1</p>
            <p className="text-[14px] font-bold tracking-[1px] text-white">
              YOUR INFO
            </p>
          </div>
          <div>
            <p className="text-[12px] font-normal text-[#ABBCFF]">STEP 2</p>
            <p className="text-[14px] font-bold tracking-[1px] text-white">
              SELECT PLAN
            </p>
          </div>
          <div>
            <p className="text-[12px] font-normal text-[#ABBCFF]">STEP 3</p>
            <p className="text-[14px] font-bold tracking-[1px] text-white">
              ADD-ONS
            </p>
          </div>
          <div>
            <p className="text-[12px] font-normal text-[#ABBCFF]">STEP 4</p>
            <p className="text-[14px] font-bold tracking-[1px] text-white">
              SUMMARY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
