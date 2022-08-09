import { run } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  const example = await deploy("Extension1Upgradeable", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: 10,
  });

  console.log("Extension1Upgradeable deployed at: ", example.address);

  await run("verify:verify", {
    address: example.address,
    contract: "contracts/Extension1Upgradeable.sol:Extension1Upgradeable",
  });
};

deploy.tags = ["Extension1Upgradeable"];
export default deploy;
