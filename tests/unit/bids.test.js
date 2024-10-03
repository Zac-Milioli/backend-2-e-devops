const { placeBid, getAuctionById, getBidsForAuction } = require("../../src/auction.js");

jest.mock("../../src/auction.js");

const auctionId = 1;
const userId = 2;
const amount = 120;
const startingPrice = 100;

describe("Bids Functions", () => {
    let auction;

    beforeEach(() => {
        auction = { id: auctionId, startingPrice };
        getAuctionById.mockClear();
        getBidsForAuction.mockClear();
    });

    test("should place a bid successfully", () => {
        getAuctionById.mockReturnValue(auction);
        getBidsForAuction.mockReturnValue([]);

        placeBid(auctionId, userId, amount);

        expect(getAuctionById).toHaveBeenCalledWith(auctionId);
        expect(getBidsForAuction).toHaveBeenCalledWith(auctionId);
        expect(getBidsForAuction()).toEqual([{ auctionId, userId, amount }]);
    });

    test("should throw error if auction not found", () => {
        getAuctionById.mockReturnValue(undefined);

        expect(() => placeBid(auctionId, userId, amount)).toThrow("Leilão não encontrado.");
    });

    test("should throw error if bid amount is less than or equal to starting price", () => {
        getAuctionById.mockReturnValue(auction);

        expect(() => placeBid(auctionId, userId, startingPrice)).toThrow("O valor do lance deve ser maior do que o preço inicial.");
    });
});