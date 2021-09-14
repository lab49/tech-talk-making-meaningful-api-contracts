import { HttpResponse, RequestConfig, execute } from "@oats-ts/http";
import { joinUrl } from "@oats-ts/openapi-parameter-serialization";
import { AppError } from "../types/AppError";
import { Book } from "../types/Book";

export type GetBooksResponse =
  | HttpResponse<Book[], 200, "application/json">
  | HttpResponse<AppError, 400, "application/json">
  | HttpResponse<AppError, 500, "application/json">;

export async function getBooks(
  config: RequestConfig
): Promise<GetBooksResponse> {
  return execute(
    { url: joinUrl(config.baseUrl, "/books"), method: "get" },
    config
  );
}
