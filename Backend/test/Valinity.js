
const { expect } = require("chai");

describe("Valinity", function () {

    let myContractDeployed;

    beforeEach(async function () {
        const Mycontract = await ethers.getContractFactory("Valinity");
        myContractDeployed = await Mycontract.deploy("Valinity", "VAL", "https://example.com/tokens/");
        await myContractDeployed.deployed();
    });

    context("Creating the smart contract", async () => {

        it("should return correct name", async function () {
            expect(await myContractDeployed.name()).to.equal("Valinity");
        });

        it("should return correct symbol", async function () {
            expect(await myContractDeployed.symbol()).to.equal("VAL");
        });

        xit("should return correct baseURI", async function () {
            expect(await myContractDeployed._baseURI()).to.equal("https://example.com/tokens/");
        });
    });

    context("Using the smart contract", async () => {

        xit("should set new baseURI", async function () {
            await myContractDeployed.setBaseURI("https://new.example.com/tokens/");
            expect(await myContractDeployed._baseURI()).to.equal("https://new.example.com/tokens/");
        });
    
        it("should mint a new token and increment total supply", async function () {
            const initialSupply = await myContractDeployed.totalSupply();
            await myContractDeployed.mint(1);
            const newSupply = await myContractDeployed.totalSupply();
            expect(newSupply).to.equal(initialSupply.add(1));
        });
    
        it("should only allow owner to mint new token", async function () {
            const [owner, addr1] = await ethers.getSigners();
            const myContractAsAddr1 = myContractDeployed.connect(addr1);
            await expect(myContractAsAddr1.mint(1)).to.be.revertedWith("Ownable: caller is not the owner");
           
        });

    });


});