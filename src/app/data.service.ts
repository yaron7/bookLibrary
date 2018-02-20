import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Book } from './books/shared/book.model';

@Injectable()
export class DataService {

  private checkedSource = new BehaviorSubject<boolean>(false);
  private deleteSource = new BehaviorSubject<boolean>(false);
  isDeletable = this.deleteSource.asObservable();
  isChecked = this.checkedSource.asObservable();

  constructor() { }

  toggleDeletableMode(isDeletable: boolean) {
    this.deleteSource.next(isDeletable);
  }

  toggleHamburgerBtn(isChecked: boolean) {
    this.checkedSource.next(isChecked);
  }
}
