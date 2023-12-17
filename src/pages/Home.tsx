import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormData = {
  name: string;
  email: string;
  phone: string;
};

export default function Home() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const storedUsers = localStorage.getItem("users");
    const prevUsers = storedUsers ? JSON.parse(storedUsers) : [];

    const { name, email, phone } = data;

    localStorage.setItem(
      "users",
      JSON.stringify([...prevUsers, { name, email, phone }])
    );
    navigate("/select_your_plan");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="w-[343px]  bg-white absolute top-[100px] right-4 px-6 flex flex-col items-start justify-center gap-6 py-8 rounded-[10px] xl:w-[450px] xl:rounded-none xl:p-0 xl:mr-[80px] xl:top-[40px] ">
        <div>
          <h1 className=" text-[24px] font-bold xl:text-[32px]">
            Personal info
          </h1>
          <p className="text-[16px] font-normal leading-[25px] text-[#9699AA] ">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className=" relative">
            <p className="text-[12px] text-[#022959] font-normal">Name</p>
            <input
              className="w-full rounded-[4px] h-10 border border-[#D6D9E6] pl-[16px] "
              placeholder="e.g. Stephen King"
              type="text"
              {...register("name", {
                required: "This field is required",
              })}
            />
            {errors.name && (
              <div>
                <p className=" text-xs text-[#CD2C2C] right-0 top-0 absolute">
                  {" "}
                  {errors.name.message}{" "}
                </p>
              </div>
            )}
          </div>
          <div className=" relative">
            <p className="text-[12px] text-[#022959] font-normal">
              Email Address
            </p>
            <input
              className="w-full rounded-[4px] h-10 border border-[#D6D9E6] pl-[16px]"
              placeholder="e.g. stephenking@lorem.com"
              type="text"
              {...register("email", {
                required: "This field is required",
              })}
            />
            {errors.email && (
              <div>
                <p className=" absolute text-xs text-[#CD2C2C] right-0 top-0">
                  {" "}
                  {errors.email.message}{" "}
                </p>
              </div>
            )}
          </div>
          <div className=" relative">
            <p className="text-[12px] text-[#022959] font-normal">
              Phone Number
            </p>
            <input
              className="w-full rounded-[4px] h-10 border border-[#D6D9E6] pl-[16px]"
              placeholder="e.g. +1 234 567 890"
              type="text"
              {...register("phone", {
                required: "This field is required",
              })}
            />
            {errors.phone && (
              <div>
                <p className=" absolute text-xs text-[#CD2C2C] right-0 top-0">
                  {" "}
                  {errors.phone.message}{" "}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className=" flex flex-row items-center justify-end border border-[#EFF5FF]] w-full h-[72px] bg-white">
        <button
          type="submit"
          className="rounded-[4px] bg-[#022959] w-[97px] h-[40px] text-white  mr-[16px] cursor-pointer xl:mr-[80px] xl:w-[128px] xl:h-[48px]"
        >
          Next Step
        </button>
      </div>
    </form>
  );
}
