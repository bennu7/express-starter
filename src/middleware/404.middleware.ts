import { Request, Response, NextFunction } from "express";

const NotFoundMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(404).render("404", { title: "404" });
  } catch (err) {
    next(err);
  }
};

export default NotFoundMiddleware;
