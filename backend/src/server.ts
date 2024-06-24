import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function main() {
  await mongoose.connect(config.database_url as string);
  console.log("Connected to MongoDB");
  app.listen(config.port, () => {
    console.log(`Server running at port ${config.port}`);
  });
}
main();
