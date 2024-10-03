const { addUser, getUserById } = require("../../src/user");
const { createAuction, getAuctionById, placeBid, getBidsForAuction } = require("../../src/auction");

let users = [];
let auctions = [];
let bids = [];

describe("Integration Tests", () => {
    beforeEach(() => {
        users.length = 0;
        auctions.length = 0;
        bids.length = 0;
    });

    test("should add a user and create an auction", () => {
        const user = { id: 1, name: 'Alice' };
        const auction = { id: 1, name: 'Leilão de arte', startingPrice: 100 };

        addUser(user);
        createAuction(auction);

        const retrievedUser = getUserById(user.id);
        const retrievedAuction = getAuctionById(auction.id);

        expect(retrievedUser).toEqual(user);
        expect(retrievedAuction).toEqual(auction);
    });

    test("should place a bid successfully", () => {
        const user = { id: 2, name: 'Bob' };
        const auction = { id: 1, name: 'Leilão de arte', startingPrice: 100 };
        const bidAmount = 120;

        addUser(user);
        createAuction(auction);
        placeBid(auction.id, user.id, bidAmount);

        const retrievedBids = getBidsForAuction(auction.id);

        expect(retrievedBids).toEqual([{ auctionId: auction.id, userId: user.id, amount: bidAmount }]);
    });

    // test("should retrieve user, auction, and bids correctly", () => {
    //     const user = { id: 2, name: 'Bob' };
    //     const auction = { id: 1, name: 'Leilão de arte', startingPrice: 100 };
    //     const bidAmount = 120;

    //     addUser(user);
    //     createAuction(auction);
    //     placeBid(auction.id, user.id, bidAmount);

    //     const retrievedUser = getUserById(user.id);
    //     const retrievedAuction = getAuctionById(auction.id);
    //     const retrievedBids = getBidsForAuction(auction.id);

    //     expect(retrievedUser).toEqual(user);
    //     expect(retrievedAuction).toEqual(auction);
    //     expect(retrievedBids).toEqual([{ auctionId: auction.id, userId: user.id, amount: bidAmount }]);
    // });
});