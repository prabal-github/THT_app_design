"use client";
import React from "react";
import { BellAlertIcon, NewspaperIcon, ArrowTopRightOnSquareIcon, PhotoIcon } from '@heroicons/react/24/solid'

export function Footer({}) {
  return (
    <footer className="sticky bottom-0 z-20 text-xs bg-purple-100 w-full flex justify-between px-4 py-3 items-center rounded-xl shadow-xl">
      <div className="flex flex-col justify-center items-center">
        <PhotoIcon className="h-6 w-6 cursor-pointer" />
        <div>Weeklies</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <NewspaperIcon className="h-6 w-6 cursor-pointer" />
        <div>News</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <ArrowTopRightOnSquareIcon className="h-6 w-6 cursor-pointer" />
        <div>App Exclusive</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <BellAlertIcon className="h-6 w-6 cursor-pointer" />
        <div>About Us</div>
      </div>
    </footer>
  );
}
