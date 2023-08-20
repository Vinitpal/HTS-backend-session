const fs = require("fs");
const path = require("path");
const songList = require("./songs.json");

const getSongs = async (req, res) => {
  try {
    const myList = songList;

    // console.log(songList);

    res.status(200).json({ myList });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

const addSong = (req, res) => {
  try {
    // const { name, singer, genre, songLength, likes, views } = req.body;

    const newSong = req.body;
    // console.log(newSong);

    let myList = songList;
    myList.push(newSong);

    // console.log(myList);

    fs.writeFile(
      path.join(__dirname + "/songs.json"),
      JSON.stringify(myList),
      (err) => console.log(err)
    );

    res.status(200).json({ myList });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

module.exports = {
  getSongs,
  addSong,
};
