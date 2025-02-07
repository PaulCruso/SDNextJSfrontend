import { defineChain } from 'viem'

export const ArbTestnet = defineChain({
  id: 421614,
  name: 'Arbitrum Sepolia Testnet',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://arbitrum-sepolia.infura.io/v3/61679e33f48747afac34c6aabc66e5c4'] },
  },
  blockExplorers: {
    default: { name: 'sepolia.arbiscan', url: 'https://sepolia.arbiscan.io/' },
  },
  // contracts: {
  //   ensRegistry: {
  //     address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  //   },
  //   ensUniversalResolver: {
  //     address: '0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da',
  //     blockCreated: 16773775,
  //   },
  //   multicall3: {
  //     address: '0xca11bde05977b3631167028862be2a173976ca11',
  //     blockCreated: 14353601,
  //   },
  // },
})