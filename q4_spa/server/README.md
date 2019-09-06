# Server

```bash
yarn install
```

or

```bash
npm install
```

Run the server using:

```bash
yarn server
```

or

```bash
npm run server
```

The server should be running on port `3000`.

## Available routes

### http://localhost:3000/books

Returns a list of books, with their info.

### http://localhost:3000/books/SLUG

Returns the book information for the given SLUG (404 otherwise).
