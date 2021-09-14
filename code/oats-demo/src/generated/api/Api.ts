import { RequestConfig } from "@oats-ts/http";
import { CreateBookInput, CreateBookResponse } from "../operations/createBook";
import { GetBookInput, GetBookResponse } from "../operations/getBook";
import { GetBooksResponse } from "../operations/getBooks";
import { UpdateBookInput, UpdateBookResponse } from "../operations/updateBook";

export type Api = {
  createBook(
    input: CreateBookInput,
    config?: Partial<RequestConfig>
  ): Promise<CreateBookResponse>;
  getBook(
    input: GetBookInput,
    config?: Partial<RequestConfig>
  ): Promise<GetBookResponse>;
  getBooks(config?: Partial<RequestConfig>): Promise<GetBooksResponse>;
  updateBook(
    input: UpdateBookInput,
    config?: Partial<RequestConfig>
  ): Promise<UpdateBookResponse>;
};
