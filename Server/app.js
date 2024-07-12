const express = require("express");
const { mongoose } = require("mongoose");
const app = express();
const cors = require("cors");
const routes = require("./routes/signup");

const cookieParser = require("cookie-parser");

const authRoute=require('./routes/booking')


app.use(cookieParser())

app.use(express.json());

app.use(
  cors({ 
    origin: "http://localhost:5173",
  })
);



app.use("/", routes);
app.use("/",authRoute)

const PORT = 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
mongoose.connect("mongodb://localhost:27017/Hotel-Booking");

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
