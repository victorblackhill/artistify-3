// create a test data set of valid users
require("dotenv").config();
require("./../../config/mongo"); // fetch the db connection
const ArtistModel = require("./../../model/Artist"); // fetch the model to validate our user document before insertion (in database)
const StyleModel = require("./../../model/Style"); // same for the styleModel

const artists = [
  {
    name: "sonic youth",
    description: "a noisy band",
    isBand: true,
    baseStyles: ["rock"],
    picture:
      "https://res.cloudinary.com/gdaconcept/image/upload/v1614550774/workshop-artistify/sonic-youth_xhidd0.jpg",
  },
  {
    name: "wu tang clan",
    description: "a legendary hip hop crew",
    isBand: true,
    baseStyles: ["rap"],
    picture:
      "https://res.cloudinary.com/gdaconcept/image/upload/v1614550771/workshop-artistify/wu-tang-logo_rv3uk3.jpg",
  },
  {
    name: "aphex twin",
    description: "a major electro artist",
    isBand: false,
    baseStyles: ["electro"],
    picture:
      "https://res.cloudinary.com/gdaconcept/image/upload/v1614551075/workshop-artistify/aphex-twin_nqrksh.jpg",
  },
  {
    name: "bojan z",
    description: "a dope jazz artist",
    isBand: false,
    baseStyles: ["jazz"],
    picture:
      "https://res.cloudinary.com/gdaconcept/image/upload/v1614551075/workshop-artistify/bojan-z_ffqeqx.jpg",
  },
  {
    name: "bad brains",
    description: "a mythical punk band",
    isBand: true,
    baseStyles: ["rock"],
    picture:
      "https://res.cloudinary.com/gdaconcept/image/upload/v1614551075/workshop-artistify/bad-brains_ykblym.jpg",
  },
];

(async function insertLabels() {
  try {
    await ArtistModel.deleteMany(); // empty the styles db collection

    const styles = await StyleModel.find();

    //console.log(styles);

    artists.forEach((artist) => {
      artist.baseStyles.forEach((style) => {
        const found = styles.find((s) => s.name === style);
        if (found) {
          Array.isArray(artist.styles) ? artist.styles.push(found._id) : artist.styles = [found._id]
        }
      });
      delete artist.baseStyles;
    });
    // return;

    const inserted = await ArtistModel.insertMany(artists); // insert docs in db
    console.log(`seed artists done : ${inserted.length} documents inserted !`);
    process.exit();
  } catch (err) {
    console.error(err);
  }
})();
