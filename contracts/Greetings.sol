// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

contract Greetings {
    string private greetMessage;

    constructor(string memory _greetingMsg) {
        greetMessage = _greetingMsg;
    }

    function getGreetMessage() public view returns (string memory) {
        return greetMessage;
    }

    function setGreetMessage(string memory _greetingMsg) public {
        greetMessage = _greetingMsg;
    }
}
