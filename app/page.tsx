"use client";

import { ButtonType2 } from "@/components/buttonType2";
import { TokenTransfer } from "@/components/tokenTransfer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateAppState } from "@/redux/reducer/appState";
import { FaHandSparkles } from "react-icons/fa";

export default function Home() {
  const { transferSection } = useAppSelector((state) => state.AppStateReducer);
  const dispatch = useAppDispatch();

  return !transferSection ? (
    <div className="p-6">
      <div className="border border-white/50 rounded-lg p-4 space-y-4">
        <h1 className="flex justify-start items-center text-xl space-x-2">
          <FaHandSparkles />
          <span>Hi,Shashank</span>
        </h1>

        <h1 className="text-xl space-x-2">
          <span className="text-white/50">Balance:</span>
          <span>390 $</span>
        </h1>
        <h1 className="text-xl space-x-2">
          <span className="text-white/50">Reward:</span>
          <span>20 CFTs</span>
        </h1>

        <div className="flex justify-between items-center space-x-4">
          <ButtonType2
            label="Send"
            callback={() => {
              dispatch(updateAppState({ transferSection: true }));
            }}
          />
          <ButtonType2 label="Receive" isDisabled={true} />
          <ButtonType2 label="QR" isDisabled={true} />
        </div>
      </div>

      <div className="mt-6">
        <h1 className="mb-6">Active Network</h1>
        {[1, 1, 1, 1, 1].map((d, i) => (
          <div
            className="flex justify-between items-center mt-4 border border-white/30 p-4 rounded-lg"
            key={i}
          >
            <div>
              <h1>Polygon</h1>
              <h1 className="text-white/50">shashank@polygon</h1>
            </div>
            <div>
              <h1 className="text-center">100</h1>
              <h1 className="text-white/30">130 $</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <TokenTransfer />
  );
}
