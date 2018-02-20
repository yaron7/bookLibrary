import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './books/shared/book.model';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    let books: Book[] = [
      { id: 7, date: new Date(2007, 1, 1), imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/41FhogvNebL._SL500_SR107,160_.jpg', author: 'Kyle Simpson', title: "You Don't Know JS: Up & Going" },
      { id: 1, date: new Date(2002, 1, 1), imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/512KPmZIG7L._SL500_SR112,160_.jpg', author: 'Mark Myers', title: 'A Smarter Way to Learn JavaScript' },
      { id: 2, date: new Date(2017, 1, 1), imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/41e7ZgINY7L._SL500_SR129,160_.jpg', author: 'Jon Duckett', title: 'JavaScript and JQuery' },
      { id: 3, date: new Date(2003, 1, 1), imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL._SL500_SR123,160_.jpg', author: 'Douglas Crockford ', title: 'JavaScript: The Good Parts ' },
      { id: 4, date: new Date(2004, 1, 1), imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/71ricp4-cpL._SL500_UX300_PJku-sticker-v7,TopRight,0,-50_OU01__BG0,0,0,0_FMpng_SR100,160_.jpg', author: 'Krishna Rungta', title: 'Learn NodeJS in 1 Day' },
      { id: 5, date: new Date(2005, 1, 1), imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/91ceCcI4d%2BL._SL500_SR121,160_.jpg', author: 'Marijn Haverbeke', title: 'Eloquent JavaScript, 2nd Ed' },
      { id: 6, date: new Date(2006, 1, 1), imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81akeOop1vL._SL500_UX300_PJku-sticker-v7,TopRight,0,-50_OU01__BG0,0,0,0_FMpng_SR107,160_.jpg', author: 'Felix Alvaro', title: 'JAVASCRIPT: Easy JavaScript Programming For Beginners.' }
    ];
    return { books };
  }
}
