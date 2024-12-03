const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Not read yet");
addBookToLibrary(theHobbit);

const ucazz = new Book("puzzo", "sporco", 295, "Not read yet");
addBookToLibrary(ucazz);

const bookContainer = document.querySelector("#books-container");

function displayLibrary(array) {
  array.forEach((element) => {
    const bookCard = document.createElement("div");
    const bookTitle = document.createElement("h2");
    const bookAuthor = document.createElement("h3");
    const bookPages = document.createElement("p");
    const bookRead = document.createElement("p");
    bookCard.classList.add("book");
    bookTitle.textContent = element.title;
    bookAuthor.textContent = element.author;
    bookPages.textContent = element.pages;
    bookRead.textContent = element.read;
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);
    bookContainer.appendChild(bookCard);
  });
}

displayLibrary(myLibrary);
