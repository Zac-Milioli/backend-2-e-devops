const { addUser, getUserById } = require("../../src/user.js");

const id = 1;
const name = "testUser";

test("should create and return a user", () => {
    const user = { id, name };
    addUser(user);
    const returnedUser = getUserById(id);
    expect(returnedUser).toEqual(user);
});