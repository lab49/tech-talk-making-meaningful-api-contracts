import { HttpResponse, RequestConfig, execute } from "@oats-ts/http";
import {
  createPathSerializer,
  joinUrl,
  path,
} from "@oats-ts/openapi-parameter-serialization";
import { AppError } from "../types/AppError";
import { Book } from "../types/Book";

export type UpdateBookResponse =
  | HttpResponse<Book, 200, "application/json">
  | HttpResponse<AppError, 400, "application/json">
  | HttpResponse<AppError, 500, "application/json">;

export type UpdateBookInput = {
  path: UpdateBookPathParameters;
  mimeType: "application/json";
  body: Book;
};

export const updateBookPathSerializer =
  createPathSerializer<UpdateBookPathParameters>("/books/{bookId}", {
    bookId: path.simple.primitive({}),
  });

export async function updateBook(
  input: UpdateBookInput,
  config: RequestConfig
): Promise<UpdateBookResponse> {
  return execute(
    {
      url: joinUrl(config.baseUrl, updateBookPathSerializer(input.path)),
      method: "patch",
      body: await config.serialize(input.mimeType, input.body),
      headers: { "content-type": input.mimeType },
    },
    config
  );
}

export type UpdateBookPathParameters = {
  bookId: string;
};
