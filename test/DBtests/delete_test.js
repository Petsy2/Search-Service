const assert = require("assert");
const Pet = require("./test_db");

describe("Deleting a Pet", function() {
  let Dog;

  beforeEach(function(done) {
    Dog = new Pet({ pet_id: 800813 });
    Dog.save()
      .finally(done)
      .catch(function(err) {});
  });

  it("removes a Pet using it's instance", function(done) {
    Pet.deleteOne()
      .then(function(Dog) {
        assert(Dog === null);
      })
      .finally(done)
      .catch(function(err) {});
  });

  it("it removes multiple Pets!", function(done) {
    Pet.deleteOne({ pet_id: 800813 })
      .then(function() {
        Pet.findOne({ pet_id: 800813 });
      })
      .then(function(Dog) {
        assert(Dog === null);
      })
      .finally(done)
      .catch(function(err) {});
  });

  it("removes a Pet", function(done) {
    Pet.findOneAndDelete(Dog._id)
      .then(function() {
        Pet.findOne({ pet_id: 800813 });
      })
      .then(function(Dog) {
        assert(Dog === null);
      })
      .finally(done)
      .catch(function(err) {});
  });
});
