"use client";

import React, { useState, useEffect } from "react";
import { LoginInterface } from "@/components/loginInterface";
import { useWeb3Auth } from "@web3auth/modal-react-hooks";
import { getDefaultExternalAdapters } from "@web3auth/default-evm-adapter";
// import { web3AuthOptions } from "@/utils/webAuthConfig";
import { useAppSelector } from "@/redux/hooks";
import { useAccount } from "wagmi";

export const InterfaceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // const { initModal, web3Auth, isConnected } = useWeb3Auth();

  const { isRegistered } = useAppSelector((state) => state.UserReducer);
  const { isConnected } = useAccount();

  // useEffect(() => {
  //   const init = async () => {
  //     try {
  //       if (web3Auth) {
  //         //  ? this part is used to add wallets adapter available to the ui
  //         const adapters = await getDefaultExternalAdapters({
  //           options: web3AuthOptions,
  //         });
  //         adapters.forEach((adapter) => {
  //           web3Auth.configureAdapter(adapter);
  //         });
  //         await initModal();
  //       }
  //     } catch (error) {
  //       console.error("error", error);
  //     }
  //   };

  //   init();
  // }, [initModal, web3Auth]);

  return isRegistered && isConnected ? children : <LoginInterface />;
};
