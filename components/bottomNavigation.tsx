"use client";

import { GoHome } from "react-icons/go";
import { LuHistory } from "react-icons/lu";
import { MdOutlineAccountCircle } from "react-icons/md";

import { PiChatTextBold } from "react-icons/pi";

import { usePathname } from "next/navigation";
import Link from "next/link";

export const BottomNavigation = () => {
  const path = usePathname();

  return (
    <div className="grid grid-cols-3 grid-rows-1 absolute bottom-0 left-0 right-0 text-[28px] py-6 place-items-center ">
      <Link href={"/"}>
        <GoHome
          className={`cursor-pointer ${path === "/" && "text-secondary"}`}
        />
      </Link>

      <Link href={"/history"}>
        <LuHistory
          className={`cursor-pointer ${
            path === "/history" && "text-secondary"
          }`}
        />
      </Link>

      {/* <Link href={"/account"}>
        <MdOutlineAccountCircle
          className={`cursor-pointer ${
            path === "/account" && "text-secondary"
          }`}
        />
      </Link> */}
      <Link href={"https://app.converse.xyz/conversation"}>
        <PiChatTextBold
          className={`cursor-pointer ${
            path === "/chat" && "text-secondary"
          }`}
        />
      </Link>
    </div>
  );
};
