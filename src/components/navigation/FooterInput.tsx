"use client";

import React from "react";
import { ArrowRight } from "react-feather";

type Props = {
  [key: string]: any;
  id: string;
  label: string;
};

export default function FooterInput({ id, label, ...rest }: Props) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="relative inline-flex border-[1px] border-gray-300 focus-within:outline-[1.5px] focus-within:outline-black"
    >
      <div className="relative h-full">
        <label className="sr-only" htmlFor={id}>
          {label}
        </label>
        <input
          className="border-none w-full h-full my-0 mx-0 py-[0.25rem] py-[0.5em] text-sm"
          id={id}
          {...rest}
        />
      </div>
      <button className="py-[0.325rem] px-[0.5rem] h-8 border-none outline-[1px] outline-black bg-transparent duration-200 cursor-pointer hover:bg-black hover:text-white focus:bg-black focus:text-white">
        <ArrowRight size={20} />
      </button>
    </form>
  );
}
