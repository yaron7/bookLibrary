import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Book } from './book.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BookService {

  private baseUrl = 'api/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl).pipe(
      catchError(this.handleError<Book[]>('getBooks'))
    );;
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.baseUrl, book, httpOptions).pipe(
      catchError(this.handleError<Book>('addBook'))
    );
  }

  deleteBook(book: Book | number): Observable<Book> {
    const id = typeof book === 'number' ? book : book.id;
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Book>(url, httpOptions).pipe(
      catchError(this.handleError<Book>('deleteBook'))
    );
  }

  updateBook(book: Book): Observable<any> {
    return this.http.put(this.baseUrl, book, httpOptions).pipe(
      catchError(this.handleError<any>('updateBook'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
