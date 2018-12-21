const assert = require("assert");
const Pet = require("./test_db");
let Dog;

beforeEach(function() {
  Dog = new Pet({ pet_id: 1337 });
  Dog.save()
    .then(function() {
      return done();
    })
    .catch(function(err) {
      console.log(err);
    });
});

describe("Reading Dog details", function() {
  it("finds Dog with the pet_id of 1337", function(done) {
    Pet.findOne({ pet_id: 1337 })
      .then(function(pet) {
        assert(Pet.pet_id === 1337);
        done();
      })
      .catch(function(err) {
        console.log(err);
      });
  });
});
