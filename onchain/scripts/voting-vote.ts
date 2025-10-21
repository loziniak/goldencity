import { ethers } from "ethers";
import { JsonRpcProvider, Wallet, Contract } from "ethers";
import { ErrorDecoder } from 'ethers-decode-error'
import type { DecodedError } from 'ethers-decode-error'
import fs from "node:fs";

const VOTER_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"; // voter 1
//const VOTER_KEY = "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"; // voter 2
//const VOTER_KEY = "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a"; // voter 3

// The contract needs to be compiled (e.g. during tests or deployment) first to use this file:
const COMPILED_CONTRACT = './artifacts/contracts/Voting.sol/Voting.json';

// === MetaMask ===
//provider = new ethers.BrowserProvider(window.ethereum);
//signer = await provider.getSigner();

// === localhost ===
const provider = new ethers.JsonRpcProvider("http://localhost:8545/")
const signer = new Wallet(VOTER_KEY, provider);

const candidateIndex = process.argv[2];
const contractAddress = process.argv[3];
const json = fs.readFileSync(COMPILED_CONTRACT, 'utf8');
const votingArtifact = JSON.parse(json);
const voting = new Contract(contractAddress, votingArtifact.abi, signer);
const errorDecoder = ErrorDecoder.create([voting.interface]);

console.log("Casting vote...");
try {
    await voting.vote(candidateIndex);
    console.log("Voted.");
} catch(err) {
    const decodedError = await errorDecoder.decode(err);
    console.log(`Voting error: ${decodedError.name}(${decodedError.args})`);
}

try {
    console.log("Winner:", await voting.getWinner());
} catch(err) {
    const decodedError = await errorDecoder.decode(err);
    console.log(`Cannot get winner: ${decodedError.name}(${decodedError.args})`);
}

console.log("Candidates:", await voting.getCandidates());
