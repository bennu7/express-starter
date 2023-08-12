import { Router, Request, Response, NextFunction } from "express";

import { Routes } from "@/interfaces/routes.interface";

class ViewRouter implements Routes {
  public router: Router = Router();

  constructor() {
    this.router.get("/", this.index);
  }
  private index(req: Request, res: Response, next: NextFunction) {
    res.render("index", {
      title: "Express + Typescript",
      subtitle: "Testing from subtitle",
    });
  }
}

export default ViewRouter;
