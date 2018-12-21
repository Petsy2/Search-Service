const assert = require("assert");
const Pet = require("./test_db"); //Import the Pets model from test Database.

describe("Creating documents", function() {
  it("creates a pet", function(done) {
    const Dog = new Pet({ pet_id: 1337 });

    Dog.save()
      .then(function() {
        assert(!Dog.isNew); //if Dog is saved to db it is not new
      })
      .finally(done)
      .catch(function(err) {});
  });
});
