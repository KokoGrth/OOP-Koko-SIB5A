//ini adalah kelas
class Book {
    //ini adalah properties/atribut
    title: string;
    //ini adalah encapsulation, dimana properties stock ini hanya bisa diakses oleh class ini saja
    private stock: number;

    //constructor adalah parameter dari class
    constructor(title: string, stock:number) {
        this.title = title;
        this.stock = stock;
    }
    //method adalah funcion di dalam kelas, method hanya bisa di akses dari class ini
    borrow(qty: number): void {
        if (this.stock === 0) {
            throw new Error("Buku tidak tersedia")
        }
        this.stock = this.stock - qty ;
        console.log(`Buku ${this.title} berhasil dipinjam, sisa stock: ${this.stock}`)
    }

    return(qty: number): void {
        this.stock = this.stock + qty ;
        console.log(`Buku ${this.title} berhasil dikembalikan, sisa stock: ${this.stock}`)
    }
}

//new book adalah object
const book: Book =new Book("Laskar Pelangi", 5);
const book2: Book =new Book("sukses dalam 10 hari", 10)

book.borrow(2);
book.return(2);



