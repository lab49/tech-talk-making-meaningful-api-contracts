import { AppErrorCode } from "./AppErrorCode";

export type AppError = {
  code: AppErrorCode;
  message: string;
};
