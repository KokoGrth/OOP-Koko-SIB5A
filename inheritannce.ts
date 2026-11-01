// class induk: atribut dan method yang dipakai bersama

class LibraryItem {
  constructor(
    public title: string, 
    protected loanDays: number) {}   // protected: bisa diakses turunan
    
  getInfo(): string { 
    return `${this.title}, dipinjam ${this.loanDays} hari`; }
}
// Book mewarisi semua isi LibraryItem

class Books extends LibraryItem {
  constructor(title: string, public author: string) {   // author: atribut khusus Book
    super(title, 7);   // panggil constructor induk, lama pinjam 7 hari

  }

}

// Magazine juga turunan LibraryItem

class Magazine extends LibraryItem {

  constructor(title: string) { super(title, 3); }   // lama pinjam 3 hari

}

const books = new Books("Laskar pelangi", "travis scott")

console.log(books.getInfo())