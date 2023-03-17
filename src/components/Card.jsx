import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { useCookies } from "react-cookie";
import Image from "next/image";
import React from "react";

const Card = ({ image, name, colorDislike, colorLike, dislike, like }) => {
  const [cookie, setCookie] = useCookies();
  return (
    <div className="card card-side h-60 shadow-xl mb-5">
      <figure>
        <Image
          src={image}
          alt="Avatar"
          className="p-5"
          width={200}
          height={200}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title my-5">{name}</h2>
        <p></p>
        {cookie.token ? (
          <div className="card-actions justify-end items-end">
            <AiFillDislike
              size={25}
              className={`mx-2 hover:cursor-pointer hover:scale-110 ${colorDislike}`}
              onClick={dislike}
            />
            <AiFillLike
              size={25}
              className={`hover:cursor-pointer hover:scale-110 ${colorLike}`}
              onClick={like}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
