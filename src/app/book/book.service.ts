import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class BookService {
  url = 'http://localhost:8080/books/v1/book';

  constructor(private http: HttpClient) {
  }

  createBook(book): Observable<any> {
    return this.http.post(this.url, book);
  }

  getBooks(id): Observable<any> {

    return this.http.get(id ? this.url + '?id=' + id : this.url);
  }
  deleteBook(id): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
