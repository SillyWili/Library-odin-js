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

Book.prototype.changeRead = function () {
  if (this.read === "Read") {
    this.read = "Not read yet";
  } else {
    this.read = "Read";
  }
};

//* Creates books in the DOM inside their Container
function createBookElement(text, type, cls) {
  const element = document.createElement(type);
  element.textContent = text;
  if (cls === "read" || cls === "remove") {
    element.classList.add(cls);
  }
  return element;
}

function createBook(book, index) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book");
  bookCard.setAttribute("index", index);

  const elements = [
    createBookElement(book.title, "h2"),
    createBookElement(book.author, "h3"),
    createBookElement(book.pages, "p"),
    createBookElement(book.read, "button", "read"),
    createBookElement("remove", "button", "remove"),
  ];

  elements.forEach((element) => {
    bookCard.appendChild(element);
  });

  return bookCard;
}

function displayLibrary(array) {
  const bookContainer = document.querySelector("#books-container");
  bookContainer.innerHTML = "";
  array.forEach((book) => {
    const index = myLibrary.indexOf(book);
    const bookCard = createBook(book, index);

    bookContainer.appendChild(bookCard);
  });

  updateReadInsideDOM();
  removeBookInsideDOM();
}

//* Changes the status of read
function updateReadInsideDOM() {
  const readBtn = document.querySelectorAll("button.read");
  readBtn.forEach((button) => {
    button.addEventListener("click", (event) => {
      const card = event.target.closest(".book");
      const index = card.getAttribute("index");

      const book = myLibrary[index];
      book.changeRead();
      button.textContent = book.read;
    });
  });
}

//* Removes a book and re-assigns the indexes
function updateDOMIndices() {
  const bookCards = document.querySelectorAll(".book");
  bookCards.forEach((card, newIndex) => {
    card.setAttribute("index", newIndex);
  });
}

function removeBookInsideDOM() {
  const removeBtn = document.querySelectorAll("button.remove");
  removeBtn.forEach((button) => {
    button.addEventListener("click", (event) => {
      const card = event.target.closest(".book");
      const index = card.getAttribute("index");

      myLibrary.splice(index, 1);
      card.remove();

      updateDOMIndices();
    });
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
  //* Gives value to the checkbox
  if (form[3].checked === true) {
    form[3].value = "Read";
  } else {
    form[3].value = "Not read yet";
  }

  //* Creates new book with form values
  const book = new Book(
    form[0].value,
    form[1].value,
    form[2].value,
    form[3].value
  );
  addBookToLibrary(book);
  displayLibrary(myLibrary);
  form.reset();
}
