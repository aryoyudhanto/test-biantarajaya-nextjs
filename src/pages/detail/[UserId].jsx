import { useRouter } from "next/router";
import Router from "next/router";
import Image from "next/image";
import Head from "next/head";
import React from "react";

import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";

const Detail = () => {
  const router = useRouter();

  return (
    <Layout>
        <Head>
        <title>Detail - ReqRes User App</title>
      </Head>
      <Navbar />
      <p className="text-xl font-semibold text-black mx-5 md:mx-14 mt-14 mb-5">
        Detail User
      </p>
      <div className="w-full">
        <div className="h-full bg-gray-300 my-3 mx-5 md:mx-14 rounded-2xl opacity-80 lg:flex lg:my-10">
          <div className="w-full flex justify-center lg:items-center lg:w-1/2 ">
            <Image
              src={router.query?.avatar}
              alt="Avatar"
              className="my-10 rounded-2xl px-5"
              width={400}
              height={400}
            />
          </div>
          <div className="flex w-full lg:w-1/2 justify-center pb-5 px-5 lg:py-10 lg:justify-start md:px-16 lg:px-5">
            <div className="w-full">
              <p className="text-center text-3xl md:text-5xl font-bold uppercase text-black mb-10">
                {router.query?.first_name + " " + router.query?.last_name}
              </p>
              <p className="text-left text-md md:text-xl pb-2 font-semibold text-black">
                First Name:{" "}
                <span className="font-normal">{router.query?.first_name} </span>
              </p>
              <p className="text-left text-md md:text-xl pb-2 font-semibold text-black">
                Last Name:{" "}
                <span className="font-normal">{router.query?.last_name}</span>
              </p>
              <p className="text-left text-md md:text-xl pb-2 font-semibold text-black">
                Email:{" "}
                <span className="font-normal">{router.query?.email}</span>
              </p>
              <button
                className="my-5 md:mb-0 btn w-1/2 md:w-1/4 capitalize bg-white border-none text-black text-lg md:text-xl transition hover:scale-105 hover:bg-[#f5f5f5]"
                onClick={() => Router.back()}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
