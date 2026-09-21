import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log('email', email)
    console.log('password', password)
    setEmail("")
    setPassword("")
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
          Welcome Back
        </h1>

        <p className="mb-6 text-center text-sm text-gray-500">
          Login to your account
        </p>

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col gap-4"
        >
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
            value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              // console.log(e.target.value)
            }}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
          value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              // console.log(e.target.value)
            }}
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            className="mt-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
