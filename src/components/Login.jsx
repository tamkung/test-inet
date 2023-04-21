import React from "react";
import Logo from "../assets/img/logo.png";
import Img_btn from "../assets/img/img-btn.jpg";
import { IoMdMail, IoMdLock } from "react-icons/io";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Login() {
  const [inputType, setInputType] = React.useState("password");
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 ">
      <div className="mr-auto ml-auto mb-10 mt-20">
        <img src={Logo} alt="LOGO" />
      </div>
      <div className="ml-auto mr-auto  w-[25rem] h-[30rem] bg-white drop-shadow-lg">
        <div className="mt-9 sm:mx-auto sm:w-full sm:max-w-sm px-5">
          <h1 className="text-center text-2xl text-blue-950 font-semibold">
            เข้าสู่ระบบ
          </h1>
          <form className="space-y-6">
            <div>
              <div className="mt-9">
                <IoMdMail
                  className="absolute mt-2 ml-4 "
                  size={25}
                  color="#525252"
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="XXXXXXXX"
                  required
                  className="pl-14 h-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>

            <div>
              <div className="mt-2 flex">
                <IoMdLock
                  className="absolute mt-2 ml-[16px] "
                  size={25}
                  color="#525252"
                />
                <input
                  id="password"
                  name="password"
                  type={inputType}
                  placeholder="**********"
                  required
                  className="pl-14 h-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                />
                <div className="absolute right-10 mt-[10px]">
                  {inputType === "password" ? (
                    <BsEyeSlashFill
                      size={20}
                      color="#525252"
                      onClick={() => setInputType("text")}
                    />
                  ) : (
                    <BsEyeFill
                      size={20}
                      color="#525252"
                      onClick={() => setInputType("password")}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="mt-10">
              <NavLink
                className="mt-14 flex w-full justify-center rounded-md bg-[#539b33] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm "
                to="/todo"
              >
                เข้าสู่ระบบ
              </NavLink>
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
            <hr className="w-full mt-2" />
            <p className="mr-3 ml-3 text-[12px] text-gray-400">หรือ</p>
            <hr className="w-full mt-2" />
          </div>

          <div className="mt-4 drop-shadow-sm ">
            <button
              type="submit"
              className="text-sm flex h-12 w-full justify-center border-solid border-2 rounded-md bg-[#ffffff] px-3 py-1.5 leading-6 "
            >
              <div className="flex justify-center text-center content-center">
                <img
                  src={Img_btn}
                  alt="OpenLandscape"
                  className="w-10 absolute top-1 left-5"
                />
                <p className="mt-1 absolute right-5">สร้างบัญชีผู้ใช้งานโดย OPENLANDSCAPE</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-sm leading-6 text-blue-900 hover:text-indigo-500">
        <a href="#">ติดต่อเจ้าหน้าที่</a>
      </p>
    </div>
  );
}

export default Login;
