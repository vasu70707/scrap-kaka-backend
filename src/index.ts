import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./libs/db";

const PORT = process.env.PORT || 4000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log("Server running on port " + PORT);
    });
  })
  .catch((err) => {
    console.error("DB ERROR:", err);
  });
