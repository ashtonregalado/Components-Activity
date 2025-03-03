import { Router, Request, Response } from "express";

const router = Router();

router.post("/message", (req: Request, res: Response) => {
  const { message } = req.body;

  if (!message) {
    res.status(400).json({ error: "Message not found." });
  }

  res.status(200).json({ message: `${message}` });
});

export default router;
