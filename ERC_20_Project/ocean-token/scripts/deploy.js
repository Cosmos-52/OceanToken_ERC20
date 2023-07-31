const { ethers } = require("hardhat");

async function main() {
  //const deployedContract = await ethers.deployContract("OceanToken");
  const deployedContract = await ethers.deployContract("OceanToken",[100000000, 50]);
  //const deploy_OC = await OceanToken.deploy(100000000, 50);

  await deployedContract.waitForDeployment();

  console.log("Ocean Token deployed: ", await deployedContract.getAddress());
  //console.log("Ocean Token deployed: ", deploy_OC.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
