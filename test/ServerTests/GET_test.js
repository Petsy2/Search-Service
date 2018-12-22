const should = require("chai").should();
const express = require("express");
const axios = require("axios");
const url = "http://localhost:1337/api/recommends";

describe("GET one", function() {
  const mockReq = params => {
    axios
      .get(url, params)
      .then(response => response)
      .catch(err => {});
  };

  it("should route a get request for a pet_id", function() {
    tiger = { headers: { pet_id: 1111 } };
    let response = mockReq(tiger);

    response.class.should.equal("mammal");
    response.family.should.equal("Felidae");
    response.species.should.equal("Tiger");
    response.should.have.property("img_url");
  });
});
