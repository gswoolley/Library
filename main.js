let myLibrary = [];
const Library = document.getElementById("Library");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
  };
}

const theHobbit = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  "295",
  "not read yet"
);

const mazeRunner = new Book(
  "The Maze Runner",
  "Idk idk",
  "295",
  "not read yet"
);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

//Code to display library

function displayLibrary() {
  Library.innerHTML = "";
  myLibrary.forEach((element, index) => {
    book = document.createElement("div");
    book.className = "book shadow p-3 mb-5 bg-white rounded";
    title = document.createElement("div");
    title.innerText = element.title;
    author = document.createElement("div");
    author.innerText = element.author;
    pages = document.createElement("div");
    pages.innerText = element.pages;
    read = document.createElement("div");
    read.innerText = element.read;
    book.setAttribute("data-index", index);
    deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-primary del";
    deleteBtn.innerText = "Delete Book";
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(read);
    book.appendChild(deleteBtn);
    Library.appendChild(book);
  });
  const deleteButtons = document.querySelectorAll(".del");
  console.log(deleteButtons);
  deleteButtons.forEach((button) => {
    button.addEventListener("click", removeMe);
  });
}

//Code handling the Form

const form = document.getElementById("addbook");
const radioButtons = document.querySelectorAll(
  'input[name="flexRadioDefault"]'
);

form.addEventListener("submit", (event) => {
  // handle the form data
  title = form.elements["book-title"].value;
  author = form.elements["book-author"].value;
  pages = form.elements["book-pages"].value;
  let isRead;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      isRead = radioButton.value;
      break;
    }
  }
  console.log(isRead);
  console.log(author);
  console.log(title);
  console.log(pages);
  const newBook = new Book(title, author, pages, isRead);
  console.log(newBook);
  addBookToLibrary(newBook);
  $("#exampleModal").modal("hide");
  displayLibrary();
  form.reset();
  event.preventDefault();
});

function removeMe() {
  book = this.closest("div");
  console.log(book);
  libIndex = book.dataset.index;
  //myLibrary.splice(libIndex, 1);
  myLibrary.pop(libIndex);
  this.closest("div").remove();
  console.log(myLibrary);
}

addBookToLibrary(theHobbit);
addBookToLibrary(mazeRunner);
displayLibrary();

//console.log(theHobbit.info());
