const should = require("chai").should();
const express = require("express");
const axios = require("axios");
const url = "http://localhost:1337/api/recommends";
const server = require("../../Server/server.js");

describe("GET one", function() {
  it("should route a get request for a pet_id", function() {
    const pet = { pet_id: 1111 };
    console.log(pet);

    axios
      .get(url, {
        params: {
          pet_id: 1111
        }
      })
      .then(response => response.species.should.equal("Tiger"))
      .then(response => response.family.should.equal("Felidae"))
      .catch(err => console.error(err));
  });
});
