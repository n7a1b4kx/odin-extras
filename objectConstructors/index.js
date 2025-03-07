// this is test exercise to create objects in javascript using object constructor

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log("The ${title} by ${author}, ${pages} pages, read ${read}.")
    };
}
