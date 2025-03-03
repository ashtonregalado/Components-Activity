import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import getRoutes from "./routers/v1/getRoutes";
import postRoutes from "./routers/v1/postRoutes";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1/get", getRoutes);
app.use("/api/v1/post", postRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || "Internal Server Error" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/api`);
});
