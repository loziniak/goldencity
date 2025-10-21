import { network } from "hardhat";

// network configured through '--network' option in Hardhat
const { ethers } = await network.connect();


console.log("Deploying Voting...");
const voting = await ethers.deployContract("Voting");

console.log("Voting deployed at", await voting.getAddress());
