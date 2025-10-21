import { ethers } from "ethers";
import { JsonRpcProvider, Wallet, Contract } from "ethers";

import fs from "node:fs";

const DEPLOYER_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

// The contract needs to be compiled (e.g. during tests or deployment) first to use this file:
const COMPILED_CONTRACT = './artifacts/contracts/Voting.sol/Voting.json';

// === MetaMask ===
//provider = new ethers.BrowserProvider(window.ethereum);
//signer = await provider.getSigner();

// === localhost ===
const provider = new ethers.JsonRpcProvider("http://localhost:8545/")
const signer = new Wallet(DEPLOYER_KEY, provider);

const candidateName = process.argv[2];
const contractAddress = process.argv[3];
const json = fs.readFileSync(COMPILED_CONTRACT, 'utf8');
const votingArtifact = JSON.parse(json);
const voting = new Contract(contractAddress, votingArtifact.abi, signer);

console.log("Adding candidate...");
await voting.addCandidate(candidateName);
console.log("Candidate added.");
console.log("Candidates:", await voting.getCandidates());
