const assert = require("assert");
const Pet = require("./test_db");

describe("Deleting a Pet", function() {
  let dog;

  beforeEach(function(done) {
    dog = new Pet({ pet_id: 800813 });
    dog
      .save()
      .then(function() {
        done();
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  it("removes a Pet using it's instance", function(done) {
    dog
      .remove()
      .then(function(pet) {
        assert(pet === null);
        done();
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  it("it removes multiple Pets!", function(done) {
    Pet.remove({ pet_id: 800813 })
      .then(function() {
        Pet.findOne({ pet_id: 800813 });
      })
      .then(function(pet) {
        assert(pet === null);
        done();
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  it("removes a Pet", function(done) {
    Pet.findOneAndRemove(dog._id)
      .then(function() {
        Pet.findOne({ pet_id: 800813 });
      })
      .then(function(pet) {
        assert(pet === null);
        done();
      })
      .catch(function(err) {
        console.log(err);
      });
  });
});
