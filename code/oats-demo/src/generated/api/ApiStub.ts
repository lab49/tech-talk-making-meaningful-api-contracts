import { RequestConfig } from "@oats-ts/http";
import { CreateBookInput, CreateBookResponse } from "../operations/createBook";
import { GetBookInput, GetBookResponse } from "../operations/getBook";
import { GetBooksResponse } from "../operations/getBooks";
import { UpdateBookInput, UpdateBookResponse } from "../operations/updateBook";
import { Api } from "./Api";

export class ApiStub implements Api {
  public async createBook(
    _input: CreateBookInput,
    _config: Partial<RequestConfig> = {}
  ): Promise<CreateBookResponse> {
    throw new Error('"createBook" is not implemented');
  }
  public async getBook(
    _input: GetBookInput,
    _config: Partial<RequestConfig> = {}
  ): Promise<GetBookResponse> {
    throw new Error('"getBook" is not implemented');
  }
  public async getBooks(
    _config: Partial<RequestConfig> = {}
  ): Promise<GetBooksResponse> {
    throw new Error('"getBooks" is not implemented');
  }
  public async updateBook(
    _input: UpdateBookInput,
    _config: Partial<RequestConfig> = {}
  ): Promise<UpdateBookResponse> {
    throw new Error('"updateBook" is not implemented');
  }
}
