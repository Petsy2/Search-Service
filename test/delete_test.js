const assert = require("assert");
const Pet = require("./test_db");

describe("Deleting a Pet", () => {
  let dog;

  beforeEach(done => {
    dog = new Pet({ pet_id: 800813 });
    dog
      .save()
      .then(() => done())
      .catch(err => {
        console.error(err);
      });
  });

  it("removes a Pet using it's instance", done => {
    dog
      .remove()
      .then(pet => assert(pet === null).done())
      .catch(err => {
        console.error(err);
      });
  });

  it("it removes multiple Pets!", done => {
    Pet.remove({ pet_id: 800813 })
      .then(() => Pet.findOne({ pet_id: 800813 }))
      .then(pet => {
        assert(pet === null);
        done();
      })
      .catch(err => {
        console.error(err);
      });
  });

  it("removes a Pet", done => {
    Pet.findOneAndRemove(dog._id)
      .then(() => Pet.findOne({ pet_id: 800813 }))
      .then(pet => {
        assert(pet === null);
        done();
      })
      .catch(err => {
        console.error(err);
      });
  });
});
