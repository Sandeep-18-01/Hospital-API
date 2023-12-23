const mongoose = require("mongoose");

// ****** Database Connection with Mongoose ****** //
mongoose.connect("mongodb://localhost/hospital_API", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

// ****** Connection Error Handling ****** //
db.on("error", console.error.bind(console, "Error connecting to the database"));

// ****** Connection Error Successful ****** //
db.once("open", function () {
  console.log("Successfully connected to the Database");
});
