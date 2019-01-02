const mongoose = require("mongoose");
const db = require("../PetsyRecommends");
mongoose.Promise = global.Promise;

const options = {
  useNewUrlParser: true,
  connectTimeoutMS: 2000, // Give up initial connection after 2 seconds
  socketTimeoutMS: 5000 // Close sockets after 5 seconds of inactivity
};

mongoose.connect(
  "mongodb://localhost:27017/PetsyRecommends",
  options
);
mongoose.connection.on("connected", function() {
  console.log("PetsyRecommends connection is open. As you wish....");
});
mongoose.connection.on("error", function(err) {
  console.log("WE HAVE AN ERROR CAP'N " + err);
});

mongoose.connection.on("disconnected", function() {
  mongoose.connection.close(function() {
    console.log(
      "PetsyRecommends connection was closed. Data successfully inserted into the database."
    );
    process.exit(0);
  });
});
console.log("Seeding the database boss, RELEASING THE PETS!!!!");
db.Pet.insertMany([
  {
    pet_id: 1111,
    class: "mammal",
    family: "Felidae",
    species: "Tiger",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/1111.jpg"
  },
  {
    pet_id: 1112,
    class: "mammal",
    family: "Felidae",
    species: "Lion",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/1112.jpg"
  },
  {
    pet_id: 1113,
    class: "mammal",
    family: "Felidae",
    species: "Jaguar",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/1113.jpg"
  },
  {
    pet_id: 1114,
    class: "mammal",
    family: "Felidae",
    species: "Leopard",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/1114.jpeg"
  },
  {
    pet_id: 1115,
    class: "mammal",
    family: "Felidae",
    species: "Snow Leopard",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/1115.jpeg"
  },
  {
    pet_id: 1126,
    class: "mammal",
    family: "Felidae",
    species: "Cheeta",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/1126.jpg"
  },
  {
    pet_id: 1137,
    class: "mammal",
    family: "Felidae",
    species: "Cougar",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/1137.jpg"
  },
  {
    pet_id: 1218,
    class: "mammal",
    family: "Canidae",
    species: "Island Fox",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/1218.jpg"
  },
  {
    pet_id: 1229,
    class: "mammal",
    family: "Canidae",
    species: "Raccoon Dog",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/1229.jpg"
  },
  {
    pet_id: 12210,
    class: "mammal",
    family: "Canidae",
    species: "Arctic Fox",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/12210.jpg"
  },
  {
    pet_id: 12211,
    class: "mammal",
    family: "Canidae",
    species: "Blanford's Fox",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/12211.jpg"
  },
  {
    pet_id: 12212,
    class: "mammal",
    family: "Canidae",
    species: "Bat-Eared Fox",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/12212.jpg"
  },
  {
    pet_id: 12213,
    class: "mammal",
    family: "Canidae",
    species: "Hoary Fox",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/12213.jpg"
  },
  {
    pet_id: 12214,
    class: "mammal",
    family: "Canidae",
    species: "Bush Dog",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/12214.jpeg"
  },
  {
    pet_id: 12215,
    class: "mammal",
    family: "Canidae",
    species: "Crab-Eating Fox",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/12215.jpeg"
  },
  {
    pet_id: 12216,
    class: "mammal",
    family: "Canidae",
    species: "African Wild Dog",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/12216.jpg"
  },
  {
    pet_id: 12217,
    class: "mammal",
    family: "Canidae",
    species: "Ethiopian Wolf",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/12217.jpg"
  },
  {
    pet_id: 12218,
    class: "mammal",
    family: "Canidae",
    species: "Coyote",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/12218.jpg"
  },
  {
    pet_id: 12219,
    class: "mammal",
    family: "Canidae",
    species: "Side-Striped Jackal",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/12219.jpg"
  },
  {
    pet_id: 12220,
    class: "mammal",
    family: "Canidae",
    species: "Gray Wolf",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/12220.jpeg"
  },
  {
    pet_id: 13121,
    class: "mammal",
    family: "Balaenopteridae",
    species: "Blue Whale",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/13121.jpg"
  },
  {
    pet_id: 13122,
    class: "mammal",
    family: "Balaenopteridae",
    species: "Fin Whale",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/13122.jpg"
  },
  {
    pet_id: 13123,
    class: "mammal",
    family: "Balaenopteridae",
    species: "Antarctic Minke Whale",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/13123.jpeg"
  },
  {
    pet_id: 13124,
    class: "mammal",
    family: "Balaenopteridae",
    species: "Humpback Whale",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/13124.jpg"
  },
  {
    pet_id: 14125,
    class: "mammal",
    family: "Equidae",
    species: "Zebra",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/14125.jpg"
  },
  {
    pet_id: 14126,
    class: "mammal",
    family: "Equidae",
    species: "African Wild Ass",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/14126.jpg"
  },
  {
    pet_id: 14127,
    class: "mammal",
    family: "Equidae",
    species: "Przewalski's Horse",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/14127.jpg"
  },
  {
    pet_id: 14128,
    class: "mammal",
    family: "Ursidae",
    species: "Kodiac Brown Bear",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/14128.jpg"
  },
  {
    pet_id: 14129,
    class: "mammal",
    family: "Equidae",
    species: "Kiang",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/14129.jpg"
  },
  {
    pet_id: 14130,
    class: "mammal",
    family: "Equidae",
    species: "Nubian Wild Ass",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/14130.jpg"
  },
  {
    pet_id: 15131,
    class: "mammal",
    family: "Hippopotamidae",
    species: "Pygmy Hippopotamus",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/15131.jpg"
  },
  {
    pet_id: 15232,
    class: "mammal",
    family: "Hippopotamidae",
    species: "Hippopotamus",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/15232.jpg"
  },
  {
    pet_id: 16133,
    class: "mammal",
    family: "Camelidae",
    species: "Lama",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/16133.jpg"
  },
  {
    pet_id: 16134,
    class: "mammal",
    family: "Camelidae",
    species: "Guanaco",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/16134.jpg"
  },
  {
    pet_id: 16235,
    class: "mammal",
    family: "Camelidae",
    species: "Bactrian camel",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/16235.jpg"
  },
  {
    pet_id: 16236,
    class: "mammal",
    family: "Camelidae",
    species: "Dromedary",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/16236.jpg"
  },
  {
    pet_id: 16337,
    class: "mammal",
    family: "Camelidae",
    species: "Alpaca",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/16337.jpg"
  },
  {
    pet_id: 16338,
    class: "mammal",
    family: "Camelidae",
    species: "Vicuña",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/16338.jpg"
  },
  {
    pet_id: 17139,
    class: "mammal",
    family: "Suidae",
    species: "Bearded Pig",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/17139.jpg"
  },
  {
    pet_id: 17140,
    class: "mammal",
    family: "Suidae",
    species: "Visayan Warty Pig",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/17140.jpg"
  },
  {
    pet_id: 17141,
    class: "mammal",
    family: "Suidae",
    species: "Javan Warty Pig",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/17141.JPG"
  },
  {
    pet_id: 17142,
    class: "mammal",
    family: "Suidae",
    species: "Wild Boar",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/17142.jpg"
  },
  {
    pet_id: 17243,
    class: "mammal",
    family: "Suidae",
    species: "Common Warthog",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/17243.jpg"
  },
  {
    pet_id: 17244,
    class: "mammal",
    family: "Suidae",
    species: "Desert Warthog",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/17244.jpeg"
  },
  {
    pet_id: 17345,
    class: "mammal",
    family: "Suidae",
    species: "North Sulawesi Babirusa",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/17345.jpeg"
  },
  {
    pet_id: 17446,
    class: "mammal",
    family: "Suidae",
    species: "Red River Hog",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/17446.jpg"
  },
  {
    pet_id: 17547,
    class: "mammal",
    family: "Suidae",
    species: "Pygmy Hog",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/17547.jpeg"
  },
  {
    pet_id: 18148,
    class: "mammal",
    family: "Hominidae",
    species: "Sumatran Orangutan",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/18148.jpg"
  },
  {
    pet_id: 18249,
    class: "mammal",
    family: "Hominidae",
    species: "Western Gorilla",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/18249.jpeg"
  },
  {
    pet_id: 18250,
    class: "mammal",
    family: "Hominidae",
    species: "Eastern Gorilla",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/18250.jpg"
  },
  {
    pet_id: 18350,
    class: "mammal",
    family: "Hominidae",
    species: "Bonobo",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/18350.jpg"
  },
  {
    pet_id: 18351,
    class: "mammal",
    family: "Hominidae",
    species: "Common Chimpanzee",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/18351.jpg"
  },
  {
    pet_id: 18452,
    class: "mammal",
    family: "Hominidae",
    species: "Siamang",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/18452.jpg"
  },
  {
    pet_id: 18553,
    class: "mammal",
    family: "Hominidae",
    species: "Agile Gibbon",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/18553.jpg"
  },
  {
    pet_id: 19154,
    class: "mammal",
    family: "Ursidae",
    species: "Giant Panda",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/19154.jpg"
  },
  {
    pet_id: 19255,
    class: "mammal",
    family: "Ursidae",
    species: "Spectacled Bear",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/19255.jpeg"
  },
  {
    pet_id: 19356,
    class: "mammal",
    family: "Ursidae",
    species: "Polar Bear",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/19356.jpg"
  },
  {
    pet_id: 19357,
    class: "mammal",
    family: "Phascolarctidae",
    genus: "Phascolarctos",
    species: "Koala Bear",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/19357.jpg"
  },
  {
    pet_id: 19358,
    class: "mammal",
    family: "Ursidae",
    species: "Cinnamon Bear",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/19358.jpg"
  },
  {
    pet_id: 19359,
    class: "mammal",
    family: "Ursidae",
    species: "Glacier Bear",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/19359.jpg"
  },
  {
    pet_id: 19360,
    class: "mammal",
    family: "Ursidae",
    species: "Baluchistan Black Bear",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/19360.jpg"
  },
  {
    pet_id: 19361,
    class: "mammal",
    family: "Ursidae",
    species: "Japanese Black Bear",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/19361.jpg"
  },
  {
    pet_id: 19362,
    class: "mammal",
    family: "Ursidae",
    species: "Ussuri Black Bear",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/19362.JPG"
  },
  {
    pet_id: 10163,
    class: "mammal",
    family: "Odobenidae",
    species: "Walrus",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/10163.jpeg"
  },
  {
    pet_id: 10164,
    class: "mammal",
    family: "Monodontidae",
    species: "Narwhal",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/10164.png"
  },
  {
    pet_id: 10165,
    class: "mammal",
    family: "Cervidae",
    species: "Water Deer",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/10165.jpg"
  },
  {
    pet_id: 10166,
    class: "mammal",
    family: "Giraffidae",
    species: "Giraffe",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/10166.jpg"
  },
  {
    pet_id: 10167,
    class: "mammal",
    family: "Giraffidae",
    species: "Okapi",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/10167.jpg"
  },
  {
    pet_id: 10168,
    class: "mammal",
    family: "Bovidae",
    species: "Gaur",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/10168.jpg"
  },
  {
    pet_id: 10169,
    class: "mammal",
    family: "Bovidae",
    species: "Zebu",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/10169.jpg"
  },
  {
    pet_id: 10170,
    class: "mammal",
    family: "Bovidae",
    species: "Wild Yak",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/10170.jpg"
  },
  {
    pet_id: 10171,
    class: "mammal",
    family: "Cervidae",
    species: "Reindeer",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/10171.jpg"
  },
  {
    pet_id: 10172,
    class: "mammal",
    family: "Cervidae",
    species: "White-Tailed Deer",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/10172.jpg"
  },
  {
    pet_id: 10173,
    class: "mammal",
    family: "Cervidae",
    species: "Moose",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/10173.jpg"
  },
  {
    pet_id: 4111,
    class: "Reptilia",
    family: "Crocodylidae",
    species: "Freshwater Crocodile",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/4111.jpg"
  },
  {
    pet_id: 4112,
    class: "Reptilia",
    family: "Crocodylidae",
    species: "Mugger Crocodile",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/4112.jpg"
  },
  {
    pet_id: 4113,
    class: "Reptilia",
    family: "Crocodylidae",
    species: "American Crocodile",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/4113.jpg"
  },
  {
    pet_id: 4114,
    class: "Reptilia",
    family: "Crocodylidae",
    species: "Saltwater Crocodile",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/4114.jpg"
  },
  {
    pet_id: 4215,
    class: "Reptilia",
    family: "Alligatoridae",
    species: "Broad-Snouted Caiman",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/4215.jpg"
  },
  {
    pet_id: 4216,
    class: "Reptilia",
    family: "Alligatoridae",
    species: "Yacare Caiman",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/4216.jpg"
  },
  {
    pet_id: 4227,
    class: "Reptilia",
    family: "Alligatoridae",
    species: "American Alligator",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/4227.jpg"
  },
  {
    pet_id: 4228,
    class: "Reptilia",
    family: "Alligatoridae",
    species: "Chinese Alligator",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/4228.jpg"
  },
  {
    pet_id: 4239,
    class: "Reptilia",
    family: "Alligatoridae",
    species: "Cuvier's Dwarf Caiman",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/4239.jpg"
  },
  {
    pet_id: 42310,
    class: "Reptilia",
    family: "Alligatoridae",
    species: "Smooth-Fronted Caiman",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/42310.jpg"
  },
  {
    pet_id: 42411,
    class: "Reptilia",
    family: "Alligatoridae",
    species: "Black Caiman",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/42411.jpg"
  },
  {
    pet_id: 43112,
    class: "Reptilia",
    family: "Gavialidae",
    species: "False Gharial",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/43112.jpg"
  },
  {
    pet_id: 44113,
    class: "Reptilia",
    family: "Pythonidae",
    species: "Burmese Python",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/44113.jpg"
  },
  {
    pet_id: 45114,
    class: "Reptilia",
    family: "Boidae",
    species: "Boa Constrictor",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/45114.jpg"
  },
  {
    pet_id: 45215,
    class: "Reptilia",
    family: "Boidae",
    species: "Green Anaconda",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/45215.jpg"
  },
  {
    pet_id: 45216,
    class: "Reptilia",
    family: "Boidae",
    species: "Bolivian Anaconda",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/45216.jpeg"
  },
  {
    pet_id: 46117,
    class: "Reptilia",
    family: "Viperidae",
    species: "Central Turkish Mountain Viper",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/46117.jpg"
  },
  {
    pet_id: 2111,
    class: "Aves",
    family: "Struthionidae",
    species: "Ostrich",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/2111.jpg"
  },
  {
    pet_id: 2222,
    class: "Aves",
    family: "Apterygidae",
    species: "Kiwi",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/2222.jpg"
  },
  {
    pet_id: 2333,
    class: "Aves",
    family: "Anatidae",
    species: "Steamer Duck",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/2333.jpg"
  },
  {
    pet_id: 2344,
    class: "Aves",
    family: "Anatidae",
    species: "Mute swan",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/2344.jpg"
  },
  {
    pet_id: 2345,
    class: "Aves",
    family: "Anatidae",
    species: "Trumpeter swan",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/2345.jpg"
  },
  {
    pet_id: 2356,
    class: "Aves",
    family: "Anatidae",
    species: "Blue Duck",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/2356.JPG"
  },
  {
    pet_id: 2337,
    class: "Aves",
    family: "Anatidae",
    species: "Mallard",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/2337.jpg"
  },
  {
    pet_id: 2338,
    class: "Aves",
    family: "Anatidae",
    species: "Yellow-Billed Duck",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/2338.jpg"
  },
  {
    pet_id: 2339,
    class: "Aves",
    family: "Anatidae",
    species: "Hawaiian duck",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/2339.jpg"
  },
  {
    pet_id: 24110,
    class: "Aves",
    family: "Sulidae",
    species: "Blue-Footed Booby",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/24110.jpg"
  },
  {
    pet_id: 3111,
    class: "Actinopterygii",
    family: "Melanocetidae",
    species: "Humpback Anglerfish",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/3111.jpg"
  },
  {
    pet_id: 3212,
    class: "Actinopterygii",
    family: "Stomiidae",
    species: "Viperfish",
    img_url: "https://s3.us-east-2.amazonaws.com/petpicks/3212.jpg"
  }
])
  .then(mongoose.disconnect())
  .catch(err => console.error(err));
