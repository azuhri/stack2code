import iconStuck2Code from "public/images/icon_stuck2code.png";
import banner from "public/images/banner-register.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { log } from "console";
import axios from "axios";
import type { InferGetStaticPropsType, GetStaticProps, GetServerSideProps } from 'next';
import Loading from "@/src/components/loading";
import $ from "jquery";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async () => {
  const API = process.env.API;

  return {
    props: {
      API,
    },
  };
};

export default function RegisterPage({API}:any) {
  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState('');
  const [errorPasswordConfirmDoesntMatch, setErrorPasswordConfirmDoesntMatch] = useState('');

  const router = useRouter();

  const displayNone = {
    display: "none",  
  }

  const validatorEmail = (email:string) => {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      let status = regex.test(email);
      return !status;
  }

  const formSubmit = async (el:any) => {
    el.preventDefault();
    setName(el.target[0].value);
    setEmail(el.target[1].value);
    setPassword(el.target[2].value);
    setPasswordConfirm(el.target[3].value);
    console.log(name);
    if(!name) {
      setErrorName('Data nama harus dimasukan!');
      return
    } else {
      setErrorName('');
    }
    if(!email) {
      setErrorEmail('Data email harus dimasukan!');
      return
    } else if(validatorEmail(email) && email) {
      setErrorEmail('Email tidak valid, tolong cek kembali ya!');
      return
    }  else {
      setErrorEmail('');
    }

    
    if(!password) {
      setErrorPassword("Data password harus dimasukan!");
      return
    } else {
      setErrorPassword('');
    }

    if(!passwordConfirm) {
      setErrorPasswordConfirm("Data password harus dimasukan!");
      return
    } else {
      setErrorPasswordConfirm(''); 
    }
    
    if(password != passwordConfirm) {
      console.log(password, passwordConfirm);
      
      setErrorPasswordConfirmDoesntMatch("Data password dengan konfirmasi password tidak cocok!");
    } else {
      setErrorPasswordConfirmDoesntMatch(''); 
    }
    if(name && email && password && passwordConfirm && (password == passwordConfirm)) {
      setErrorName('');
      setErrorEmail('');
      setErrorPassword('');
      setErrorPasswordConfirm('');
      setErrorPasswordConfirmDoesntMatch('');
      
      try {
        const response = await axios.post(`${API}/api/v1/auth/register`, {
          name, email, password
        });
        console.log(response);
        $("#responseMessage").html("credentials is valid, success to login");
        $("#responseMessage").removeClass("border-red-500 text-red-500 bg-red-200");
        $("#responseMessage").addClass("border-green-500 text-green-500 bg-green-200");
        $("#responseMessage").slideDown(500);
        setTimeout(() => {
          router.push('/login');
        }, 3000);
      } catch (error) {
        const {data} = error.response;
        
        $("#responseMessage").html(`${data.message}`);
        $("#responseMessage").removeClass("border-green-500 text-green-500 bg-green-200");
        $("#responseMessage").addClass("border-red-500 text-red-500 bg-red-200");
        $("#responseMessage").slideDown(500);
      }
    }
  } 

  return (
    <div className="h-screen w-full flex">
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
            src={banner}
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
      <div className="w-full sm:w-1/2 sm:px-[100px] px-10  flex bg-white flex-col">
        <div className="flex justify-center mt-8 mb-[100px]">
          <Image src={iconStuck2Code} alt="Stuck2Code Icon" width="200" />
        </div>
        <p className="text-4xl font-bold text-color-donker">Register</p>
        <p className="font-light text-lg text-gray-500">
          Register with <span className="font-bold text-color-donker">Stuck2Code </span> and Dive into Problem-Solving!
        </p>
        <form 
        onSubmit={formSubmit}
        className="my-4">
          <div id="responseMessage" style={displayNone} className="mt-2 text-center p-3 border border-green-500 bg-green-200 rounded-lg text-green-500 font-bold">
            
          </div>
          <div className="my-2 flex flex-col">
            <label htmlFor="name" className="my-1 text-color-donker text-lg">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border font-bold text-gray-500 border-color-gray shadow p-2 py-3 rounded-lg"
              placeholder="Enter your name here..."
            />
            {errorName && <span className="mt-1 font-bold text-red-600 text-xs">{errorName}</span> }
          </div>
          <div className="my-2 flex flex-col">
            <label htmlFor="email" className="my-1 text-color-donker text-lg">
              Email
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="border font-bold text-gray-500 border-color-gray shadow p-2 py-3 rounded-lg"
              placeholder="Enter your email here..."
            />
            {errorEmail && <span className="mt-1 font-bold text-red-600 text-xs">{errorEmail}</span> }
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
              onChange={(e) => setPassword(e.target.value)}
              className="border font-bold text-gray-500 border-color-gray shadow p-2 py-3 rounded-lg"
              placeholder="Enter your password here..."
            />
            {errorPassword && <span className="mt-1 font-bold text-red-600 text-xs">{errorPassword}</span> }
          </div>
          <div className="my-2 flex flex-col">
            <label
              htmlFor="confirm_password"
              className="my-1 text-color-donker text-lg"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm_password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
              id="confirm_password"
              className="border font-bold text-gray-500 border-color-gray shadow p-2 py-3 rounded-lg"
              placeholder="Enter your password here..."
            />
            {errorPasswordConfirm && <span className="mt-1 font-bold text-red-600 text-xs">{errorPasswordConfirm}</span> }
            {errorPasswordConfirmDoesntMatch && <span className="mt-1 font-bold text-red-600 text-xs">{errorPasswordConfirmDoesntMatch}</span> }
          </div>
          <div className="mt-10 flex flex-col">
            <button className="w-full text-center bg-whte border-color-donker bg-color-donker py-4 text-white font-bold rounded-lg">
              Register
            </button>
            <span className="text-center mt-2 font-light text-lg text-gray-500">
              already have an account ?{" "}
              <Link
                href="/login"
                className="font-bold text-color-donker hover:text-color-cyan20"
              >
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
