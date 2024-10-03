const { createAuction, getAuctionById, placeBid, getBidsForAuction } = require("../../src/auction.js");

describe("Auction Functions", () => {
    test("should create an auction", () => {
        const auction = { id: 1, name: 'Leilão de pontes', startingPrice: 100 };
        createAuction(auction);

        const retrievedAuction = getAuctionById(1);
        expect(retrievedAuction).toEqual(auction);
    });

    test("should get auction by ID", () => {
        const auction = { id: 2, name: 'Leilão de bicicleta', startingPrice: 200 };
        createAuction(auction);

        const retrievedAuction = getAuctionById(2);
        expect(retrievedAuction).toEqual(auction);
    });

    test("should place a bid", () => {
        const auction = { id: 3, name: 'Leilão de pé de cadeira', startingPrice: 300 };
        createAuction(auction);

        placeBid(3, 2, 350);

        const retrievedBids = getBidsForAuction(3);
        expect(retrievedBids).toContainEqual({ auctionId: 3, userId: 2, amount: 350 });
    });
});