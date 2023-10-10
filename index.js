const express = require("express");
const dotEnv = require("dotenv");
const connectDb = require("./config/config");
const exchangeRoute = require("./routes/exchangeRoute");
const bodyParser = require('body-parser')
dotEnv.config();

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true }))
// app.use(express.json({ limit: '30mb', extended: true }))
//  app.use(express.urlencoded({limit:'30mb',extended:true}))
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/app-v1", exchangeRoute);
app.get("/", (req, res) => {
  res.send("Hello and welcome to InstaManage MERN Test App API");
});

let PORT = process.env.PORT;
const host = "0.0.0.0";

const startServer = async () => {
  try {
    await connectDb(process.env.MONGO_URL).then(() => {
      if (PORT === null || PORT === "") {
        PORT = 7000;
      }
      app.listen(PORT, host, () => {
        console.log(`Listening to ${PORT}`);
      });
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
