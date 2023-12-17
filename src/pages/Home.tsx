import React, { useId, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useParams, useNavigate, Link } from "react-router-dom";

type FormData = {
  name: string;
  email: string;
  phone: string;
};

type paramsID = {
  userId: string;
};
export default function Home() {
  const { userId } = useParams<paramsID>();

  return (
    <>
      <>
        <section className="w-[343px]  bg-white absolute top-[100px] right-4 px-6 flex flex-col items-start justify-center gap-6 py-8 rounded-[10px] ">
          {userId}
          <div>
            <h1 className=" text-[24px] font-bold">Personal info</h1>
            <p className="text-[16px] font-normal leading-[25px] text-[#9699AA] ">
              Please provide your name, email address, and phone number.
              {userId}
            </p>
          </div>
          <form className="w-full flex flex-col gap-4">
            <div>
              <p className="text-[12px] text-[#022959] font-normal">Name</p>
              <input
                className="w-full rounded-[4px] h-10 border border-[#D6D9E6] pl-[16px]"
                placeholder="e.g. Stephen King"
                type="text"
              />
            </div>
            <div>
              <p className="text-[12px] text-[#022959] font-normal">
                Email Address
              </p>
              <input
                className="w-full rounded-[4px] h-10 border border-[#D6D9E6] pl-[16px]"
                placeholder="e.g. stephenking@lorem.com"
                type="text"
              />
            </div>
            <div>
              <p className="text-[12px] text-[#022959] font-normal">
                Phone Number
              </p>
              <input
                className="w-full rounded-[4px] h-10 border border-[#D6D9E6] pl-[16px]"
                placeholder="e.g. +1 234 567 890"
                type="text"
              />
            </div>
          </form>
        </section>

        <div className=" flex flex-row items-center justify-end border border-[#EFF5FF]] w-full h-[72px] bg-white">
          <Link to={"/select_your_plan"}>
            <button
              onClick={() => {}}
              className="rounded-[4px] bg-[#022959] w-[97px] h-[40px] text-white  mr-[16px] cursor-pointer"
            >
              Next Step
            </button>
          </Link>
          ;
        </div>
      </>
    </>
  );
}
