const assert = require("assert");
const Pet = require("./test_db");

describe("deleting a Pet", function() {
  let Dog;

  beforeEach(function(done) {
    Dog = new Pet({ pet_id: 8675309 });

    Dog.save()
      .finally(done)
      .catch(function(err) {});
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
      .finally(done)
      .catch(function(err) {});
  }

  it("sets and saves Pets using instance", function(done) {
    Dog.set("pet_id", 42);
    assertHelper(Dog.save(), done);
  });

  it("update Pets using instance", function(done) {
    assertHelper(Dog.updateOne({ pet_id: 42 }), done);
  });

  it("update all matching Pets using model", function(done) {
    assertHelper(Dog.updateOne({ pet_id: 8675309 }, { pet_id: 42 }), done);
  });

  it("update one Pet using model", function(done) {
    assertHelper(
      Pet.findOneAndReplace({ pet_id: 8675309 }, { pet_id: 42 }),
      done
    );
  });

  it("update one Pet using id", function(done) {
    assertHelper(Pet.findOneAndReplace(Dog._id, { pet_id: 42 }), done);
  });
});
