const { expect } = require("chai");
const hre = require("hardhat");
const {loadFixture} = require("@nomicfoundation/hardhat-toolbox/network-helpers");

describe("Counter contract", function () {

    async function CounterLockFixture() {
        const counter = await ethers.deployContract("Counter");
        await counter.setNumber(0);

        return {counter};
    };

    it("Should increment the number correctly", async function () {

        const {counter} = await loadFixture(CounterLockFixture);
        await counter.increment();
        expect(await counter.number()).to.equal(1);
    });

    // This is not a fuzz test because Hardhat does not support fuzzing yet.
    it("Should set the number correctly", async function () {

        const {counter} = await loadFixture(CounterLockFixture);
        await counter.setNumber(100);
        expect(await counter.number()).to.equal(100);
    });
});
