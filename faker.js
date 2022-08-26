// getting-started.js
import mongoose from "mongoose";
import Analysis from "./model.js";

const DEFAULT_TIMESTAMP = 1661395400;
const DEFAULT_DFZ = 0;
const NUM_OF_RECORDS = 10000

mongoose.connect("mongodb://localhost:27017/AutoCarServer", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

for (var i = 0; i <= NUM_OF_RECORDS; i++) {
  process.stdout.write(
    "Importing " + Math.floor((i * 100) / NUM_OF_RECORDS) + "% complete... \r"
  );
  await Analysis.create({
    carId: "car69",
    data: {
      lat: 22.111111112222,
      lon: 105.74740829431394,
      alt: -2.535782209557721,
    },
    timestamp: DEFAULT_TIMESTAMP + i,
    dfz: parseFloat(i / 1000),
  });
  if (i === NUM_OF_RECORDS) {
    console.log("Importing 100% complete");
    process.exit();
  }
}
