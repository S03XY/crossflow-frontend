import { createConfig, http } from "wagmi";
import {
  sepolia,
  polygonAmoy,
  hederaTestnet,
  chiliz,
  morphHolesky,
  arbitrumSepolia,
} from "wagmi/chains";
export const BASE_URL = "http://localhost:3000";

export const HEDERA_REGISTER_CONTRACT =
  "0x51039E55A7D9704c432ce80FC635B5f0b08aC889";
export const SEPOLIA_REGISTER_CONTRACT =
  "0x92B9D07A32ACd3E1966A2A66b29305B6aC1B321E";
export const HOLESKY_REGISTER_CONTRACT =
  "0x92B9D07A32ACd3E1966A2A66b29305B6aC1B321E";

export const chainConfigs = createConfig({
  chains: [sepolia, hederaTestnet],
  transports: {
    [sepolia.id]: http(),
    [hederaTestnet.id]: http(),
  },
});
