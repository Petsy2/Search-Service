const assert = require("assert");
const Pet = require("./test_db");

describe("deleting a Pet", () => {
  let dog;

  beforeEach(done => {
    dog = new Pet({ pet_id: 8675309 });
    dog
      .save()
      .then(() => done(), done)
      .catch(err => console.log(err));
  });

  function assertHelper(statement, done) {
    statement
      .then(() => Pet.find({}), done)
      .then(pet => {
        assert(pet.length === 1);
        assert(pet[0].pet_id === 42);
      }, done)
      .then(() => done(), done)
      .catch(err => console.log(err));
  }

  it("sets and saves Pets using instance", done => {
    dog.set("pet_id", 42);
    assertHelper(dog.save(), done);
  });

  it("update Pets using instance", done => {
    assertHelper(dog.update({ pet_id: 42 }), done);
  });

  it("update all matching Pets using model", done => {
    assertHelper(dog.update({ pet_id: 8675309 }, { pet_id: 42 }), done);
  });

  it("update one Pet using model", done => {
    assertHelper(
      Pet.findOneAndUpdate({ pet_id: 8675309 }, { pet_id: 42 }, done)
    );
  });

  it("update one Pet using id", done => {
    assertHelper(Pet.findByIdAndUpdate(dog._id, { pet_id: 42 }, done));
  });
});
