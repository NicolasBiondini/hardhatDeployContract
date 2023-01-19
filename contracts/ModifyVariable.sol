//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract ModifyVariable {
  uint public x;
  string public username;

  constructor(uint _x, string memory _name) {
    x = _x;
    username = _name;
  }

  function modifyToLeet() public {
    x = 1337;
  }

  function changeUserName(string memory _name) public {
    username = _name;
  }

}