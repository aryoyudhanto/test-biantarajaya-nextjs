import { useQueryClient, useQuery } from "react-query";
import React, { useState } from "react";
import Head from "next/head";
import Router from "next/router";
import axios from "axios";

import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";

const Home = () => {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  const getUsers = async (page) => {
    const response = await axios.get(
      `https://reqres.in/api/users?page=${page}`
    );
    return response.data.data.map((user) => ({
      ...user,
      liked: false,
      disliked: false,
    }));
  };

  const { data, isLoading } = useQuery(["users", page], () => getUsers(page), {
    refetchOnWindowFocus: false,
  });

  const handleLike = (user) => {
    if (user.liked != true) {
      const updatedUser = { ...user, liked: true, disliked: false };
      queryClient.setQueryData(["users", page], (oldData) =>
        oldData.map((u) => (u.id === user.id ? updatedUser : u))
      );
    } else {
      const updatedUser = { ...user, liked: false, disliked: false };
      queryClient.setQueryData(["users", page], (oldData) =>
        oldData.map((u) => (u.id === user.id ? updatedUser : u))
      );
    }
  };

  const handleDislike = (user) => {
    if (user.disliked != true) {
      const updatedUser = { ...user, liked: false, disliked: true };
      queryClient.setQueryData(["users", page], (oldData) =>
        oldData.map((u) => (u.id === user.id ? updatedUser : u))
      );
    } else {
      const updatedUser = { ...user, liked: false, disliked: false };
      queryClient.setQueryData(["users", page], (oldData) =>
        oldData.map((u) => (u.id === user.id ? updatedUser : u))
      );
    }
  };

  function getDetail(user, id) {
    Router.push({
      pathname: `/detail/${id}`,
      query: {
        first_name: user.first_name,
        last_name: user.last_name,
        id: user.id,
        email: user.email,
        avatar: user.avatar,
        liked: user.liked,
        disliked: user.disliked,
      },
    });
  }

  const handlePreviousPage = () => setPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setPage((prev) => prev + 1);
  if (page > 2) {
    setPage(2);
  }

  if (isLoading)
    return (
      <div className="text-5xl text-center animate-pulse text-gray-400 my-24">
        Loading...
      </div>
    );
  if (!data)
    return (
      <div className="text-5xl text-center animate-pulse text-gray-400 my-24">
        No data!
      </div>
    );

  return (
    <Layout>
      <Head>
        <title>Home - ReqRes User App</title>
      </Head>
      <Navbar />
      <div className="mx-5 mt-10 md:mx-14 md:mt-14">
        <p className="text-xl font-semibold text-black capitalize">user list</p>
      </div>
      <div className="mx-5 mt-10 md:m-14 grid grid-rows-4 grid-flow-col gap-2">
        {data.slice(0, 4).map((user) => (
          <Card
            key={user.id}
            image={user.avatar}
            name={user.first_name + " " + user.last_name}
            like={() => handleLike(user)}
            colorLike={user.liked === true ? "text-red-500" : "text-black"}
            dislike={() => handleDislike(user)}
            colorDislike={
              user.disliked === true ? "text-red-500" : "text-black"
            }
            onclikDetail={() => getDetail(user, user.id)}
          />
        ))}
      </div>
      <div className="btn-group w-full justify-center mb-10">
        <button
          className="btn bg-[#f5f5f5] text-black hover:text-white border-black border-r-0"
          onClick={() => handlePreviousPage()}
        >
          «
        </button>
        <button className="btn bg-[#f5f5f5] text-black hover:text-white border-black border-r-0 border-l-0">
          {page}
        </button>
        <button
          className="btn bg-[#f5f5f5] text-black hover:text-white border-black border-l-0"
          onClick={() => handleNextPage()}
        >
          »
        </button>
      </div>
    </Layout>
  );
};

export default Home;
