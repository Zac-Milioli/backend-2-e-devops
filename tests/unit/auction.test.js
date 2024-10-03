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

    test("should throw an error if auction is not found", () => {
        expect(() => placeBid(999, 2, 350)).toThrow('Leilão não encontrado.');
    });

    test("should throw an error if bid amount is less than or equal to starting price", () => {
        const auction = { id: 4, name: 'Leilão de maçarico', startingPrice: 500 };
        createAuction(auction);

        expect(() => placeBid(4, 2, 500)).toThrow('O valor do lance deve ser maior do que o preço inicial.');
        expect(() => placeBid(4, 2, 400)).toThrow('O valor do lance deve ser maior do que o preço inicial.');
    });
});