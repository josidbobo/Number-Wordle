const { ethers } = require("hardhat");

async function main() {
  const VRF = await ethers.getContractFactory("VRFv2Consumer");
  const vrf = await VRF.deploy("171");

  await vrf.deployed();
  console.log("The VRF was deployed at", vrf.address);
  await vrf.requestRandomWords();
  // await VRF.fulfillRandomWords();
  // console.log(VRF.s_randomWords(0));
  // console.log("DOW deployed to:", VRF.address);
  console.log(await vrf.s_requestId());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
