import { createConnection } from "typeorm";
import { Category, Transaction } from "../typeorm/entities";

export const createTestConnection = () =>
  createConnection({
    type: "sqlite",
    database: ":memory:",
    dropSchema: true,
    entities: [Category, Transaction],
    synchronize: true,
    logging: false,
  });
