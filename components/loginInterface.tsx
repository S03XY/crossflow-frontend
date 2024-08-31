"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { ButtonType1 } from "./button";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { TbUniverse } from "react-icons/tb";
import { ButtonType2 } from "./buttonType2";
import { switchChain } from "@wagmi/core";

import {
  useAccount,
  useConnect,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import {
  sepolia,
  polygonAmoy,
  hederaTestnet,
  chiliz,
  morphHolesky,
  arbitrumSepolia,
  Chain,
} from "wagmi/chains";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateUserDetails } from "@/redux/reducer/user.reducer";
import axios from "axios";
import {
  BASE_URL,
  chainConfigs,
  HEDERA_REGISTER_CONTRACT,
  SEPOLIA_REGISTER_CONTRACT,
} from "@/utils/config";
import { REGISTER_CONTRACT_ABI } from "@/utils/register.abi";
import { encodeBytes32String } from "ethers";

type IStageCallback = {
  forwardStage?: () => void;
  backwardStage?: () => void;
};

export const LoginInterface = () => {
  const [stage, setStage] = useState(0);
  const { isConnected } = useAccount();

  const disptach = useAppDispatch();

  const forwardStage = () => {
    if (stage === 3) {
      disptach(updateUserDetails({ isRegistered: true }));
      return;
    }

    if (isConnected && stage === 0) {
      setStage(2);
      return;
    }

    setStage((prev) => prev + 1);
  };

  const backwardStage = () => {
    if (stage === 0) {
      return;
    }

    if (isConnected && stage === 2) {
      setStage(0);
      return;
    }

    setStage((prev) => prev - 1);
  };

  return (
    <div className="h-full w-full flex justify-center items-center max-w-[400px] mx-auto">
      {stage === 0 && <StageZero forwardStage={forwardStage} />}
      {stage === 1 && (
        <StageOne forwardStage={forwardStage} backwardStage={backwardStage} />
      )}
      {stage === 2 && (
        <StageTwo forwardStage={forwardStage} backwardStage={backwardStage} />
      )}
      {stage === 3 && (
        <StageThree forwardStage={forwardStage} backwardStage={backwardStage} />
      )}
    </div>
  );
};

const StageZero = ({ forwardStage }: IStageCallback) => {
  return (
    <div className="">
      <h1 className="text-3xl flex justify-start items-center space-x-1">
        <TbUniverse />
        <span>Crossflow</span>
      </h1>
      <p className="text-white/50 mt-2">
        Unified interface for crosschain payments
      </p>
      <div className="mt-6">
        <ButtonType1 label="next" icon={GrLinkNext} callback={forwardStage} />
      </div>
    </div>
  );
};

const StageOne = ({ forwardStage, backwardStage }: IStageCallback) => {
  const { connect, connectors } = useConnect();
  const { connector, isConnected, address } = useAccount();

  const login = async () => {
    try {
      connect({ connector: connectors[0] });
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div className="w-full space-y-4">
      <p>Start by loggin in</p>
      <ButtonType2
        label={isConnected ? `Connected: ${address?.substring(0, 6)}` : "Login"}
        callback={login}
      />
      <div className="flex justify-between items-center w-full ">
        <ButtonType1
          label="back"
          icon={GrLinkPrevious}
          callback={backwardStage}
        />
        {isConnected && (
          <ButtonType1
            label="next"
            icon={GrLinkNext}
            callback={() => {
              // TODO if user is already register make him enter the app directly else show futher stages
              forwardStage && forwardStage();
            }}
          />
        )}
      </div>
    </div>
  );
};

const StageTwo = ({ forwardStage, backwardStage }: IStageCallback) => {
  const dispatch = useAppDispatch();

  const checkForDomain = async (
    name: string,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const data = await axios.get(`${BASE_URL}/check-domain?domain=${name}`);

    if (data.data.doesExist) {
      e.target.style.border = "1px solid red";
    } else {
      e.target.style.border = "1px solid white";
    }
    dispatch(updateUserDetails({ domain: name }));
  };

  return (
    <div className="">
      <div className="my-4">
        <h1>CrossFlow ID</h1>
        <p className="text-white/50">
          This ID will lock in all chains and cannot be altered
        </p>
      </div>
      <input
        type="text"
        className="bg-transparent border border-white p-2 rounded-lg w-full focus:outline-none"
        placeholder="johndoe"
        onChange={(e) => {
          checkForDomain(e.target.value, e);
        }}
      />

      <div className="flex justify-between items-center w-full mt-4">
        <ButtonType1
          label="back"
          icon={GrLinkPrevious}
          callback={backwardStage}
        />

        <ButtonType1
          label="next"
          icon={GrLinkNext}
          callback={() => {
            // TODO if user is already register make him enter the app directly else show futher stages
            forwardStage && forwardStage();
          }}
        />
      </div>
    </div>
  );
};

const StageThree = ({ forwardStage, backwardStage }: IStageCallback) => {
  const { domain } = useAppSelector((state) => state.UserReducer);
  const { chain, connector, isConnected, address } = useAccount();
  const [cusConnector, setConnector] = useState<any>();
  const { data: hash, isPending, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  // useEffect(() => {
  //   if (isConfirmed) {
  //     forwardStage && forwardStage();
  //   }
  // }, [isConfirmed]);

  return (
    <div className="flex justify-start items-center flex-col  w-full">
      <h1 className="mb-4 w-full">Activate chains</h1>
      <div className="space-y-3  w-full">
        {[
          hederaTestnet,
          sepolia,
          // morphHolesky,
          // chiliz,
          // polygonAmoy,
          // arbitrumSepolia,
        ].map((c, i) => (
          <button
            className={`p-3 border border-white/50 rounded-lg flex justify-between items-center w-full`}
            key={i}
            onClick={async () => {
              if (chain?.id === c.id) {
                let address: any = "";
                switch (c) {
                  case sepolia:
                    address = SEPOLIA_REGISTER_CONTRACT;
                    break;
                  case hederaTestnet:
                    address = HEDERA_REGISTER_CONTRACT;
                    break;
                }

                const encodedDomain = encodeBytes32String(domain);

                writeContract({
                  abi: REGISTER_CONTRACT_ABI,
                  address: address,
                  functionName: "makeRegisterIntent",
                  args: [encodedDomain],
                  connector: cusConnector,
                });
              } else {
                alert("Metamask does not supprt programmatic chain switching");

                return;
              }
            }}
          >
            <p>{c.name}</p>

            {/* <p className="text-sm bg-white text-black px-4 rounded-full font-bold ">
              Activated
            </p> */}
          </button>
        ))}
      </div>

      <p className="my-4">{isConfirming && "Transaction Pending..."}</p>

      <div className="flex justify-between items-center w-full mt-4">
        <ButtonType1
          label="back"
          icon={GrLinkPrevious}
          callback={backwardStage}
        />

        {/* <ButtonType1
          label="next"
          icon={GrLinkNext}
          callback={() => {
            // TODO if user is already register make him enter the app directly else show futher stages
            forwardStage && forwardStage();
          }}
        /> */}
      </div>
    </div>
  );
};
