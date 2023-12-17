import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";

import thanks from "../assets/images/icon-thank-you.svg";
type monthlyYearly = {
  monthly: boolean;
  setMonthly: (monthly: boolean) => void;
  arcade: boolean;
  setArcade: (arcade: boolean) => void;
  advanced: boolean;
  setAdvanced: (advanced: boolean) => void;
  pro: boolean;
  setPro: (pro: boolean) => void;
  service: boolean;
  setService: (service: boolean) => void;
  storage: boolean;
  setStorage: (storage: boolean) => void;
  profile: boolean;
  setProfile: (profile: boolean) => void;
};

export default function FinishingUp({
  monthly,
  setMonthly,
  arcade,
  setArcade,
  advanced,
  setAdvanced,
  pro,
  setPro,
  ////
  service,
  setService,
  storage,
  setStorage,
  profile,
  setProfile,
}: monthlyYearly) {
  const [totalCost, setTotalCost] = useState<number>(0);
  const [done, setDone] = useState<boolean>(true);
  const updateTotalCost = () => {
    let cost = 0;

    if (arcade) {
      cost += monthly ? 9 : 90;
    } else if (advanced) {
      cost += monthly ? 12 : 120;
    } else if (pro) {
      cost += monthly ? 15 : 150;
    }

    if (service) {
      cost += monthly ? 1 : 10;
    }

    if (storage) {
      cost += monthly ? 2 : 20;
    }

    if (profile) {
      cost += monthly ? 2 : 20;
    }

    setTotalCost(cost);
  };
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  React.useEffect(() => {
    updateTotalCost();
  }, [monthly, arcade, advanced, pro, service, storage, profile]);

  return (
    <>
      {done ? (
        <>
          <main className="w-[343px] bg-white absolute top-[100px] right-4 px-6 flex flex-col items-start justify-center gap-6 py-8 rounded-[10px] ">
            <div>
              {arcade}
              <h2 className=" text-[24px] font-bold">Finishing up</h2>
              <p className="text-[16px] font-normal leading-[25px] text-[#9699AA]">
                Double-check everything looks OK before confirming.
              </p>
            </div>
            <section className="w-full bg-[#F8F9FF] p-[16px] flex flex-col  gap-3">
              <div className="flex flex-row items-center justify-between w-full">
                <div>
                  <p className="text-[14px] font-medium">
                    {arcade ? (
                      <p>Arcade</p>
                    ) : advanced ? (
                      <p>Advanced</p>
                    ) : pro ? (
                      <p>Pro</p>
                    ) : (
                      ""
                    )}
                  </p>
                  <p className=" text-[#9699AA] font-normal leading-[20px] text-[14px]">
                    Change
                  </p>
                </div>
                <p className="text-[14px] font-medium">
                  {arcade ? (
                    <p>{monthly ? "$9/mo" : "$90/yr"}</p>
                  ) : advanced ? (
                    <p>{monthly ? "$12/mo" : "$120/yr"}</p>
                  ) : pro ? (
                    <p>{monthly ? "$15/mo" : "$150/yr"}</p>
                  ) : (
                    ""
                  )}
                </p>
              </div>
              <hr />
              {service ? (
                <div className="flex flex-row items-center justify-between">
                  <p className=" text-[#9699AA] text-[14px] font-normal leading-[20px]">
                    Online service
                  </p>{" "}
                  <p className="text-[#022959]  font-normal leading-[20px] text-[14px]">
                    {monthly ? "$1/mo" : "+$10/yr"}
                  </p>
                </div>
              ) : (
                ""
              )}{" "}
              {storage ? (
                <div className="flex flex-row items-center justify-between">
                  {" "}
                  <p className=" text-[#9699AA] text-[14px] font-normal leading-[20px]">
                    Larger storage
                  </p>{" "}
                  <p className="text-[#022959]  font-normal leading-[20px] text-[14px]">
                    {monthly ? "$2/mo" : "+$20/yr"}
                  </p>
                </div>
              ) : (
                ""
              )}{" "}
              {profile ? (
                <div className="flex flex-row items-center justify-between">
                  {" "}
                  <p className=" text-[#9699AA] text-[14px] font-normal leading-[20px]">
                    Customizable profile
                  </p>{" "}
                  <p className="text-[#022959]  font-normal leading-[20px] text-[14px]">
                    {monthly ? "$2/mo" : "+$20/yr"}
                  </p>
                </div>
              ) : (
                ""
              )}
            </section>
            <div className="flex flex-row items-center justify-between w-full px-[16px]">
              <p className=" text-[#9699AA] text-[14px] leading-[20px] font-normal">
                Total (per month)
              </p>
              <p className="text-[16px] font-bold leading-[20px] text-[#483EFF]">
                +${totalCost}/{monthly ? "mo" : "yr"}
              </p>
            </div>
          </main>
          <div className=" flex flex-row items-center justify-between border border-[#EFF5FF]] w-full h-[72px] bg-white">
            <button
              onClick={() => {
                goBack();
              }}
              className="text-[14px] font-medium text-[#9699AA] pl-[16px] cursor-pointer"
            >
              Go Back
            </button>

            <button
              onClick={() => {
                setDone(false);
              }}
              //   disabled={}
              className="rounded-[4px] bg-[#483EFF] w-[97px] h-[40px] text-white ml-auto mr-[16px] cursor-pointer"
            >
              Confirm
            </button>
          </div>
        </>
      ) : (
        <div>
          <main className="w-[343px] bg-white absolute top-[100px] right-4 px-6 flex flex-col items-center justify-center gap-6 py-16 rounded-[10px] ">
            <img src={thanks} alt="" className="w-[56px] h-[56px]" />
            <div className="flex flex-col items-center justify-center text-center gap-2">
              <h2 className="text-[24px] font-bold text-[#022959]">
                Thank you!
              </h2>
              <p className="text-[#9699AA] text-[16px] font-normal leading-[25px]">
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
              </p>
            </div>
          </main>
        </div>
      )}
    </>
  );
}
