import cors from "cors";
import cookieParser from "cookie-parser";
import express, { Application, NextFunction, Request, Response } from "express";
import globalErrorhandler from "./app/middlewares/globalErrorHandler";
import httpStatus from "http-status";
import router from "./app/routes";
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/uploads", express.static("uploads"));
app.use("/api/v1", router);

app.use(globalErrorhandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Founded",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Route Not Found",
      },
    ],
  });
  next();
});

export default app;
