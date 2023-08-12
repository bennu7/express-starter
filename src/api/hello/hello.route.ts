import { Router } from "express";

import { Routes } from "@/interfaces/routes.interface";
import HelloController from "./hello.controller";

class HelloRoute implements Routes {
  path?: string | undefined = "/hello";
  router: Router = Router();
  private helloController = new HelloController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.helloController.index);
  }
}

export default HelloRoute;
