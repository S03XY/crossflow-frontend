"use client";

import { useAppDispatch } from "@/redux/hooks";
import { ButtonType2 } from "./buttonType2";
import { IoMdArrowRoundBack } from "react-icons/io";
import { updateAppState } from "@/redux/reducer/appState";

export const TokenTransfer = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="p-4">
      <button
        className=""
        onClick={() => {
          console.log("clicked");
          dispatch(updateAppState({ transferSection: false }));
        }}
      >
        <IoMdArrowRoundBack className="text-2xl" />
      </button>
      <div className="">
        <h1 className="text-xl mt-4 mb-2">CrossflowId</h1>
        <input
          type="text"
          className="w-full p-2 rounded-lg bg-transparent border border-white/50"
          placeholder="crossflow id"
        />
        <h1 className="text-xl mt-6 mb-2">Amount</h1>
        <input
          type="text"
          className="w-full p-2 rounded-lg bg-transparent border border-white/50"
          placeholder="amount"
        />
      </div>

      <h1 className="text-xl mt-6 mb-2">Balance</h1>
      {[1, 1].map((d, i) => (
        <div
          className="flex justify-between items-center flex-col mt-4 border border-white/30 p-4 rounded-lg space-y-4"
          key={i}
        >
          <div className="flex justify-between items-center  w-full">
            <div>
              <h1>Polygon</h1>
              <h1 className="text-white/50">shashank@polygon</h1>
            </div>
            <div>
              <h1 className="text-center">100</h1>
              <h1 className="text-white/30">130 $</h1>
            </div>
          </div>
          <ButtonType2 label="Send" />
        </div>
      ))}
    </div>
  );
};
