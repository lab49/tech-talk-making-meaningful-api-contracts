import { BookType } from "./BookType";

export type Book = {
  author: string;
  bookType: BookType;
  description?: string;
  id?: string;
  price: number;
  title: string;
};
