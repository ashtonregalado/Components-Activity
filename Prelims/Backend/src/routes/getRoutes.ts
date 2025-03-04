import { Router, Request, Response } from "express";

const router = Router();

router.get("/all", (req: Request, res: Response) => {
  const employees = [
    { id: 1, name: "Ann", role: "Manager", salary: 100000 },
    { id: 2, name: "John", role: "Vice Manager", salary: 80000 },
    { id: 3, name: "Cole", role: "Accountant", salary: 35000 },
    { id: 4, name: "Kram", role: "Data Analyst", salary: 30000 },
    { id: 5, name: "May", role: "Business Manager", salary: 25000 },
  ];

  res.json(employees);
});

export default router;
