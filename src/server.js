require("dotenv").config();

import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import Route from './routes/index';

// Setting up ports
const connUri = process.env.MONGO_PROD_CONN_URL;
let PORT = process.env.PORT || 3000;

// Creating express app and configuring middleware needed for authentication
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1', Route);
app.get('/', (req, res) => res.status(200).send({ status: 200, message: 'Welcome to Client Management APIs' }));

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

// Start the server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}/`)
);
