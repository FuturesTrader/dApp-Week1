async function main() {
    // Get the contract factory
    const Greeter = await ethers.getContractFactory("Greeter");

    // Get contract at deployed address
    const greeter = await Greeter.attach("0x5fbdb2315678afecb367f032d93f642f64180aa3");

    // Get current value
    const currentValue = await greeter.get();
    console.log("Current greeting:", currentValue);

    // Set new value
    console.log("Setting new greeting...");
    const tx = await greeter.set("Hello from script!");
    await tx.wait(); // Wait for transaction to be mined

    // Get new value
    const newValue = await greeter.get();
    console.log("New greeting:", newValue);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });