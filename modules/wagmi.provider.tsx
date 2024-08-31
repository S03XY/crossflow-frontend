"use client";

import { WagmiProvider, createConfig, http } from "wagmi";
import { hederaTestnet, sepolia } from "wagmi/chains";
import { custom } from "viem";
import { useWeb3Auth } from "@web3auth/modal-react-hooks";
import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Web3AuthConnectorInstance from "@/utils/webAuthConfig";

const queryClient = new QueryClient();

export const CustomWagmiProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const config = createConfig({
    chains: [hederaTestnet, sepolia],
    transports: {
      [hederaTestnet.id]: http(),
      [sepolia.id]: http(),
    },
    connectors: [Web3AuthConnectorInstance([hederaTestnet, sepolia])],
  });

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};
