/* eslint-disable no-console */
import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection("default")
  .then(async () => {
    const app = (await import("./config/app")).default;

    const port = 3333;
    app.listen(port, () =>
      console.log(`Server running at http://localhost:${port}`),
    );
  })
  .catch(console.error);
