import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.connect();

describe("Voting", function () {
    
    it("Should return added candidate without votes", async function () {
        const voting = await ethers.deployContract("Voting");

        expect(await voting.getCandidates()).to.be.an('array').that.is.empty;

        await voting.addCandidate('C1');

        const events = await voting.queryFilter(voting.filters.AddCandidate(), 0, 'latest');
        expect(events).to.have.lengthOf(1);
        expect(events[0].args).to.have.lengthOf(1);
        expect(events[0].args[0]).to.be.equal(0);

        const candidates = await voting.getCandidates();
        expect(candidates).to.be.an('array').that.does.deep.include(['C1', 0n]);
        expect(candidates).to.have.lengthOf(1);
    });

    it("Should return second candidate", async function () {
        const voting = await ethers.deployContract("Voting");
        await voting.addCandidate('C1');
        await voting.addCandidate('C2');

        expect(await voting.getCandidates()).to.have.lengthOf(2);
    });

    it("Should count votes", async function () {
        const voting = await ethers.deployContract("Voting");
        await voting.addCandidate('C1');
        await voting.vote(0);

        const events = await voting.queryFilter(voting.filters.Vote(), 0, 'latest');
        expect(events).to.have.lengthOf(1);
        expect(events[0].args).to.have.lengthOf(2);
        expect(events[0].args[0]).to.be.equal(0);
        expect(events[0].args[1]).to.be.equal(await (await ethers.provider.getSigner(0)).getAddress());

        expect(await voting.getCandidates()).to.deep.include(['C1', 1n]);
    });

    it("Should fail when voting on non-existent candidate", async function () {
        const voting = await ethers.deployContract("Voting");
        await voting.addCandidate('C1');
        await expect(voting.vote(1)).to.be.revertedWithCustomError(voting, 'NoSuchCandidate').withArgs(1);
    });

    it("Should not allow multiple votes", async function () {
        const voting = await ethers.deployContract("Voting");
        await voting.addCandidate('C1');
        await voting.vote(0);

        await expect(voting.vote(0)).to.be.revertedWithCustomError(voting, 'AlreadyVoted');
    });

    it("Should return the winner after voting second candidate", async function () {
        const voting = await ethers.deployContract("Voting");
        await voting.addCandidate('C1');
        await voting.addCandidate('C2');
        await voting.vote(1);

        const events = await voting.queryFilter(voting.filters.NewWinner(), 0, 'latest');
        expect(events).to.have.lengthOf(1);
        expect(events[0].args).to.have.lengthOf(1);
        expect(events[0].args[0]).to.be.equal(1);

        expect(await voting.getWinner()).to.be.equal('C2');
    });

    it("Should return the winner after voting first candidate", async function () {
        const voting = await ethers.deployContract("Voting");
        await voting.addCandidate('C1');
        await voting.addCandidate('C2');
        await voting.vote(0);

        const events = await voting.queryFilter(voting.filters.NewWinner(), 0, 'latest');
        expect(events).to.have.lengthOf(0);

        expect(await voting.getWinner()).to.be.equal('C1');
    });

    it("Should fail when draw and getting winner", async function () {
        const voting = await ethers.deployContract("Voting");
        await voting.addCandidate('C1');
        await voting.addCandidate('C2');
        await voting.vote(1);

        const signer2 = await ethers.provider.getSigner(1);
        const voting2 = await voting.connect(signer2);
        await voting2.vote(0);

        const events = await voting.queryFilter(voting.filters.DrawReached(), 0, 'latest');
        expect(events).to.have.lengthOf(1);
        expect(events[0].args).to.have.lengthOf(2);
        expect(events[0].args[0]).to.be.equal(1);
        expect(events[0].args[1]).to.be.equal(0);

        await expect(voting.getWinner()).to.be.revertedWithCustomError(voting, 'Draw').withArgs(1);
    });

    it("Should fail when no candidates and getting winner", async function () {
        const voting = await ethers.deployContract("Voting");
        await expect(voting.getWinner()).to.be.revertedWithCustomError(voting, 'NoSuchCandidate').withArgs(0);
    });

    it("Should not allow to add candidates to non-owner", async function () {
        const voting = await ethers.deployContract("Voting");
        await voting.addCandidate('C1');

        const signer2 = await ethers.provider.getSigner(1);
        const voting2 = await voting.connect(signer2);
        await expect(voting2.addCandidate('C2')).to.be.revertedWithCustomError(voting, 'NotAnOwner').withArgs(signer2.getAddress());
    });

});
