import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Validators, FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Book } from '../../books/shared/book.model';
import { BookService } from '../../books/shared/book.service';
import { Router } from '@angular/router';
import { debug } from 'util';

const defaultImage = 'https://cdn1.designhill.com/assets/dh/images/category_images/book_cover_design.svg';

@Component({
  selector: 'modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./model-content.component.scss']
})
export class ModalContent implements OnInit {

  @Input() book: Book;
  fg: FormGroup;
  isEditableMode = false;
  isNewItem: boolean;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.isNewItem) {
      this.createViewEditForm();
    }
    else {
      this.creatAddItemForm();
      this.isEditableMode = true;
    }
  }

  editBook() {
    this.fg.enable();
    this.isEditableMode = !this.isEditableMode;
  }

  doneEdit() {

    if (this.fg.valid) {

      let book = Object.assign(this.fg.value, {});
      this.setFullDate(book);

      //if image input empty set default image
      let imgControl = this.fg.get('imgUrl');
      if (imgControl.value === '') {
        book.imgUrl = defaultImage;
      }
      if (this.isNewItem) {
        //set item id
        book.id = Math.random();
        this.bookService.addBook(book).subscribe(
          () => {
            this.activeModal.dismiss();
          }
        );
      }
      else {
        this.bookService.updateBook(book).subscribe();
      }
    }
    this.fg.disable();
    this.isEditableMode = !this.isEditableMode;

  }

  private setFullDate(book: Book) {
    let isoShortDate = book.date;
    book.date = new Date(isoShortDate);
  }

  private createViewEditForm() {
    this.fg = this.fb.group({
      id: this.book.id,
      title: [{ value: this.book.title, disabled: true }, Validators.required],
      author: [{ value: this.book.author, disabled: true }, Validators.required],
      date: [{ value: this.getIsoDate(this.book.date), disabled: true }, Validators.required],
      imgUrl: [{ value: this.book.imgUrl, disabled: true }]
    });
  }

  private creatAddItemForm() {
    this.fg = this.fb.group({
      id: '',
      title: ['', Validators.required],
      author: ['', Validators.required],
      date: ['', Validators.required],
      imgUrl: ['']
    });
  }

  private getIsoDate(date: Date): string {
    return new Date(date).toISOString().slice(0, 10);
  }

}

@Component({
  selector: 'modal-component',
  template: ''
})
export class ModalComponent {

  @Output() modalClose: EventEmitter<any> = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  open(book?: Book) {
    const modalRef = this.modalService.open(ModalContent);
    if (book) {
      modalRef.componentInstance.book = book;
      modalRef.componentInstance.isNewItem = false;
    }
    else {
      modalRef.componentInstance.isNewItem = true;
    }

    //modal closed
    modalRef.result.then(
      (result) => {
        this.modalClose.emit();
      },
      () => {
        this.modalClose.emit();
      }
    );
  }

}
