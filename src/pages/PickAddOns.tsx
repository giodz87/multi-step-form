import { Link, useNavigate } from "react-router-dom";
type monthlyYearly = {
  monthly: boolean;
  setMonthly: (monthly: boolean) => void;
  service: boolean;
  setService: (service: boolean) => void;
  storage: boolean;
  setStorage: (storage: boolean) => void;
  profile: boolean;
  setProfile: (profile: boolean) => void;
};
export default function PickAddOns({
  monthly,
  setMonthly,
  service,
  setService,
  storage,
  setStorage,
  profile,
  setProfile,
}: monthlyYearly) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <main className="w-[343px] bg-white absolute top-[100px] right-4 px-6 flex flex-col items-start justify-center gap-6 py-8 rounded-[10px] ">
        <div>
          <h2 className=" text-[24px] font-bold">Pick add-ons</h2>
          <p className="text-[16px] font-normal leading-[25px] text-[#9699AA]">
            Add-ons help enhance your gaming experience.
          </p>
        </div>
        <section className="flex flex-col items-start justify-center gap-3 w-full">
          <div
            className={` ${
              service ? "border-[#483EFF]" : "border-[#D6D9E6]"
            } flex flex-row items-center justify-between gap-4 w-[295px] h-[62px] border rounded-[8px] px-[16px]`}
          >
            <div className="flex flex-row gap-3 items-center">
              <input
                onClick={() => {
                  setService(!service);
                }}
                checked={service}
                className="w-[20px] h-[20px]"
                type="checkbox"
              />
              <div className="flex flex-col">
                <p className="text-[14px] font-medium">Online service</p>
                <p className="text-[12px] font-normal  text-[#9699AA]">
                  Access to multiplayer games
                </p>
              </div>
            </div>
            <p className="text-[12px] text-[#483EFF] font-light">
              {monthly ? (
                <p>+$1/mo</p>
              ) : (
                <div>
                  <p>+$10/yr</p>
                </div>
              )}
            </p>
          </div>
          <div
            className={` ${
              storage ? "border-[#483EFF]" : "border-[#D6D9E6]"
            } flex flex-row items-center justify-between gap-4 w-[295px] h-[62px] border  rounded-[8px] px-[16px]`}
          >
            <div className="flex flex-row gap-3 items-center">
              <input
                onClick={() => {
                  setStorage(!storage);
                }}
                checked={storage}
                className="w-[20px] h-[20px]"
                type="checkbox"
              />
              <div className="flex flex-col">
                <p className="text-[14px] font-medium">Larger storage</p>
                <p className="text-[12px] font-normal text-[#9699AA]">
                  Extra 1TB of cloud save
                </p>
              </div>
            </div>
            <p className="text-[12px] text-[#483EFF] font-light">
              {monthly ? (
                <p>+$2/mo</p>
              ) : (
                <div>
                  <p>+$20/yr</p>
                </div>
              )}
            </p>
          </div>
          <div
            className={`${
              profile ? "border-[#483EFF]" : "border-[#D6D9E6]"
            } flex flex-row items-center justify-between gap-4 w-[295px] h-[62px] border border-[#D6D9E6] rounded-[8px] px-[16px]`}
          >
            <div className="flex flex-row gap-3 items-center justify-center">
              <input
                onClick={() => {
                  setProfile(!profile);
                }}
                checked={profile}
                className="w-[20px] h-[20px]"
                type="checkbox"
              />
              <div className="flex flex-col">
                <p className="text-[14px] font-medium">Customizable profile</p>
                <p className="text-[12px] font-normal text-[#9699AA]">
                  Custom theme on your profile
                </p>
              </div>
            </div>
            <p className="text-[12px] text-[#483EFF] font-light">
              {monthly ? (
                <p>+$2/mo</p>
              ) : (
                <div>
                  <p>+$20/yr</p>
                </div>
              )}
            </p>
          </div>
        </section>
      </main>

      <div className=" flex flex-row items-center justify-between border border-[#EFF5FF]] w-full h-[72px] bg-white">
        <button
          onClick={() => {
            goBack();
          }}
          className="text-[14px] font-medium text-[#9699AA] pl-[16px]"
        >
          Go Back
        </button>
        <Link to={"/finishing_up"}>
          <button
            onClick={() => {}}
            disabled={!service && !storage && !profile}
            className="rounded-[4px] bg-[#022959] w-[97px] h-[40px] text-white ml-auto mr-[16px]"
          >
            Next Step
          </button>
        </Link>
      </div>
    </>
  );
}
