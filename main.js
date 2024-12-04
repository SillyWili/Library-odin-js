const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Not read yet");
addBookToLibrary(theHobbit);

const ucazz = new Book("puzzo", "sporco", 295, "Not read yet");
addBookToLibrary(ucazz);

function createBookElement(text, type) {
  const element = document.createElement(type);
  element.textContent = text;
  return element;
}

function createBook(book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book");

  const elements = [
    createBookElement(book.title, "h2"),
    createBookElement(book.author, "h3"),
    createBookElement(book.pages, "p"),
    createBookElement(book.read, "p"),
  ];

  elements.forEach((element) => {
    bookCard.appendChild(element);
  });

  return bookCard;
}

function displayLibrary(array) {
  const bookContainer = document.querySelector("#books-container");
  if (bookContainer.innerHTML !== "") {
    bookContainer.innerHTML = "";
  }
  array.forEach((book) => {
    const bookCard = createBook(book);
    bookContainer.appendChild(bookCard);
  });
}

//* dialog action

const closeBtn = document.querySelector("#closeBtn");
const confirmBtn = document.querySelector("#confirmBtn");
const addBtn = document.querySelector("#addBook");
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");

addBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  createBookForm(event.target);
  dialog.close();
});

function createBookForm(form) {
  if (form[3].checked === true) {
    form[3].value = "Read";
  } else {
    form[3].value = "Not read yet";
  }

  const book = new Book(
    form[0].value,
    form[1].value,
    form[2].value,
    form[3].value
  );
  addBookToLibrary(book);
  displayLibrary(myLibrary);
}
