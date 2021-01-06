require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

// Setting up ports
const connUri = process.env.MONGO_PROD_CONN_URL;
let PORT = process.env.PORT || 3000;

// Creating express app and configuring middleware needed for authentication
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configure mongoose's promise to global promise
mongoose.promise = global.Promise;
mongoose.connect(connUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () =>
  console.log("MongoDB --  database connection established successfully!")
);
connection.on("error", (err) => {
  console.log(
    `MongoDB connection error. Please make sure MongoDB is running. Err: ${err}`
  );
  process.exit();
});


// Configure Routes
require("./routes/index")(app);

// Start the server
server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}/`)
);
