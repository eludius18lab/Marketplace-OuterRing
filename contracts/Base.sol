// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./Extension1Upgradeable.sol";

contract Base is Initializable, Extension1Upgradeable {
    uint256 public a;
    uint256 public b;

    constructor() initializer {}

    function initialize() public initializer {
        a = 1;
        b = 2;
        __Extension1Upgradeable_init(3);
    }

    function suma() external view returns (uint256) {
        return a + b;
    }

    function resta() external view returns (uint256) {
        return b - a;
    }

    function mul() external view returns (uint256) {
        return b * a;
    }
}
