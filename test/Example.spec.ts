import { Contract, Signer } from "ethers";
import { deployments, ethers } from "hardhat";
import { Deployment } from "hardhat-deploy/dist/types";
import { ExampleContract } from "../typechain/ExampleContract";

describe("Test suite", async function () {
  let accounts: Signer[];
  let contractDeployment: Deployment;
  let exampleContract: ExampleContract;

  before(async function () {
    accounts = await ethers.getSigners();
    contractDeployment = await deployments.get("ExampleContract");
    exampleContract = await ethers.getContractAt(
      "ExampleContract",
      contractDeployment.address
    );
  });
});
