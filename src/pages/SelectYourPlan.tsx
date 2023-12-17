import { Link, useNavigate } from "react-router-dom";
import Arcade from "../assets/images/icon-arcade.svg";
import Advanced from "../assets/images/icon-advanced.svg";
import Pro from "../assets/images/icon-pro.svg";

type monthlyYearly = {
  monthly: boolean;
  setMonthly: (monthly: boolean) => void;

  arcade: boolean;
  setArcade: (arcade: boolean) => void;
  advanced: boolean;
  setAdvanced: (advanced: boolean) => void;
  pro: boolean;
  setPro: (pro: boolean) => void;
};

export default function SelectYourPlan({
  monthly,
  setMonthly,
  arcade,
  setArcade,
  advanced,
  setAdvanced,
  pro,
  setPro,
}: monthlyYearly) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  console.log(arcade);
  return (
    <>
      <section className="w-[343px] bg-white absolute top-[100px] right-4 px-6 flex flex-col items-start justify-center gap-6 py-8 rounded-[10px] ">
        <div>
          <h2 className=" text-[24px] font-bold">Select your plan</h2>
          <p className="text-[16px] font-normal leading-[25px] text-[#9699AA]">
            You have the option of monthly or yearly billing.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <button
            onClick={() => {
              setArcade(true);
              setAdvanced(false);
              setPro(false);
            }}
            className={` ${
              arcade ? "border-[#483EFF]" : "border-[#D6D9E6]"
            }   bg-white border  w-[295px] ${
              monthly ? "h-[77px]" : "h-[99px]"
            }  rounded-[8px] flex flex-row items-start px-3 pt-4 gap-3`}
          >
            <img src={Arcade} alt="" className="w-[40px] h-[40px]" />{" "}
            <div className=" text-start">
              <p>Arcade</p>

              {monthly ? (
                <p className="text-[14px] font-normal leading-5 text-[#9699AA]">
                  $9/mo
                </p>
              ) : (
                <div>
                  <p className="text-[14px] font-normal leading-[20px] text-[#9699AA]">
                    $90/yr
                  </p>{" "}
                  <p className="text-[12px] font-normal leading-[20px] text-[#022959] ">
                    2 months free
                  </p>
                </div>
              )}
            </div>
          </button>
          <button
            onClick={() => {
              setArcade(false);
              setAdvanced(true);
              setPro(false);
            }}
            className={`${
              advanced ? "border-[#483EFF]" : "border-[#e6ded6]"
            } bg-white border  w-[295px] ${
              monthly ? "h-[77px]" : "h-[99px]"
            } rounded-[8px] flex flex-row items-start px-3 pt-4 gap-3`}
          >
            <img src={Advanced} alt="" className="w-[40px] h-[40px]" />{" "}
            <div className=" text-start">
              <p>Advanced</p>

              {monthly ? (
                <p className="text-[14px] font-normal leading-5 text-[#9699AA]">
                  {" "}
                  $12/mo
                </p>
              ) : (
                <div>
                  <p className="text-[14px] font-normal leading-[20px] text-[#9699AA]">
                    $120/yr
                  </p>{" "}
                  <p className="text-[12px] font-normal leading-[20px] text-[#022959] ">
                    2 months free
                  </p>
                </div>
              )}
            </div>
          </button>
          <button
            onClick={() => {
              setArcade(false);
              setAdvanced(false);
              setPro(true);
            }}
            className={`${
              pro ? "border-[#483EFF]" : "border-[#D6D9E6]"
            } bg-white border  w-[295px] ${
              monthly ? "h-[77px]" : "h-[99px]"
            } rounded-[8px] flex flex-row items-start px-3 pt-4 gap-3`}
          >
            <img src={Pro} alt="" className="w-[40px] h-[40px]" />{" "}
            <div className=" text-start">
              <p>Pro</p>

              {monthly ? (
                <p className="text-[14px] font-normal leading-5 text-[#9699AA]">
                  $15/mo
                </p>
              ) : (
                <div>
                  <p className="text-[14px] font-normal leading-[20px] text-[#9699AA]">
                    $150/yr
                  </p>{" "}
                  <p className="text-[12px] font-normal leading-[20px] text-[#022959]">
                    2 months free
                  </p>
                </div>
              )}
            </div>
          </button>
        </div>

        <div className="flex flex-row items-center justify-center gap-6 w-full bg-[#F8F9FF] h-[48px]">
          <p className={`${monthly ? "text-[#9699AA] " : " text-[#022959]"}`}>
            Monthly
          </p>
          <div
            onClick={() => {
              setMonthly(!monthly);
            }}
            className="w-[38px] h-[20px] bg-[#022959] rounded-2xl flex items-center"
          >
            <button
              className={`w-[15px] h-[15px] rounded-full bg-white mx-[3px] cursor-pointer ${
                monthly ? "" : "ml-auto"
              }`}
            ></button>
          </div>
          <p className={`${monthly ? "text-[#022959]" : "text-[#9699AA]"}`}>
            Yearly
          </p>
        </div>
      </section>
      <div className=" flex flex-row items-center justify-between border border-[#EFF5FF]] w-full h-[72px] bg-white">
        <button
          onClick={() => {
            goBack();
            setArcade(false);
            setAdvanced(false);
            setPro(false);
          }}
          className="text-[14px] font-medium text-[#9699AA] pl-[16px] cursor-pointer"
        >
          Go Back
        </button>
        <Link to={"/pick_add_ons"}>
          <button
            onClick={() => {}}
            disabled={!arcade && !advanced && !pro}
            className="rounded-[4px] bg-[#022959] w-[97px] h-[40px] text-white ml-auto mr-[16px] cursor-pointer"
          >
            Next Step
          </button>
        </Link>
      </div>
    </>
  );
}
