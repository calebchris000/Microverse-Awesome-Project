const bookCollection = document.querySelector(".bookshelf");
const addButton = document.querySelector(".submit");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
let contact = document.querySelector(".contact");

class BookCollection {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.books = [];
  }

  addBook(item) {
    this.books.push(item);
  }

  getTitle() {
    return this.title.value;
  }

  getAuthor() {
    return this.author.value;
  }
}

const newBook = new BookCollection(titleInput, authorInput);

function saveData() {
  const stringify = JSON.stringify(newBook.books);
  localStorage.setItem("data", stringify);
}

addButton.addEventListener("click", () => {
  const titletext = newBook.getTitle();
  const authorText = newBook.getAuthor();

  if (titletext === "" || authorText === "") {
    return;
  }

  newBook.addBook({ title: titletext, author: authorText });
  let items = "";

  newBook.books.forEach((item, index) => {
    items += `<div class="coll${index} collection">
    <div class='bookinfo'>
    <p class='title'>"${item.title}" by</p>
    <p class='author'>${item.author}</p>
    </div>
    <button class='remove' onclick="removeItem(${index})">remove</button>
    </div>`;
  });

  bookCollection.innerHTML = items;
  saveData();
  titleInput.value = "";
  authorInput.value = "";
});

function removeItem(i) {
  newBook.books.splice(i, 1);

  let items = "";
  newBook.books.forEach((item, index) => {
    items += `<div class="coll${index} collection">
 <div class='bookinfo'>
 <p class='title'>${item.title} by</p>
 <p class='author'>${item.author}</p>
 </div>
 <button class='remove' onclick="removeItem(${index})">remove</button>
 </div>`;
  });

  bookCollection.innerHTML = "";
  bookCollection.innerHTML = items;

  let stringify = JSON.stringify(newBook.books);
  if (stringify === "[]") {
    stringify = "";
  }

  localStorage.setItem("data", stringify);
}

contact.innerHTML = ` 
<h2>Contact information</h2>
<p>
    Do you have any questions or you just want to 
    say "Hello"?<br>You can reach out to us!
</p>

<ul class="contact-info">
    <li>Our email: johndoe1987@gmail.com</li>
    <li>Our phone number: (425) 555-0198</li>
    <li>Our address: 742 Maple Street, Springfield</li>
</ul>`;

removeItem();
