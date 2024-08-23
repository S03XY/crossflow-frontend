"use client";

import { WagmiProvider, createConfig, http } from "wagmi";
import { sepolia } from "wagmi/chains";
import { custom } from "viem";
import { useWeb3Auth } from "@web3auth/modal-react-hooks";
import React, { useEffect, useState } from "react";

export const CustomWagmiProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
//   const [count, setCount] = useState(0);

  const [config, setConfig] = useState<any>(
    createConfig({
      chains: [sepolia],
      transports: {
        [sepolia.id]: http(),
      },
    })
  );

  const { provider } = useWeb3Auth();

  useEffect(() => {
    if (provider) {
      setConfig(
        createConfig({
          chains: [sepolia],
          transports: {
            [sepolia.id]: provider ? custom(provider) : http(),
          },
        })
      );
    }
  }, [config]);

  return <WagmiProvider config={config}>{children}</WagmiProvider>;
};
