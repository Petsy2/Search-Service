const db = require("knex")({
  client: "pg",
  connection: {
    host: process.env.PG_HOST || "localhost",
    user: process.env.PG_USER || "student",
    password: process.env.PG_PASSWORD || "student",
    database: process.env.PG_NAME || "ten_mil"
  }
});

const getRecommendedPets = pet_id => {
  const subquery = db
    .select("family")
    .from("pets")
    .where({ pet_id });
  return db
    .select()
    .from("pets")
    .where({ family: subquery })
    .limit(20);
};

module.exports = { getRecommendedPets };
