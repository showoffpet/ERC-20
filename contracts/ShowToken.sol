// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ShowToken is ERC20 {
    uint256 public initialSupply = 2000 * 1e21;

    constructor() ERC20("ShowToken", "SHWT") {
        _mint(msg.sender, initialSupply);
    }
}

//https://sepolia.etherscan.io/address/0x32bEC8Eae8F8D30eB30353bc886Cbbd3B2c1CAA5#code