require("dotenv").config();
require("./../../config/mongo"); // fetch the db connection
const ArtistModel = require("./../../model/Artist");
const AlbumModel = require("./../../model/Album");
const LabelModel = require("./../../model/Label");

const albums = [
  {
    title: "rock for light",
    releaseDate: new Date("04/15/1983"),
    label: null,
    artist: null,
    cover:
      "https://res.cloudinary.com/gdaconcept/image/upload/v1614649260/workshop-artistify/Rock_for_Light_wwgxhv.jpg",
  },
  {
    title: "wu tang forever",
    releaseDate: new Date("06/03/1997"),
    label: null,
    artist: null,
    cover:
      "https://res.cloudinary.com/gdaconcept/image/upload/v1614649269/workshop-artistify/Wu-Tang_Forever_yxwo20.png",
  },
  {
    title: "Drukqs",
    releaseDate: new Date("10/22/2001"),
    label: null,
    artist: null,
    cover:
      "https://res.cloudinary.com/gdaconcept/image/upload/v1614649269/workshop-artistify/Drukqs__Front_Cover_ccmndb.png",
  },
];

(async function insertLabels() {
  try {
    await AlbumModel.deleteMany(); // empty the album db collection

    const artists = await Promise.all([
      ArtistModel.findOne({ name: "wu tang clan" }),
      ArtistModel.findOne({ name: "aphex twin" }),
      ArtistModel.findOne({ name: "bad brains" }),
    ]);

    albums[0].artist = artists[2];
    albums[1].artist = artists[0];
    albums[2].artist = artists[1];

    const labels = await Promise.all([
      LabelModel.findOne({ name: "Loud Records" }),
      LabelModel.findOne({ name: "Warp Records" }),
      LabelModel.findOne({ name: "ROIR Records" }),
    ]);

    albums[0].label = labels[2];
    albums[1].label = labels[0];
    albums[2].label = labels[0];

    const inserted = await AlbumModel.insertMany(albums); // insert docs in db
    console.log(`seed albums done : ${inserted.length} documents inserted !`);
    process.exit();
  } catch (err) {
    console.error(err);
  }
})();
