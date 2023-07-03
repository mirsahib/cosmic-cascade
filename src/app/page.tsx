"use client"
import FormInput from "@/components/FormInput";
import useCustomForm from "@/hook/useCustomForm";
import Link from "next/link";

export default function Home() {
  const { handleSubmit, register, errors, onSubmit } = useCustomForm("login");

  return (
    <section className="flex justify-center items-center text-gray-800 py-8">
      <div className="flex flex-col items-center w-[24em] lg:w-[30em] sm:w-[22em]">
        <div className="w-[90%] lg:w-[67%]  text-center mb-5">
          <h1 className="font-semibold">Sign in to your account</h1>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center"
          >
            <FormInput
              id="email"
              label={<label className="text-xs mb-1">Email</label>}
              containerclassname="w-72 lg:w-80 flex flex-col mb-5"
              type="email"
              inputclassname={`h-10 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3 ${
                errors.email ? "focus:outline-red-500" : "mb-5"
              }`}
              autoComplete="on"
              placeholder="yoursemail@domain.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered text is not a valid email",
                },
              })}
            />
            {errors.email && (
              <span role="alert" className="mb-5 mr-auto text-sm text-red-600">
                {errors.email.message}
              </span>
            )}

            <FormInput
              id="password"
              label={<label className="text-xs mb-1">Password</label>}
              containerclassname="w-72 lg:w-80 flex flex-col "
              type="password"
              inputclassname={`h-10 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3 ${
                errors.password ? "focus:outline-red-500" : ""
              }`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 character long",
                },
              })}
            />
            {errors.password && (
              <span role="alert" className="mb-5 mr-auto text-sm text-red-600">
                {errors.password.message}
              </span>
            )}
            <Link
              href={"/"}
              className="text-indigo-500 hover:underline text-sm ml-auto mb-5"
            >
              Forgot Password?
            </Link>
            {/* import forgot password  */}
            <div className="mb-10">
              <button className="w-72 lg:w-80 h-12 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold ">
                <span>Sign in </span>
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-row items-center my-5">
          <div className="w-20 border-t border-gray-400 flex"></div>
          <span className="mx-4">or continue with</span>
          <div className="w-20 border-t border-gray-400 flex"></div>{" "}
        </div>

        <p className="text-xs">
          Don't have an account
          <span className="text-indigo-500 hover:underline">
            <Link href={"/user/signup"}> create an account</Link>
          </span>
        </p>
      </div>
    </section>
  );
}
