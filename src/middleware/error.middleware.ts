import { Request, Response, NextFunction } from "express";

interface IError {
  code: number;
  status: string;
  message: string;
  name?: string;
  original?: string;
  parent?: IErrorParent;
}
interface IErrorParent {
  code: string;
  detail: string;
}

const ErrorMiddleware = async (
  err: IError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("🪓🪓  ERROR.PARENT ->", err.parent + " <- 🪓🪓");
    console.log("😡😡 error :", err);
  } catch (err) {
    next(err);
  }
};

export default ErrorMiddleware;
