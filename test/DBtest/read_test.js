const assert = require("assert");
const Pet = require("./test_db");
let Dog;

beforeEach(function(done) {
  Dog = new Pet({ pet_id: 1337 });
  Dog.save().then(function() {
    done();
  });
});

describe("Reading Dog details", function() {
  it("finds Dog with the pet_id of 1337", function(done) {
    Pet.findOne({ pet_id: 1337 })
      .then(function(Dog) {
        assert(Dog.pet_id === 1337);
      })
      .finally(done)
      .catch(function(err) {});
  });
});
