require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
//require("hardhat-laika");
//require('@openzeppelin/hardhat-upgrades');
require("dotenv").config()


const RPC_URL = process.env.RPC_URL;
const RPC_URL_FORK = process.env.RPC_URL_FORK;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PRIVATE_KEY_FORK = process.env.PRIVATE_KEY_FORK;
const ETHERSCAN_API = process.env.ETHERSCAN_API;

module.exports = {
  solidity: "0.8.7",
  networks: {
    hardhat: {
      chainId: 31337,
      forking: {
        enabled: true,
        url: "https://eth-mainnet.g.alchemy.com/v2/x0F8H033Iw_wioxK_Y_HlQWymaZb1e_j",
      }
    },

    fork: {
      url: RPC_URL_FORK,
      accounts: [PRIVATE_KEY_FORK],
      //gasPrice: 20000000000,
      //gas: 8000000
      //gas:"auto"
      //gasLimit: 1000000
    },

    goerli: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
      //gasPrice: 20000000000,
      //gas: 8000000
      //gas:"auto"
      //gasLimit: 1000000
    }
  },

  etherscan: {
    apiKey: {
        goerli: ETHERSCAN_API
    }
  }
};