async function main() {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy();
    await greeter.waitForDeployment();  // new syntax instead of deployed()

    const address = await greeter.getAddress();  // get the contract address
    console.log("Greeter deployed to:", address);

    // Verify the deployment by calling get()
    const value = await greeter.get();
    console.log("Initial value:", value);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

