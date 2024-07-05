const { ethers } = require("hardhat");
const verify = require("../utils/verify");

const deploy = async () => {
  try {
    if(network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY){
      const contractFactory = await ethers.getContractFactory("ShowToken");
      const ShowToken = await contractFactory.deploy();
      console.log("-----------deploying------------");
      console.log("Contract Address:", ShowToken.target);
      setTimeout(async () => {
        await verify(ShowToken.target, "contracts/ShowToken.sol:ShowToken" )
      }, 45000);
    } else {
      const contractFactory = await ethers.getContractFactory("ShowToken");
      const ShowToken = await contractFactory.deploy();
      console.log("-----------deploying------------");
      console.log("Contract Address:", ShowToken.target);

    }
  } catch (error) {
    console.log(error.message);
  }
};

deploy();

module.exports = deploy;