import express from "express";
import cors from "cors";
import getRoutes from "./routes/getRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/get", getRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
