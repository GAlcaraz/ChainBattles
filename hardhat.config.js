import "dotenv";
import "@nomiclabs/hardhat-waffle";

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export const solidity = "0.8.10";
export const networks = {
  mumbai: {
    url: process.env.TESTNET_RPC,
    accounts: [process.env.PRIVATE_KEY],
  },
};
export const etherscan = {
  apiKey: process.env.POLYGONSCAN_API_KEY,
};
