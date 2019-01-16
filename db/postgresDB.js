const db = require("knex")({
  client: "pg",
  connection: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "student",
    password: process.env.DB_PASSWORD || "student",
    database: process.env.DB_NAME || "ten_mil"
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
