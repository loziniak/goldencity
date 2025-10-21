// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

error AlreadyVoted(address voter);
error NoSuchCandidate(uint index);
error Draw(uint votes);
error NotAnOwner(address);

contract Voting {

    event AddCandidate(uint indexed index);
    event Vote(uint indexed index, address indexed voter); // remove this if you want secret voting
    event NewWinner(uint indexed index);
    event DrawReached(uint indexed oldWinnerIndex, uint indexed justVotedIndex);

    struct Candidate {
        string name; // FIXME: it would probably be more optimal to keep names in database instead of blockchain.
        uint votes;
    }

    address private owner;
    uint private candidatesCount = 0;
    uint private winnerIndex = 0;
    bool private draw = true; // there is no winner
    mapping(uint index => Candidate) private candidates; // candidates names and votes
    mapping(address voter => bool) private alreadyVoted; // which addresses already voted

    constructor() {
        owner = msg.sender; // contract deployer
    }

    function addCandidate(string memory name) external onlyOwner {
        uint index = candidatesCount;
        candidatesCount++;
        candidates[index] = Candidate(name, 0);
        emit AddCandidate(index);
    }

    function getCandidates() external view returns (Candidate[] memory cands) {
        cands = new Candidate[](candidatesCount);
        for (uint i = 0; i < candidatesCount; i++) {
            cands[i] = candidates[i];
        }
    }

    function vote(uint index) external {
        require (index >= 0
                && index < candidatesCount,
            NoSuchCandidate(index)
        );

        address voter = msg.sender;

        require (!alreadyVoted[voter], AlreadyVoted(voter));

        Candidate memory candidate = candidates[index];
        candidate.votes++;
        candidates[index] = candidate;

        alreadyVoted[voter] = true;
        _updateWinner(index);
        emit Vote(index, voter);

    }

    function _updateWinner(uint votedIndex) internal {
        Candidate memory candidate = candidates[votedIndex];
        Candidate memory currentWinner = candidates[winnerIndex];

        if (winnerIndex != votedIndex) {
            if (candidate.votes > currentWinner.votes) {
                draw = false;
                winnerIndex = votedIndex;
                emit NewWinner(winnerIndex);
            } else if (candidate.votes == currentWinner.votes) {
                draw = true;
                emit DrawReached(winnerIndex, votedIndex);
            }
        } else {
            draw = false;
        }
    }

    function getWinner() external view returns (string memory winnerName) {
        require (candidatesCount > 0, NoSuchCandidate(winnerIndex));
        require (!draw, Draw(candidates[winnerIndex].votes));

        winnerName = candidates[winnerIndex].name;
    }

    modifier onlyOwner() {
        require (msg.sender == owner, NotAnOwner(msg.sender));
        _;
    }
}
