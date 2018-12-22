const should = require("chai").should();
const express = require("express");
const axios = require("axios");
const url = "http://localhost:1337/api/recommends";

describe("GET one", function() {
  const mockReq = params => {
    axios
      .get(params)
      .then(response => response)
      .catch(err => {});
  };

  it("should route a get request for a pet_id", function() {
    tiger = `${url}?pet_id:1111`;
    mockReq(tiger)
      .then(response => response.class.should.equal("mammal"))
      .then(response => response.family.should.equal("Felidae"))
      .then(response => response.species.should.equal("Tiger"))
      .then(response => response.should.have.property("img_url"));
  });
});
