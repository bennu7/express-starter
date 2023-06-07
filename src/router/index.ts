import { Router } from "express";
import { Routes } from "@/interfaces/routes.interface";

import HelloRoute from "@/api/hello/hello.route";

class Routers {
  public router: Router = Router();

  private routing: Routes[] = [new HelloRoute()];

  constructor() {
    this.initializedRoutes();
  }

  private initializedRoutes(): void {
    this.registerRoutesV1(this.routing);
  }

  // API versioning 1
  private registerRoutesV1(routes: Routes[]): void {
    routes.forEach((route: Routes) => {
      this.router.use("/api/v1", route.router);
    });
  }
}

export default Routers;
