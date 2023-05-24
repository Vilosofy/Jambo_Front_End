import React from "react";
import "./Register.css";
import signkiri from "./assetSign/signKiri.png";
import signkanan from "./assetSign/signKanan.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-[#FFFFF3]">
      <div className="flex flex-row justify-between items-center h-screen">
        <img
          src={signkiri}
          alt="signKiri"
          className="w-72 flex justify-items-start self-end"
        />
        <div
          id="form"
          className="border border-black rounded-md bg-[#D0EA57] w-96 px-16 pt-16"
        >
          <form action="">
            <h2 className="flex flex-row text-black-700 text-3xl font-semibold pb-10 justify-center">
              {" "}
              Sign Up{" "}
            </h2>
            <div id="username" className="flex flex-row">
              <div className="pb-4">
                <label for="username" className="">
                  {" "}
                  Username{" "}
                </label>
                <input
                  type="text"
                  name=""
                  id="username"
                  className="h-8 w-full  border-black border-b-2 text-sm pl-2 bg-[#D0EA57] shadow-sm"
                />
              </div>
            </div>

            <div id="password" className="flex flex-row">
              <div className="">
                <label for="password" className="mr-1">
                  {" "}
                  Password{" "}
                </label>
                <input
                  type="password"
                  name=""
                  id="password"
                  className="h-8 w-full border-black border-b-2 text-sm pl-2 bg-[#D0EA57] shadow-sm"
                />
              </div>
            </div>

            <div id="remember&forgot" className="flex flex-row">
              <div className="flex flex-row gap-8 pt-1 pb-10">
                <div
                  id="remember"
                  className="flex flex-row text-sm mb-2 italic"
                >
                  <input
                    type="checkbox"
                    name="remember"
                    className="text-sm mx-1"
                  ></input>
                  <p>Remember Me</p>
                </div>
                <div id="forgot" className="text-sm mb-2">
                  {" "}
                  <p>Forgot Password</p>{" "}
                </div>
              </div>
            </div>

            <button
              type="sumbit"
              name=""
              id="SignUp"
              className="bg-[#FFFFF3] F w-full border border-black border-2 h-10 cursor-pointer text-black text-xl rounded-md font-medium"
            >
              SIGN UP
            </button>

            <div className="flex justify-center text-xs my-2 pt-16 self-end">
                <p className="">
                Already have an account?
                </p>
                <Link to="/sign-in"> Sign in </Link>
            </div>
          </form>
        </div>

        <img
          src={signkanan}
          alt="signKanan"
          className="w-72 flex justify-items-end self-start"
        />
      </div>
    </div>
  );
};

export default Register;
