import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express();
import cors from "cors";

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Testing route
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Working succsessfully");
});

export default app;
