import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  res.status(200).json("--- server running ✅ ---");
});

app.post("/peanut-butter", async (req: Request, res: Response) => {
  res.status(200).json("peanut butter");
});

app.listen(8080, () => {
  console.log("--- server running ---");
});
