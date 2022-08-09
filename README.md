# Hardhat Project Upgradeable
Base repo for Hardhat projects in Typescript

## Install the Dependencies and Dotenv

```shell
yarn install
```

```shell
yarn install dotenv
```

## Create .env file

```shell
DEPLOYER_PRIVATE_KEY1 = ""
RPC_URL = ""

ETHERSCAN_API_KEY = ""
BSCSCAN_API_KEY = ""
POLYGONSCAN_API_KEY = ""
```
## Deploying/Verifying Proxy and Smart Contract

```shell
npx hardhat deploy --network <CHAIN> --tags <SMART_CONTRACT>
```
