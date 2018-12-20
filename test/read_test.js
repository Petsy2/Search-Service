const assert = require("assert");
const Pet = require("./test_db");
let Dog;

beforeEach(() => {
  Dog = new Pet({ pet_id: 1337 });
  Dog.save()
    .then(() => done(), done)
    .catch(err => {
      console.error(err);
    });
});

describe("Reading Dog details", () => {
  it("finds Dog with the pet_id of 1337", done => {
    Pet.findOne({ pet_id: 1337 }).then(pet => {
      assert(pet.pet_id === 1337);
      done();
    });
  });
});
