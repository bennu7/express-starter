import { Request, Response } from "express";
import HelloServices from "@/services/hello.service";
import expressAsyncHandler from "express-async-handler";

class HelloController {
  private helloServices = new HelloServices();

  public index = expressAsyncHandler(async (req: Request, res: Response) => {
    const hello = await this.helloServices.getHello();
    res.status(200).json({ message: hello });
  });
}

export default HelloController;
