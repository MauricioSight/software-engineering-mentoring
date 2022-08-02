class Book {
    constructor({ title, desciption, author }) {
      this.id = `${Math.random()}`;
      this.title = title;
      this.desciption = desciption;
      this.author = author;
    }
  
    updateBookInfo(bookInfo) {
      if (bookInfo.title) this.title = bookInfo.title;
      if (bookInfo.desciption) this.desciption = bookInfo.desciption;
      if (bookInfo.author) this.author = bookInfo.author;
    }
  
    toString() {
      return `Livro: ${this.title}; Autor: ${this.author}; Descrição: ${this.desciption}`;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(bookInfo) {
      const book = new Book(bookInfo);
      this.books.push(book);
  
      return book;
    }
  
    getBooks() {
      return this.books;
    }
  
    removeBook(id) {
      this.books = this.books.filter((b) => b.id !== id);
    }
  
    getBookById(id) {
      return this.books.find((b) => b.id === id);
    }
  
    updateBookById(id, bookInfo) {
      const book = this.books.find((b) => b.id === id);
      book.updateBookInfo(bookInfo);
      return book;
    }
  }
  
  module.exports = { Library, Book };
  