import React, { useState } from "react";
import axios from "axios";

import CustomInput from "@/components/CustomInput";
import Button from "@/components/Button";

const index = () => {
  const [passType, setPassType] = useState("password");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function tooglePass() {
    if (passType === "password") {
      setPassType("text");
    }
    if (passType === "text") {
      setPassType("password");
    }
  }
  
  function loginHandler(){
    
  }

  return (
    <div className="w-full flex justify-center items-center px-5 md:px-16 py-8">
      <section className="w-1/2 hidden xl:flex">
        <img
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"
          alt="login-art"
        />
      </section>
      <section className="my-14 md:my-20 xl:w-1/2 md:px-20">
        <div className="w-full bg-gray-100 rounded-2xl px-5 md:px-14 pt-10 pb-20 flex flex-col gap-10 shadow-lg shadow-gray-500">
          <div className="flex flex-col items-center">
            <p className="font-bold text-3xl text-blue-700 uppercase">login</p>
            <p className="font-bold text-lg tracking-widest capitalize text-black">
              user apps
            </p>
          </div>
          <form onSubmit={(e) => authLogin(e)}>
            <CustomInput
              id="input-email"
              inputSet="text-black"
              placeholder="youremail@email.com"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomInput
              id="input-password"
              inputSet="text-black my-2"
              placeholder="Password"
              type={passType}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex my-7">
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
        </div>
      </section>
    </div>
  );
};

export default index;
