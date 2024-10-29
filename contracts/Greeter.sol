// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;

contract Greeter{
    string value;

    constructor () {
        value = "Hello world";
    }
    function get() public view returns (string memory) {
        return value;
    }
    function set(string memory _value) public  {
        value = _value;
    }
}

