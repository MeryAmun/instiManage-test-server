const express = require("express");
const dotEnv = require("dotenv");
const connectDb = require("./config/config");
dotEnv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({limit:'30mb',extended:true}))


app.get("/", (req, res) => {
  res.send("Hello and welcome to Geometry App API");
});

let PORT = process.env.PORT;
const host = '0.0.0.0'

const startServer = async () => {
  try {
    await connectDb(process.env.MONGO_URL).then(() => {
      if (PORT === null || PORT === "") {
        PORT = 7000;
      }
      app.listen(PORT,host, () => {
        console.log(`Listening to ${PORT}`);
      });
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();



