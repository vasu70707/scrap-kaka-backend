import { DataSource } from "typeorm";
import { Price } from "../entities/Price";
import { City } from "../entities/City";
import { Category } from "../entities/Category";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: [Price, City, Category],
});
