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
    pet_id: "1111",
    class: "mammal",
    family: "Felidae",
    species: "Tiger",
    img_url: "48,000"
  },
  {
    pet_id: "1112",
    class: "mammal",
    family: "Felidae",
    species: "Lion",
    img_url: "50,000"
  },
  {
    pet_id: "1113",
    class: "mammal",
    family: "Felidae",
    species: "Jaguar",
    img_url: "39,000"
  },
  {
    pet_id: "1114",
    class: "mammal",
    family: "Felidae",
    species: "Leopard",
    img_url: "37,000"
  },
  {
    pet_id: "1115",
    class: "mammal",
    family: "Felidae",
    species: "Snow Leopard",
    img_url: "44,000"
  },
  {
    pet_id: "1126",
    class: "mammal",
    family: "Felidae",
    species: "Cheeta",
    img_url: "47,000"
  },
  {
    pet_id: "1137",
    class: "mammal",
    family: "Felidae",
    species: "Cougar",
    img_url: "29,000"
  },
  {
    pet_id: "1218",
    class: "mammal",
    family: "Canidae",
    species: "Island Fox",
    img_url: "13,500"
  },
  {
    pet_id: "1229",
    class: "mammal",
    family: "Canidae",
    species: "Raccoon Dog",
    img_url: "7,500"
  },
  {
    pet_id: "12210",
    class: "mammal",
    family: "Canidae",
    species: "Arctic Fox",
    img_url: "15,750"
  },
  {
    pet_id: "12211",
    class: "mammal",
    family: "Canidae",
    species: "Blanford's Fox",
    img_url: "10,350"
  },
  {
    pet_id: "12212",
    class: "mammal",
    family: "Canidae",
    species: "Bat-Eared Fox",
    img_url: "11,450"
  },
  {
    pet_id: "12213",
    class: "mammal",
    family: "Canidae",
    species: "Hoary Fox",
    img_url: "8,550"
  },
  {
    pet_id: "12214",
    class: "mammal",
    family: "Canidae",
    species: "Bush Dog",
    img_url: "6,000"
  },
  {
    pet_id: "12215",
    class: "mammal",
    family: "Canidae",
    species: "Crab-Eating Fox",
    img_url: "7,200"
  },
  {
    pet_id: "12216",
    class: "mammal",
    family: "Canidae",
    species: "African Wild Dog",
    img_url: "13,100"
  },
  {
    pet_id: "12217",
    class: "mammal",
    family: "Canidae",
    species: "Ethiopian Wolf",
    img_url: "13,550"
  },
  {
    pet_id: "12218",
    class: "mammal",
    family: "Canidae",
    species: "Coyote",
    img_url: "3,050"
  },
  {
    pet_id: "12219",
    class: "mammal",
    family: "Canidae",
    species: "Side-Striped Jackal",
    img_url: "2,350"
  },
  {
    pet_id: "12220",
    class: "mammal",
    family: "Canidae",
    species: "Gray Wolf",
    img_url: "8,750"
  },
  {
    pet_id: "13121",
    class: "mammal",
    family: "Balaenopteridae",
    species: "Blue Whale",
    img_url: "597,750"
  },
  {
    pet_id: "13122",
    class: "mammal",
    family: "Balaenopteridae",
    species: "Fin Whale",
    img_url: "345,500"
  },
  {
    pet_id: "13123",
    class: "mammal",
    family: "Balaenopteridae",
    species: "Antarctic Minke Whale",
    img_url: "270,500"
  },
  {
    pet_id: "13124",
    class: "mammal",
    family: "Balaenopteridae",
    species: "Humpback Whale",
    img_url: "330,900"
  },
  {
    pet_id: "14125",
    class: "mammal",
    family: "Equidae",
    species: "Zebra",
    img_url: "30,200"
  },
  {
    pet_id: "14126",
    class: "mammal",
    family: "Equidae",
    species: "African Wild Ass",
    img_url: "25,000"
  },
  {
    pet_id: "14127",
    class: "mammal",
    family: "Equidae",
    species: "Przewalski's Horse",
    img_url: "19,750"
  },
  {
    pet_id: "14128",
    class: "mammal",
    family: "Ursidae",
    species: "Kodiac Brown Bear",
    img_url: "23,300"
  },
  {
    pet_id: "14129",
    class: "mammal",
    family: "Equidae",
    species: "Kiang",
    img_url: "27,750"
  },
  {
    pet_id: "14130",
    class: "mammal",
    family: "Equidae",
    species: "Nubian Wild Ass",
    img_url: "17,050"
  },
  {
    pet_id: "15131",
    class: "mammal",
    family: "Hippopotamidae",
    species: "Pygmy Hippopotamus",
    img_url: "36,250"
  },
  {
    pet_id: "15232",
    class: "mammal",
    family: "Hippopotamidae",
    species: "Hippopotamus",
    img_url: "46,250"
  },
  {
    pet_id: "16133",
    class: "mammal",
    family: "Camelidae",
    species: "Lama",
    img_url: "22,250"
  },
  {
    pet_id: "16134",
    class: "mammal",
    family: "Camelidae",
    species: "Guanaco",
    img_url: "20,775"
  },
  {
    pet_id: "16235",
    class: "mammal",
    family: "Camelidae",
    species: "Bactrian camel",
    img_url: "31,475"
  },
  {
    pet_id: "16236",
    class: "mammal",
    family: "Camelidae",
    species: "Dromedary",
    img_url: "36,275"
  },
  {
    pet_id: "16337",
    class: "mammal",
    family: "Camelidae",
    species: "Alpaca",
    img_url: "17,575"
  },
  {
    pet_id: "16338",
    class: "mammal",
    family: "Camelidae",
    species: "Vicuña",
    img_url: "19,775"
  },
  {
    pet_id: "17139",
    class: "mammal",
    family: "Suidae",
    species: "Bearded Pig",
    img_url: "4,765"
  },
  {
    pet_id: "17140",
    class: "mammal",
    family: "Suidae",
    species: "Visayan Warty Pig",
    img_url: "8,765"
  },
  {
    pet_id: "17141",
    class: "mammal",
    family: "Suidae",
    species: "Javan Warty Pig",
    img_url: "6,055"
  },
  {
    pet_id: "17142",
    class: "mammal",
    family: "Suidae",
    species: "Wild Boar",
    img_url: "10,055"
  },
  {
    pet_id: "17243",
    class: "mammal",
    family: "Suidae",
    species: "Common Warthog",
    img_url: "13,525"
  },
  {
    pet_id: "17244",
    class: "mammal",
    family: "Suidae",
    species: "Desert Warthog",
    img_url: "11,150"
  },
  {
    pet_id: "17345",
    class: "mammal",
    family: "Suidae",
    species: "North Sulawesi Babirusa",
    img_url: "14,550"
  },
  {
    pet_id: "17446",
    class: "mammal",
    family: "Suidae",
    species: "Red River Hog",
    img_url: "9,200"
  },
  {
    pet_id: "17547",
    class: "mammal",
    family: "Suidae",
    species: "Pygmy Hog",
    img_url: "13,250"
  },
  {
    pet_id: "18148",
    class: "mammal",
    family: "Hominidae",
    species: "Sumatran Orangutan",
    img_url: "44,250"
  },
  {
    pet_id: "18249",
    class: "mammal",
    family: "Hominidae",
    species: "Western Gorilla",
    img_url: "67,975"
  },
  {
    pet_id: "18250",
    class: "mammal",
    family: "Hominidae",
    species: "Eastern Gorilla",
    img_url: "69,980"
  },
  {
    pet_id: "18350",
    class: "mammal",
    family: "Hominidae",
    species: "Bonobo",
    img_url: "22,480"
  },
  {
    pet_id: "18351",
    class: "mammal",
    family: "Hominidae",
    species: "Common Chimpanzee",
    img_url: "24,400"
  },

  // STOP HERE!!!!!!!!!!!

  {
    pet_id: "18452",
    class: "mammal",
    family: "Hominidae",
    species: "Siamang",
    img_url: "17,800"
  },
  {
    pet_id: "18553",
    class: "mammal",
    family: "Hominidae",
    species: "Agile Gibbon",
    img_url: "14,250"
  },
  {
    pet_id: "19154",
    class: "mammal",
    family: "Ursidae",
    species: "Giant Panda",
    img_url: "67,350"
  },
  {
    pet_id: "19255",
    class: "mammal",
    family: "Ursidae",
    species: "Spectacled Bear",
    img_url: "54,750"
  },
  {
    pet_id: "19356",
    class: "mammal",
    family: "Ursidae",
    species: "Polar Bear",
    img_url: "97,745"
  },
  {
    pet_id: 19357,
    class: "mammal",
    family: "Phascolarctidae",
    genus: "Phascolarctos",
    species: "Koala Bear",
    price: "42,450"
  },
  {
    pet_id: "19358",
    class: "mammal",
    family: "Ursidae",
    species: "Cinnamon Bear",
    img_url: "81,355"
  },
  {
    pet_id: "19359",
    class: "mammal",
    family: "Ursidae",
    species: "Glacier Bear",
    img_url: "81,355"
  },
  {
    pet_id: "19360",
    class: "mammal",
    family: "Ursidae",
    species: "Baluchistan Black Bear",
    img_url: "68,300"
  },
  {
    pet_id: "19361",
    class: "mammal",
    family: "Ursidae",
    species: "Japanese Black Bear",
    img_url: "72,500"
  },
  {
    pet_id: "19362",
    class: "mammal",
    family: "Ursidae",
    species: "Ussuri Black Bear",
    img_url: "59,900"
  },
  {
    pet_id: "10163",
    class: "mammal",
    family: "Odobenidae",
    species: "Walrus",
    img_url: "234,979"
  },
  {
    pet_id: "10164",
    class: "mammal",
    family: "Monodontidae",
    species: "Narwhal",
    img_url: "537,670"
  },
  {
    pet_id: "10165",
    class: "mammal",
    family: "Cervidae",
    species: "Water Deer",
    img_url: "109,000"
  },
  {
    pet_id: "10166",
    class: "mammal",
    family: "Giraffidae",
    species: "Giraffe",
    img_url: "123,050"
  },
  {
    pet_id: "10167",
    class: "mammal",
    family: "Giraffidae",
    species: "Okapi",
    img_url: "42,150"
  },
  {
    pet_id: "10168",
    class: "mammal",
    family: "Bovidae",
    species: "Gaur",
    img_url: "47,555"
  },
  {
    pet_id: "10169",
    class: "mammal",
    family: "Bovidae",
    species: "Zebu",
    img_url: "23,595"
  },
  {
    pet_id: "10170",
    class: "mammal",
    family: "Bovidae",
    species: "Wild Yak",
    img_url: "25,155"
  },
  {
    pet_id: "10171",
    class: "mammal",
    family: "Cervidae",
    species: "Reindeer",
    img_url: "63,150"
  },
  {
    pet_id: "10172",
    class: "mammal",
    family: "Cervidae",
    species: "White-Tailed Deer",
    img_url: "2,560"
  },
  {
    pet_id: "10173",
    class: "mammal",
    family: "Cervidae",
    species: "Moose",
    img_url: "13,720"
  },
  {
    pet_id: "4111",
    class: "Reptilia",
    family: "Crocodylidae",
    species: "Freshwater Crocodile",
    img_url: "24,700"
  },
  {
    pet_id: "4112",
    class: "Reptilia",
    family: "Crocodylidae",
    species: "Mugger Crocodile",
    img_url: "26,340"
  },
  {
    pet_id: "4113",
    class: "Reptilia",
    family: "Crocodylidae",
    species: "American Crocodile",
    img_url: "22,510"
  },
  {
    pet_id: "4114",
    class: "Reptilia",
    family: "Crocodylidae",
    species: "Saltwater Crocodile",
    img_url: "29,100"
  },
  {
    pet_id: "4215",
    class: "Reptilia",
    family: "Alligatoridae",
    species: "Broad-Snouted Caiman",
    img_url: "32,690"
  },
  {
    pet_id: "4216",
    class: "Reptilia",
    family: "Alligatoridae",
    species: "Yacare Caiman",
    img_url: "33,240"
  },
  {
    pet_id: "4227",
    class: "Reptilia",
    family: "Alligatoridae",
    species: "American Alligator",
    img_url: "46,990"
  },
  {
    pet_id: "4228",
    class: "Reptilia",
    family: "Alligatoridae",
    species: "Chinese Alligator",
    img_url: "38,465"
  },
  {
    pet_id: "4239",
    class: "Reptilia",
    family: "Alligatoridae",
    species: "Cuvier's Dwarf Caiman",
    img_url: "23,565"
  },
  {
    pet_id: "42310",
    class: "Reptilia",
    family: "Alligatoridae",
    species: "Smooth-Fronted Caiman",
    img_url: "21,255"
  },
  {
    pet_id: "42411",
    class: "Reptilia",
    family: "Alligatoridae",
    species: "Black Caiman",
    img_url: "28,425"
  },
  {
    pet_id: "43112",
    class: "Reptilia",
    family: "Gavialidae",
    species: "False Gharial",
    img_url: "33,375"
  },
  {
    pet_id: "44113",
    class: "Reptilia",
    family: "Pythonidae",
    species: "Burmese Python",
    img_url: "7,275"
  },
  {
    pet_id: "45114",
    class: "Reptilia",
    family: "Boidae",
    species: "Boa Constrictor",
    img_url: "12,100"
  },
  {
    pet_id: "45215",
    class: "Reptilia",
    family: "Boidae",
    species: "Green Anaconda",
    img_url: "15,670"
  },
  {
    pet_id: "45216",
    class: "Reptilia",
    family: "Boidae",
    species: "Bolivian Anaconda",
    img_url: "17,470"
  },
  {
    pet_id: "46117",
    class: "Reptilia",
    family: "Viperidae",
    species: "Central Turkish Mountain Viper",
    img_url: "12,850"
  },
  {
    pet_id: "2111",
    class: "Aves",
    family: "Struthionidae",
    species: "Ostrich",
    img_url: "11,000"
  },
  {
    pet_id: "2222",
    class: "Aves",
    family: "Apterygidae",
    species: "Kiwi",
    img_url: "2,000"
  },
  {
    pet_id: "2333",
    class: "Aves",
    family: "Anatidae",
    species: "Steamer Duck",
    img_url: "1,200"
  },
  {
    pet_id: "2344",
    class: "Aves",
    family: "Anatidae",
    species: "Mute swan",
    img_url: "4,500"
  },
  {
    pet_id: "2345",
    class: "Aves",
    family: "Anatidae",
    species: "Trumpeter swan",
    img_url: "6,300"
  },
  {
    pet_id: "2356",
    class: "Aves",
    family: "Anatidae",
    species: "Blue Duck",
    img_url: "2,500"
  },
  {
    pet_id: "2337",
    class: "Aves",
    family: "Anatidae",
    species: "Mallard",
    img_url: "1,300"
  },
  {
    pet_id: "2338",
    class: "Aves",
    family: "Anatidae",
    species: "Yellow-Billed Duck",
    img_url: "2,600"
  },
  {
    pet_id: "2339",
    class: "Aves",
    family: "Anatidae",
    species: "Hawaiian duck",
    img_url: "2,800"
  },
  {
    pet_id: "24110",
    class: "Aves",
    family: "Sulidae",
    species: "Blue-Footed Booby",
    img_url: "203,560"
  },
  {
    pet_id: "3111",
    class: "Actinopterygii",
    family: "Melanocetidae",
    species: "Humpback Anglerfish",
    img_url: "129,880"
  },
  {
    pet_id: "3212",
    class: "Actinopterygii",
    family: "Stomiidae",
    species: "Viperfish",
    img_url: "109,880"
  }
])
  .then(mongoose.disconnect())
  .catch(err => console.error(err));
