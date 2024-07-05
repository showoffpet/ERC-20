const { run } = require("hardhat")

const verify = async(contractAddress, contractPath) => {
    try{
        await run("verify", {
            address: contractAddress,
            contract: contractPath
        });
    }
    catch(error) {
        console.log(error.message);
    }
};

module.exports = verify