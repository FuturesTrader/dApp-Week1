const { expect } = require("chai");

describe("Greeter", function () {
    let greeter;
    let owner;
    let addr1;

    beforeEach(async function () {
        // Get signers
        [owner, addr1] = await ethers.getSigners();

        // Deploy contract - Updated deployment syntax
        const Greeter = await ethers.getContractFactory("Greeter");
        greeter = await Greeter.deploy();
        // Remove the .deployed() call - just wait for deployment transaction
        await greeter.waitForDeployment();  // or just await greeter
    });

    describe("Deployment", function () {
        it("Should return the initial greeting", async function () {
            expect(await greeter.get()).to.equal("Hello world");
        });
    });

    describe("Transactions", function () {
        it("Should set new greeting", async function () {
            await greeter.set("Hello test!");
            expect(await greeter.get()).to.equal("Hello test!");
        });

        it("Should allow multiple updates", async function () {
            await greeter.set("First update");
            expect(await greeter.get()).to.equal("First update");

            await greeter.set("Second update");
            expect(await greeter.get()).to.equal("Second update");
        });

        it("Should allow different accounts to update", async function () {
            await greeter.set("From owner");
            expect(await greeter.get()).to.equal("From owner");

            await greeter.connect(addr1).set("From addr1");
            expect(await greeter.get()).to.equal("From addr1");
        });
    });
});