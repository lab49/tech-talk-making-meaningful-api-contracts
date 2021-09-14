import { HttpResponse, RequestConfig, execute } from "@oats-ts/http";
import {
  createPathSerializer,
  joinUrl,
  path,
} from "@oats-ts/openapi-parameter-serialization";
import { AppError } from "../types/AppError";
import { Book } from "../types/Book";

export type GetBookResponse =
  | HttpResponse<Book, 200, "application/json">
  | HttpResponse<AppError, 400, "application/json">
  | HttpResponse<AppError, 500, "application/json">;

export type GetBookInput = {
  path: GetBookPathParameters;
};

export const getBookPathSerializer =
  createPathSerializer<GetBookPathParameters>("/books/{bookId}", {
    bookId: path.simple.primitive({}),
  });

export async function getBook(
  input: GetBookInput,
  config: RequestConfig
): Promise<GetBookResponse> {
  return execute(
    {
      url: joinUrl(config.baseUrl, getBookPathSerializer(input.path)),
      method: "get",
    },
    config
  );
}

export type GetBookPathParameters = {
  bookId: string;
};
