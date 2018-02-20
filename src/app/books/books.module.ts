import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { BooksComponent } from './books.component';
import { BookService } from './shared/book.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: BooksComponent
      }]),
  ],
  declarations: [
    BooksComponent
  ],
  providers: [
    BookService
  ]
})
export class BooksModule { }
