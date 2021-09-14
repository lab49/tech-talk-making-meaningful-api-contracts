import { HttpResponse, RequestConfig, execute } from "@oats-ts/http";
import { joinUrl } from "@oats-ts/openapi-parameter-serialization";
import { AppError } from "../types/AppError";
import { Book } from "../types/Book";

export type CreateBookResponse =
  | HttpResponse<Book, 201, "application/json">
  | HttpResponse<AppError, 400, "application/json">
  | HttpResponse<AppError, 500, "application/json">;

export type CreateBookInput = {
  mimeType: "application/json";
  body: Book;
};

export async function createBook(
  input: CreateBookInput,
  config: RequestConfig
): Promise<CreateBookResponse> {
  return execute(
    {
      url: joinUrl(config.baseUrl, "/books"),
      method: "post",
      body: await config.serialize(input.mimeType, input.body),
      headers: { "content-type": input.mimeType },
    },
    config
  );
}
