// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Extension1Upgradeable is Initializable {
    uint256 public c;
    uint256 public d;

    function __Extension1Upgradeable_init(uint256 _c)
        internal
        onlyInitializing
    {
        __Extension1Upgradeable_init_unchained(_c);
    }

    function __Extension1Upgradeable_init_unchained(uint256 _c)
        internal
        onlyInitializing
    {
        c = _c;
    }
}
