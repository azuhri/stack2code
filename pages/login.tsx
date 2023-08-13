import iconStuck2Code from "public/images/icon_stuck2code.png";
import bannerLogin from "public/images/banner-login2.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  return (
    <div className="h-screen w-full flex">
      <div className="w-full sm:w-1/2 sm:px-[100px] px-10  flex bg-white flex-col">
        <div className="flex justify-center mt-8 mb-[100px]">
          <Image src={iconStuck2Code} alt="Stuck2Code Icon" width="200" />
        </div>
        <p className="text-4xl font-bold text-color-donker">Login</p>
        <p className="font-light text-lg text-gray-500">
          Welcome to{" "}
          <span className="font-bold text-color-donker">Stuck2Code </span>to
          solve any stuck coding case 
        </p>
        <form className="my-4">
          <div className="my-2 flex flex-col">
            <label htmlFor="email" className="my-1 text-color-donker text-lg">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="border border-color-gray shadow p-2 py-3 rounded-lg"
              placeholder="Enter your email here..."
            />
          </div>
          <div className="my-2 flex flex-col">
            <label
              htmlFor="password"
              className="my-1 text-color-donker text-lg"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-color-gray shadow p-2 py-3 rounded-lg"
              placeholder="Enter your password here..."
            />
          </div>
          <div className="mt-[100px] flex flex-col">
            <button className="w-full text-center bg-whte border-color-donker bg-color-donker py-4 text-white font-bold rounded-lg">
              Login
            </button>
            <span className="text-center mt-2 font-light text-lg text-gray-500">
              does'nt have an account ?{" "}
              <Link
                href="/register"
                className="font-bold text-color-donker hover:text-color-cyan20"
              >
                Register
              </Link>
            </span>
          </div>
        </form>
      </div>
      <div className="hidden sm:block w-1/2 bg-gradient-to-tr from-color-donker to-color-cyan20">
        <div className="flex h-full p-4 justify-center items-center flex-col">
          <style global jsx>{`
              .banner {
                position: relative;
                animation: moveUpDown 3s linear infinite;
              }
              @keyframes moveUpDown {
                0% {
                  top: 0;
                }
  
                50% {
                  top: 30px;
                  /* Atur ketinggian maksimal pergerakan gambar */
                }
  
                100% {
                  top: 0;
                }
              }
          `}</style>
          <Image
            src={bannerLogin}
            alt="Banner Login"
            width="350"
            className="banner"
          />
          <p className="font-semibold text-2xl mt-6 my-2 text-white text-center">
            Stuck<span className="text-color-cyan10">2Code</span>
          </p>
          <p className="text-white font-white text-center">
            Becoming Code Problem Solvers Together!
          </p>
        </div>
      </div>
    </div>
  );
}
