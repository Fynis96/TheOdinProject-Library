class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class UI {
    addBookToList(book) {
        const bookList = document.getElementById("book-list");
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = `
        <div>
          <h3>${book.title}</h3>
          <p>Author: ${book.author}</p>
          <p>Pages: ${book.pages}</p>
          <p>Read: <span class="read-status">${book.read ? "Yes" : "No"}</span></p>
        </div>
        <button class="remove-button">Remove</button>
      `;
        bookList.appendChild(bookDiv);
    }

    clearFields() {
        const inputs = document.querySelectorAll("#book-form input");
        inputs.forEach(input => (input.value = ""));
    }

    toggleReadStatus(target) {
        if (target.classList.contains("read-status")) {
            const currentStatus = target.textContent;
            target.textContent = currentStatus === "Yes" ? "No" : "Yes";
        }
    }

    removeBookFromList(target) {
        if (target.classList.contains("remove-button")) {
            target.parentElement.remove();
        }
    }
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

document.getElementById("book-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    const book = new Book(title, author, pages, read);
    const ui = new UI();

    ui.addBookToList(book);
    ui.clearFields();
});

document.getElementById("book-list").addEventListener("click", function (e) {
    const ui = new UI();
    ui.removeBookFromList(e.target);
    ui.toggleReadStatus(e.target);
});

document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);
