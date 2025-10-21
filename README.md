# Maciej Łoziński recruitment test, Blockchain Developer

LinkedIn: https://www.linkedin.com/in/maciejlozinski/
e-mail: loziniak@o2.pl

**Video demo:** https://share.robotix-lozinski.pl/index.php/s/LRzPgreYWaqp59z

## Voting.sol smart contract

1.  Smart Contract: `Voting.sol`

    - `addCandidate(string name)` – Only owner
    - `vote(uint candidateIndex)` – One vote per user
    - `getCandidates()` – Returns all candidates & vote counts
    - `getWinner()` – Returns winner’s name

2.  Backend (Node.js + Web3.js)

(not implemented, use Node.js scripts to interact with contract, see below)

3.  Rules
    - Prevent double voting from the same address.
    - Only allow valid proposal IDs.
    - Use simple mappings and structs — no external libraries required.

**Notes:**

 * Saving strings to blockchain is not optimal to me, I'd suggest using database instead.
 * I'd also suggest interacting with smart contract from frontend, with use of a wallet like MetaMask, instead of backend REST endpoint.

**Prepare:**

```bash
cd onchain
npm install
```

**Test:**

Smart contract tests are located in `onchain/test/Voting.ts` file.

```bash
npx hardhat test
```

**Run test blockchain node:**

```bash
npx hardhat node --network hardhatMainnet
```

**Deploy smart contract:**

```bash
npx hardhat run scripts/voting-deploy.ts --network localhost
```

This will print **contract address** to use later when interacting with contract...

**Interact with contract:**

Example interactions with the contract are performed by Node.js scripts, through *"ethers"* library. With little modification (use *BrowserProvider* instead of *JsonRpcProvider*, see comments in scripts) this could be executed from frontend with using MetaMask.

`<contract-address>` example: "0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9"

```bash
node scripts/voting-add-candidate.ts "First Candidate" <contract-address>
node scripts/voting-add-candidate.ts "Second Candidate" <contract-address>
node scripts/voting-vote.ts 0 <contract-address>
```

# Original README

#### GoldenCity is a modern real estate investment platform that combines traditional property investing with cryptocurrency payments. Built with React and Tailwind CSS, it mirrors the functionality of Arrived.com while adding blockchain-based transaction capabilities.

## Key Features

- Cryptocurrency-enabled property transactions
- Mobile-responsive design
- SEO-optimized architecture
- Real-time market data integration
- Interactive 3D property visualization
- Smart contract integration for secure transactions

## Technical Overview

The platform is built using:

- React for component-based architecture
- Tailwind CSS for responsive styling
- React Router for client-side routing
- Three.js for 3D property visualizations
- Web3.js for blockchain interactions



## Acknowledgments

Special thanks to the Arrived.com team for inspiration and the React/Tailwind CSS communities for their continued support and resources.
