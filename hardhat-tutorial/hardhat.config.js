require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

// posem el valor del .env file i || en cas que no hi hagi perque pilli algnu valor :)
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "https://eth-goerli.g.alchemy.com/v2/example"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};