import { RequestConfig } from "@oats-ts/http";
import {
  CreateBookInput,
  CreateBookResponse,
  createBook,
} from "../operations/createBook";
import { GetBookInput, GetBookResponse, getBook } from "../operations/getBook";
import { GetBooksResponse, getBooks } from "../operations/getBooks";
import {
  UpdateBookInput,
  UpdateBookResponse,
  updateBook,
} from "../operations/updateBook";
import { Api } from "./Api";

export class ApiImpl implements Api {
  protected readonly config: RequestConfig;
  public constructor(config: RequestConfig) {
    this.config = config;
  }
  public async createBook(
    input: CreateBookInput,
    config: Partial<RequestConfig> = {}
  ): Promise<CreateBookResponse> {
    return createBook(input, { ...this.config, ...config });
  }
  public async getBook(
    input: GetBookInput,
    config: Partial<RequestConfig> = {}
  ): Promise<GetBookResponse> {
    return getBook(input, { ...this.config, ...config });
  }
  public async getBooks(
    config: Partial<RequestConfig> = {}
  ): Promise<GetBooksResponse> {
    return getBooks({ ...this.config, ...config });
  }
  public async updateBook(
    input: UpdateBookInput,
    config: Partial<RequestConfig> = {}
  ): Promise<UpdateBookResponse> {
    return updateBook(input, { ...this.config, ...config });
  }
}
