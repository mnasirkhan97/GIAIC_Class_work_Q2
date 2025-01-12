"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useRef } from "react";

function Auth() {
  const email = useRef<HTMLInputElement>(null);
  //   console.log("email Inside => :", email);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const emailResponse = email?.current?.value;
    console.log("emailResponse => :", emailResponse);
    e.preventDefault();
    const url = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailResponse }),
    });
    // console.log("url => :", url);

    //==> receving resposne from API
    const data = await url.json();
    console.log("data => :", data);
    if (data.redirectURL) {
      router.push(data.redirectURL);
    }
  };

  //   console.log("email outside  => :", email);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md max-w-sm w-full"
      >
        <input
          ref={email}
          type="email"
          placeholder="Enter email"
          className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
      </form>
    </div>
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <input ref={email} type="email" placeholder="Enter email" />

    //     {/* <input type="password" placeholder="Password" /> */}
    //     <button className="bg-green-200" type="submit">
    //       Login
    //     </button>
    //   </form>
    // </div>
  );
}

export default Auth;
