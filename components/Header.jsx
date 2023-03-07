"use client";
import { BellAlertIcon } from "@heroicons/react/24/solid";
import Logo from "../public/logo.svg";
import React from "react";
export function Header({}) {
  return (
    <header className="sticky top-1.5 z-20 bg-purple-100 w-full flex justify-between px-5 py-3 items-center rounded-xl shadow-xl">
      <div className="flex items-center justify-center gap-3">
        {/* <img src={'../public/logo.jpg'} className='h-10 w-10 rounded-full'></img> */}
        <div className="font-bold text-3xl">The HIT Times</div>
      </div>
      <BellAlertIcon className="h-6 w-6 cursor-pointer" />
    </header>
  );
}
