import { deployments, getNamedAccounts, ethers } from "hardhat";
import { ExampleContract } from "../typechain";
import { Deployment } from "hardhat-deploy/types";

const main = async () => {
  const { deployer } = await getNamedAccounts();
  const contractDeployment: Deployment = await deployments.get(
    "ExampleContract"
  );
  const contractBase: ExampleContract = await ethers.getContractAt(
    "ExampleContract",
    contractDeployment.address
  );
};

main();
