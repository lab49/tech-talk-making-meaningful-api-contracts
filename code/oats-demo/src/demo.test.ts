import { RequestConfig } from "@oats-ts/http";
import {
  body,
  headers,
  mimeType,
  noop,
  request,
  serialize,
  statusCode,
} from "@oats-ts/http/lib/node-fetch";
import { getBooks } from "./generated/operations/getBooks";
import { ApiImpl } from "./generated/api/ApiImpl";
import { Api } from "./generated/api/Api";

describe("Playground for oats demo", () => {
  // Common request configuration
  const config: RequestConfig = {
    // Go to the oats-demo-server folder and run npm install & npm start to get a demo server running
    baseUrl: "http://localhost:3000",
    body,
    headers,
    mimeType,
    serialize,
    statusCode,
    request: request(),
    validate: noop,
  };

  it("should request Books using operation", async () => {
    // This demonstrates using operation functions directly
    const booksResponse = await getBooks(config);
    // Status code discriminates the response, check schema.json if not clear why
    if (booksResponse.statusCode === 200) {
      // On 200 we got a proper response, which is now typesafe to use
      const books = booksResponse.body;
      console.log(books);
    } else {
      // On 400/500 we get an error response, which is also typesafe to use here
      fail(booksResponse.body.message);
    }
  });
  it("should request Books using API", async () => {
    // This demonstrates how to use the generated Api. It's still purely frontend,
    // But is a collection of all the operations, and dependencies can be configured once.
    const api: Api = new ApiImpl(config);

    // A bit more complex example
    // 1. Retrieve all the books
    // 2. Update a single book
    // 3. Retrieve that book again, to see if updates worked

    // Step 1.
    const booksResponse = await api.getBooks();
    if (booksResponse.statusCode !== 200) {
      fail(booksResponse.body.message);
    }
    // Step 2.
    const [firstBook] = booksResponse.body;
    const updateResponse = await api.updateBook({
      path: { bookId: firstBook.id },
      body: {
        ...firstBook,
        description: "Now we have updated this book :)",
      },
      mimeType: "application/json",
    });
    if (updateResponse.statusCode !== 200) {
      fail(updateResponse.body.message);
    }
    // Step 3.
    const bookResponse = await api.getBook({
      path: { bookId: firstBook.id },
    });
    if (bookResponse.statusCode !== 200) {
      fail(bookResponse.body.message);
    }
    // Should print "Now we have updated this book :)"
    console.log(bookResponse.body.description);
  });
});
