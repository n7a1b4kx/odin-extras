// this is test exercise to create objects in javascript using object constructor

// object constructor
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(`${title} by ${author}, ${pages} pages, ${read}.`)
    };
}

// creating a new object TheHobbit book
const theHobbit = new book("The Hobbit", "J.R.R Tolkien", 295, "Not read yet");
theHobbit.info();