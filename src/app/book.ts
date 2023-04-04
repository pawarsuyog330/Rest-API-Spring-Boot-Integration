export class Book {

    bookId:number | undefined;
    bookName:string | undefined;
    bookPrice:number | undefined;

    constructor(bookId:number, bookName:string, bookPrice:number){
        this.bookId = bookId;
        this.bookName = bookName;
        this.bookPrice = bookPrice;
    }
}