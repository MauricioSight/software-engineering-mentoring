const { Library } = require("./index");

const bookParams = {
  title: "Clean Architecture",
  author: "Robert Martin",
  desciption:
    "Building upon the success of best-sellers The Clean Coder and Clean Code, legendary software craftsman Robert C. Uncle Bob Martin shows how to bring greater professionalism and discipline to application architecture and design. As with his other books, Martin's Clean Architecture doesn't merely present multiple choices and options, and say use your best judgment: it tells you what choices to make, and why those choices are critical to your success.",
};

const testAddBook = (bookParams) => {
  const tLibrary = new Library();
  console.log("Testing add book in library...");
  const lBook = tLibrary.addBook({ ...bookParams });
  console.log("Testing get book by id...");
  const book = tLibrary.getBookById(lBook.id);
  if (book && book.id === lBook.id) {
    console.log("Book finded!");
    console.log("Book added!");
  }
};

const testGetBooks = () => {
    const tLibrary = new Library();
    console.log("Testing get books in library...");
    tLibrary.addBook({ ...bookParams });
    tLibrary.addBook({ ...bookParams });
    const books = tLibrary.getBooks();
    if (books.length === 2) {
        console.log("Books finded!");
    }
}

const testRemoveBook = () => {
    const tLibrary = new Library();
    console.log("Testing remove book in library...");
    const lBook = tLibrary.addBook({ ...bookParams });
    tLibrary.removeBook(lBook.id);
    const books = tLibrary.getBooks();
    if (books.length === 0) {
        console.log("Book removed!");
    }
}

const updateBook = () => {
    const tLibrary = new Library();
    console.log("Testing update book in library...");
    const lBook = tLibrary.addBook({ ...bookParams });
    tLibrary.updateBookById(lBook.id, { title: "Clean Architecture 2" });
    const book = tLibrary.getBookById(lBook.id);
    if (book.title === "Clean Architecture 2") {
        console.log("Book updated!");
    }
}


console.log("Testing Library:");
testAddBook();
testGetBooks();
testRemoveBook();
updateBook();
console.log("Test Library finished!");