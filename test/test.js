const { expect } = require("chai");
const hre = require("hardhat");
const helpers = require("@nomicfoundation/hardhat-network-helpers");
const { utils } = require("ethers");

describe("degen", function () {
  //   const [address] =   hre.ethers.getSigners;
  let degen;
  let owner;
  let addr1;
  let addr2;
  //   let user = "0x0000000000000000000000000000000000001234";
  //   let signedUser;
  //   const amount = 10000;
  beforeEach(async function () {
    [owner, addr1, addr2] = await hre.ethers.getSigners();
    const Degen = await hre.ethers.getContractFactory("DegenToken");
    degen = await Degen.deploy();
    await degen.deployed();
    await degen.mint(addr1.address, 5);

    // signedUser = await hre.ethers.getImpersonatedSigner(user);
    // await helpers.setBalance(addr1, hre.ethers.utils.parseEther("2"));
  });

  it("should mint", async function () {
    expect(await degen.balanceOf(addr1.address)).to.equal(5);
  });
  it("should create item", async function () {
    await degen.createItems("itemCreate");
    const waht = (await degen.mapItem(1)).ItemOwner;
    expect(waht).to.equal(owner.address);
  });
  it("should redeem", async function () {
    await degen.createItems("itemCreate");
    await degen.connect(addr1).redeem(1, 2);

    expect(await degen.balanceOf(addr1.address)).to.equal(3);
    expect(await degen.balanceOf(owner.address)).to.equal(2);
    const ownrAddr = (await degen.mapItem(1)).ItemOwner;
    expect(ownrAddr).to.equal(addr1.address);
  });
  it("should transfer", async function () {
    await degen.connect(addr1).transfer(addr2.address, 1);
    expect(await degen.balanceOf(addr2.address)).to.equal(1);
    expect(await degen.balanceOf(addr1.address)).to.equal(4);
  });
  it("should burn", async function () {
    await degen.connect(addr1).burn(2);
    expect(await degen.balanceOf(addr1.address)).to.equal(3);
  });
});
