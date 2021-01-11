import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudtestService {

  heroesUrl="http://localhost:8080/api/hello";

  constructor( private http: HttpClient) { }

  
    /** GET heroes from the server */
    hello (): Observable<any> {
      return this.http.get<any>(this.heroesUrl)
        .pipe(
        );
    }

}
