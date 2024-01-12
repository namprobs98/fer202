class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class Library {
    constructor() {
        this.books = []; //Mảng để lưu trữ các giá trị book
    }

    addBook(book) {
        this.books.push(book);
    }

    displayBooks() {
        console.log("Books in the library:");
        this.books.forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.year}`);
        });
    }

    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
    }
    findBook(title){
        return this.books.find(book => book.title = title)
    }
}

const myLibrary = new Library();

const book1 = new Book("HarryPotter và Hoàng Tử Lai", "J.K.Rolling", "1992");
const book2 = new Book("Chúa Nhẫn", "J.R.R.Tolkien", "1937");
const book3 = new Book("The Hobbit", "J.R.R.Tolkien", "1941");

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.displayBooks();
console.log("________________");

myLibrary.removeBook("Chúa Nhẫn");
myLibrary.displayBooks();
console.log("________________")

const foundBook = myLibrary.findBook("The Hobbit");
if(foundBook != null){
    console.log("Found Book:\n");
    console.log(foundBook);
    // console.log(`Title: ${foundBook.title}, Author: ${foundBook.author}, Year: ${foundBook.year}`);
}
else{
    console.log("Not founnd");
}

