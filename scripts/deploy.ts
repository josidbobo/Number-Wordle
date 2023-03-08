import { ethers } from "hardhat";

async function main() {
  const Greeter = await ethers.getContractFactory(
    "NumberWordle",
  );
  const greeter = await Greeter.deploy(
    "0x7E1f630719a45743636b96419Fe0E77e836c43ce"
  );

  // await greeter.deployed();
  await greeter.transferToCreator(
    "300000000000000000000",
    "0x6A13b88A2bC7E8226679DFbb60f47FD9C3D93943"
  );
  console.log(await greeter.balanceOf('0x6A13b88A2bC7E8226679DFbb60f47FD9C3D93943'))
  // await greeter.startGame();

  console.log("DOW deployed to:", greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
