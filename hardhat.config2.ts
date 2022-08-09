import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-deploy";
import "hardhat-contract-sizer";
import "solidity-docgen";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.5.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    hardhat: {
      mining: {
        auto: true,
        interval: [2500, 3000],
        mempool: {
          order: "fifo",
        },
      },
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 1337,
    },
    ropsten: {
      url: process.env.RPC_URL,
      chainId: 5,
      accounts: [`0x${process.env.DEPLOYER_PRIVATE_KEY1}`],
    },
    rinkeby: {
      url: `https://speedy-nodes-nyc.moralis.io/c58b6e26734d635d56e1be97/eth/rinkeby`,
      chainId: 4,
      accounts: [`0x${process.env.DEPLOYER_PRIVATE_KEY1}`],
    },
    bscMainnet: {
      url: ``,
      chainId: 56,
      gas: 2100000,
      gasPrice: 8000000000,
      accounts: [`0x${process.env.DEPLOYER_PRIVATE_KEY1}`],
    },
/*     bscTestnet: {
      url: process.env.BSC_TESTNET_URL,
      chainId: 97,
      gas: 2100000,
      gasPrice: 12000000000,
      accounts: [`0x${process.env.DEPLOYER_PRIVATE_KEY1}`],
    }, */
    mumbai: {
      url: `https://rpc-mumbai.maticvigil.com`,
      chainId: 80001,
      accounts: [`0x${process.env.DEPLOYER_PRIVATE_KEY1}`],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: {
      ropsten: process.env.ETHERSCAN_API_KEY,
      rinkeby: process.env.ETHERSCAN_API_KEY,
      bscTestnet: process.env.BSCSCAN_API_KEY,
      bsc: process.env.BSCSCAN_API_KEY,
      polygonMumbai: process.env.POLYGONSCAN_API_KEY,
    },
  },
  docgen: {
    outputDir: "docs",
    pages: () => "api.md",
  },
};

export default config;
