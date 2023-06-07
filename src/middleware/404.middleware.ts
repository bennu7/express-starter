import { Request, Response, NextFunction } from "express";

const NotFoundMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(404).json({
      sttus_code: 404,
      message: "Not Found Route",
    });
  } catch (err) {
    next(err);
  }
};

export default NotFoundMiddleware;
