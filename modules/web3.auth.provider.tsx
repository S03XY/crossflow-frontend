"use client";

import { web3AuthContextConfig } from "@/utils/webAuthConfig";
import {
  Web3AuthProvider,
  Web3AuthInnerContext,
} from "@web3auth/modal-react-hooks";
import React from "react";
import { WalletServicesProvider } from "@web3auth/wallet-services-plugin-react-hooks";

export const CustomWeb3AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Web3AuthProvider config={web3AuthContextConfig}>
      {/* required for wallet interface */}
      <WalletServicesProvider context={Web3AuthInnerContext}>
        {children}
      </WalletServicesProvider>
    </Web3AuthProvider>
  );
};
