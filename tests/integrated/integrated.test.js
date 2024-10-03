const { addUser, getUserById } = require("../../src/user");
const { createAuction, getAuctionById, placeBid, getBidsForAuction } = require("../../src/auction");

describe("Full integration", () => {
    test("should add a user and create an auction", () => {
        const user = { id: 1, name: 'Mancebo' };
        const auction = { id: 1, name: 'Leilão de arte', startingPrice: 100 };

        addUser(user);
        createAuction(auction);

        const retrievedUser = getUserById(user.id);
        const retrievedAuction = getAuctionById(auction.id);

        expect(retrievedUser).toEqual(user);
        expect(retrievedAuction).toEqual(auction);
    });

    test("should place a bid successfully", () => {
        const user = { id: 2, name: 'Jorge Augusto' };
        const auction = { id: 2, name: 'Leilão de leite', startingPrice: 200 };
        const bidAmount = 220;

        addUser(user);
        createAuction(auction);
        placeBid(auction.id, user.id, bidAmount);

        const retrievedBids = getBidsForAuction(auction.id);

        expect(retrievedBids).toEqual([{ auctionId: auction.id, userId: user.id, amount: bidAmount }]);
    });

    test("should retrieve user, auction, and bids correctly", () => {
        const user = { id: 3, name: 'Mauricio de Souza' };
        const auction = { id: 3, name: 'Leilão de papagaio', startingPrice: 300 };
        const bidAmount = 350;

        addUser(user);
        createAuction(auction);
        placeBid(auction.id, user.id, bidAmount);

        const retrievedUser = getUserById(user.id);
        const retrievedAuction = getAuctionById(auction.id);
        const retrievedBids = getBidsForAuction(auction.id);

        expect(retrievedUser).toEqual(user);
        expect(retrievedAuction).toEqual(auction);
        expect(retrievedBids).toEqual([{ auctionId: auction.id, userId: user.id, amount: bidAmount }]);
    });
});