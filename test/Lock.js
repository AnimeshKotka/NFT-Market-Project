const { expect } = require("chai");
const hre = require("hardhat");

describe("Greetings", () => {
  it("Should return the new greeting once it's changed", async () => {
    const Greeter = await hre.ethers.getContractFactory("Greetings");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.getGreetMessage()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreetMessage("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.getGreetMessage()).to.equal("Hola, mundo!");
  });
});
