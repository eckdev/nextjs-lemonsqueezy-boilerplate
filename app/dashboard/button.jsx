"use client";
import React, { useEffect } from "react";

const Button = ({ subscribed }) => {
  useEffect(() => {
    window.createLemonSqueezy();
  }, []);
  return (
    <>
      {!subscribed && (
        <button
          className="rounded-xl bg-black p-5 text-white"
          onClick={() => {
            const url =
              "https://eyuptest.lemonsqueezy.com/checkout/buy/3acf160d-ecb0-4887-8974-d166c4f34d62?embed=1";
            LemonSqueezy.Url.Open(url);
          }}
        >
          Abone ol
        </button>
      )}
      {
        subscribed && <span>Subscribed</span>
      }
    </>
  );
};

export default Button;
