import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from './shared/book.service';
import { Book } from './shared/book.model';
import { ModalComponent } from '../shared/modal/modal.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  @ViewChild(ModalComponent)
  private modalComponent: ModalComponent;

  books: Book[];
  isDeletableMode: boolean;
  isChecked: boolean;

  constructor(
    private bookService: BookService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getBooks();
    this.subscribeDeletableMode();
    this.subscribeHamburgerBtn();
  }

  viewBook(book) {
    if (book) {
      this.modalComponent.open(book);
    }
  }

  deleteBook(book: Book, e) {
    e.cancelBubble = true;
    let bool = confirm("Are you sure you want do remove this book?");
    if (bool) {
      this.bookService.deleteBook(book).subscribe(
        () => {
          this.getBooks();
        }
      );
    }
  }

  editModalClosed() {
    this.getBooks();
  }

  deleteItems() {
    this.dataService.toggleDeletableMode(!this.isDeletableMode);
  }

  addItem() {
    this.modalComponent.open();
  }

  private subscribeDeletableMode() {
    this.dataService.isDeletable
      .subscribe(res => {
        this.isDeletableMode = res;
      });
  }

  private subscribeHamburgerBtn() {
    this.dataService.isChecked
      .subscribe(res => {
        this.isChecked = res;
      });
  }

  private getBooks() {
    this.bookService.getBooks().subscribe(
      res => {
        this.books = res;
      }
    );
  }

}
