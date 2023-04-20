import React from "react";
import Logo from "../assets/img/logo.png";
import Img_btn from "../assets/img/img-btn.jpg";
import "../css/login.css";

function Login() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 ">
      <div className="mr-auto ml-auto mb-10 mt-20">
        <img src={Logo} alt="LOGO" />
      </div>
      <div className="ml-auto mr-auto  w-[28rem] h-[29rem] bg-white drop-shadow-lg">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-center text-2xl text-blue-950">เข้าสู่ระบบ</h1>
          <form className="space-y-6">
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className=" flex w-full justify-center rounded-md bg-[#539b33] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                เข้าสู่ระบบ
              </button>
            </div>
          </form>

          <p className="mt-7 text-center text-sm text-gray-500">
            ลืมรหัสผ่าน{" "}
            <a
              href="#"
              className=" leading-6 text-blue-900 hover:text-indigo-500"
            >
              คลิกที่นี่
            </a>
          </p>
          
          <div className="flex mt-4">
            <hr className="w-full mt-2"/>
            <p className="mr-3 ml-3 text-[12px] text-gray-400">
                หรือ
            </p>
            <hr className="w-full mt-2"/>
          </div>

          <div className="mt-4 drop-shadow-sm ">
            <button
              type="submit"
              className="text-sm flex h-12 w-full justify-center border-solid border-2 rounded-md bg-[#ffffff] px-3 py-1.5 leading-6 "
            >
              <div className="flex justify-center text-center content-center">
                <img src={Img_btn} alt="google" className="w-10 absolute top-1 left-5" />
                <p className="mt-1">สร้างบัญชีผู้ใช้งานโดย OPENLANDSCAPE</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
