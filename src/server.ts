import app from "./app";
import { AppDataSource } from "./data-source"; // Linha modificada

async function init() {
  const PORT = process.env.PORT || 3000;

  await AppDataSource.initialize(); // Linha modificada

  app.listen(process.env.PORT || 3000);

  //app.listen(PORT, () => console.log("Running at http://localhost:" + PORT));
}

init();
