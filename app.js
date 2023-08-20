const express = require("express");
const app = express();
const PORT = 5000;
const songsRouter = require("./routes/songs");

app.use(express.json());
app.use(songsRouter);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to my backend app</h1>");
});

const start = () => {
  try {
    app.listen(PORT, console.log(`Server is listening on port ${PORT} ....`));
  } catch (error) {
    console.log(error);
  }
};

start();
