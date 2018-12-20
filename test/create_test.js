const assert = require("assert");
const Pet = require("./test_db"); //Import the Pets model from test Database.

describe("Creating documents", () => {
  it("creates a pet", done => {
    const Dog = new Pet({ pet_id: 1337 });

    poke
      .save()
      .then(() => {
        assert(!Dog.isNew); //if Dog is saved to db it is not new
        done();
      })
      .catch(err => {
        console.error(err);
      });
  });
});
