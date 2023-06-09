import { useCookies } from "react-cookie";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Swal from "sweetalert2";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";

import CustomInput from "@/components/CustomInput";
import Button from "@/components/Button";
import Layout from "@/components/Layout";

const Login = () => {
  const [passtype, setPasstype] = useState("password");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies();
  const [email, setEmail] = useState("");
  const router = useRouter();

  function tooglePass() {
    if (passtype === "password") {
      setPasstype("text");
    }
    if (passtype === "text") {
      setPasstype("password");
    }
  }

  function loginHandler(e) {
    e.preventDefault();
    axios
      .post(`https://reqres.in/api/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        const { token } = res.data;
        Swal.fire({
          position: "center",
          icon: "success",
          text: "Login success",
          showConfirmButton: false,
          timer: 2000,
        });
        setCookie("token", token);
        router.push("/home");
      })
      .catch((err) => {
        const { data } = err.response;
        const { error } = data;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error + ", try again!",
          showConfirmButton: true,
        });
      });
  }

  return (
    <Layout>
      <Head>
        <title>Login - ReqRes User App</title>
      </Head>
      <div className="w-full flex justify-center items-center px-5 md:px-16 py-8">
        <section className="w-1/2 hidden xl:flex">
          <Image
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"
            alt="login-art"
            width={1000}
            height={1000}
          />
        </section>
        <section className="my-14 md:my-20 xl:w-1/2 md:px-20">
          <div className="w-full bg-gray-100 rounded-2xl px-5 md:px-14 pt-10 pb-10 flex flex-col gap-10 shadow-lg shadow-gray-500">
            <div className="flex flex-col items-center">
              <p className="font-bold text-3xl text-blue-700 uppercase">
                login
              </p>
              <p className="font-bold text-lg tracking-widest text-black">
                ReqRes User App
              </p>
            </div>
            <form onSubmit={loginHandler}>
              <CustomInput
                id="input-email"
                inputSet="text-black"
                placeholder="youremail@email.com"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <CustomInput
                id="input-password"
                inputSet="text-black my-2"
                placeholder="Password"
                type={passtype}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex my-5">
                <input
                  id="checkbox-show-password"
                  type="checkbox"
                  onClick={() => tooglePass()}
                />
                <label className="text-sm mx-2 capitalize">show password</label>
              </div>
              <Button
                id="btn-login"
                buttonSet="w-full rounded-lg bg-blue-700 font-bold py-3 hover:bg-blue-600 text-white border-0 mt-14"
                label="LOGIN"
                type="submit"
              />
            </form>

            <p className="text-center">
              Go to{" "}
              <Link href={"/home"}>
                <span className="underline hover:text-blue-500">home</span>{" "}
              </Link>
              without login
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Login;
