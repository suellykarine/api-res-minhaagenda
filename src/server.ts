import "dotenv/config";
import app from "./app";
import { AppDataSource } from "./data-source";

async function init() {
  const PORT = process.env.PORT || 3000;

  await AppDataSource.initialize();
  //app.listen(process.env.PORT || 3000);

  app.listen(PORT, () => console.log("Running at http://localhost:" + PORT));
}

init();
