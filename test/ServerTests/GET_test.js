const assert = require("chai").assert;
const mockGET = require("./server_test_helpers.js");

describe("Get requests are handled correctly", function() {
  it("expect a response to a get request", function() {
    const currentPet = { headers: { pet_id: 1111 } };
    mockGET(currentPet, response => {
      assert.isOk(response.status === 200, "return status should be 200");
      assert.isOk(
        response.statusText === "OK",
        "response status text should be OK"
      );
    });
  });

  it("expect response to contain an array of objects", function() {
    const currentPet = { headers: { pet_id: 12220 } };
    mockGET(currentPet, response => {
      assert.isOk(Array.isArray(response.data));
      assert.isOk(response.data.length === 13);
    });
  });

  it("expect it to return an error if pet_id is not in database", function() {
    const currentPet = { headers: { pet_id: 8675309 } };
    mockGET(currentPet, response => {
      assert.isOk(response === "The pet_id is invalid");
    });
  });
});
