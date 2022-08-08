const { Book } = require("./index");

const bookParams = {
  title: "Clean Architecture",
  author: "Robert Martin",
  desciption:
    "Building upon the success of best-sellers The Clean Coder and Clean Code, legendary software craftsman Robert C. Uncle Bob Martin shows how to bring greater professionalism and discipline to application architecture and design. As with his other books, Martin's Clean Architecture doesn't merely present multiple choices and options, and say use your best judgment: it tells you what choices to make, and why those choices are critical to your success.",
};

const tBook = new Book({
  title: bookParams.title,
  author: bookParams.author,
  desciption: bookParams.desciption,
});

const getIsCorrectParams = (book, expected) => {
  if (book.title !== expected.title)
    return "Error: params title not corresponds";
  if (book.author !== expected.author)
    return "Error: params author not corresponds";
  if (book.desciption !== expected.desciption)
    return "Error: params description not corresponds";
  return "Test passed!";
};

console.log("Test Book creator:");
console.log("Run getIsCorrectParams");
console.log(getIsCorrectParams(tBook, bookParams));
