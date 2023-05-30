import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";
const Main = async () => {
  try {
    mongoose.connect(config.database_url as string);
    console.log("Database connected");
    app.listen(config.port, () => {
      console.log(`App is listening to port ${config.port}`);
    });
  } catch (error) {
    console.log("📛 error occured", error);
  }
};

Main();
