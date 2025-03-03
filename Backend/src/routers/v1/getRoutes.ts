import { Router, Request, Response, NextFunction } from "express";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("Hello World");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

export default router;
