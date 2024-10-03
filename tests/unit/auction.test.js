const { createAuction, getAuctionById, getBidsForAuction } = require("../../src/auction.js");

jest.mock("../../src/auction.js");

const auctionId = 1;
const name = "testAuction";
const startingPrice = 600;

describe("Auction Functions", () => {
    beforeEach(() => {
        createAuction.mockClear();
        getAuctionById.mockClear();
        getBidsForAuction.mockClear();
    });

    test("should create an auction", () => {
        const auction = { id: auctionId, name, startingPrice };
        createAuction(auction);

        expect(createAuction).toHaveBeenCalledWith(auction);
    });

    test("should get an auction by id", () => {
        const auction = { id: auctionId, name, startingPrice };
        getAuctionById.mockReturnValue(auction);

        const retrievedAuction = getAuctionById(auctionId);
        expect(retrievedAuction).toEqual(auction);
    });

    test("should get bids for auction using mock", () => {
        const mockBids = [
            { auctionId, userId: 1, amount: 700 },
            { auctionId, userId: 2, amount: 800 }
        ];

        getBidsForAuction.mockReturnValue(mockBids);

        const bids = getBidsForAuction(auctionId);
        expect(bids).toEqual(mockBids);
    });
});