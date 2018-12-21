const assert = require("assert");
const Pet = require("./test_db");

describe("deleting a Pet", function() {
  let dog;

  beforeEach(function(done) {
    dog = new Pet({ pet_id: 8675309 });
    dog
      .save()
      .then(function() {
        done();
      }, done)
      .catch(function(err) {
        console.log(err);
      });
  });

  function assertHelper(statement, done) {
    statement
      .then(function() {
        Pet.find({});
      }, done)
      .then(function(pet) {
        assert(pet.length === 1);
        assert(pet[0].pet_id === 42);
      }, done)
      .then(function() {
        done();
      }, done)
      .catch(function(err) {
        console.log(err);
      });
  }

  it("sets and saves Pets using instance", function(done) {
    dog.set("pet_id", 42);
    assertHelper(dog.save(), done);
  });

  it("update Pets using instance", function(done) {
    assertHelper(dog.update({ pet_id: 42 }), done);
  });

  it("update all matching Pets using model", function(done) {
    assertHelper(dog.update({ pet_id: 8675309 }, { pet_id: 42 }), done);
  });

  it("update one Pet using model", function(done) {
    assertHelper(
      Pet.findOneAndUpdate({ pet_id: 8675309 }, { pet_id: 42 }, done)
    );
  });

  it("update one Pet using id", function(done) {
    assertHelper(Pet.findByIdAndUpdate(dog._id, { pet_id: 42 }, done));
  });
});
