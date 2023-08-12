import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";

import HelloServices from "@/services/hello.service";

class HelloController {
  private helloServices = new HelloServices();

  public index = expressAsyncHandler(async (req: Request, res: Response) => {
    const hello = await this.helloServices.getHello();
    res.status(200).json({ message: hello });
  });
}

export default HelloController;
