import { ethers, run } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  const example = await deploy("Base", {
    from: deployer,
    args: [],
    log: true,
    proxy: {
      proxyContract: "OpenZeppelinTransparentProxy",
      execute: {
        init: {
          methodName: "initialize",
          args: [],
        },
      },
    },
    waitConfirmations: 10,
  });

  console.log("Base deployed at: ", example.address);

  const baseImpl = await deployments.get("Base_Implementation");
  const baseImplDeployed = await ethers.getContractAt("Base", baseImpl.address);
  await run("verify:verify", {
    address: baseImplDeployed.address,
    contract: "contracts/Base.sol:Base",
  });
};

deploy.tags = ["Base"];
export default deploy;
