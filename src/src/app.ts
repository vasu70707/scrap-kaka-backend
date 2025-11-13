import express from "express";
import cors from "cors";
import priceRoutes from "./routes/price.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/v1/prices", priceRoutes);

// seed route
import { runSeed } from "./run-seed";
app.get("/run-seed", runSeed);

export default app;
