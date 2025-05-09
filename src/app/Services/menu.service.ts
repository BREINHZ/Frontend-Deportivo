import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Menu } from '../Modelo/menu';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private endpoint:string = environment.endPointDeportivoMenus;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    }),
  };


  Createmenu(data:any):Observable<Menu>{
    return this.http
    .post<Menu>(
     this.endpoint,JSON.stringify(data),
     this.httpOptions
    )
    .pipe(retry(1),catchError(this.errorHandl))
    }

    Getmenu(id:number): Observable<Menu>{
    return this.http
    .get<Menu>(this.endpoint.concat("/")+id)
    .pipe(retry(1), catchError(this.errorHandl));
    }

    Getmenus(): Observable<Menu> {
      return this.http.get<Menu>(this.endpoint)
      .pipe(retry(1), catchError(this.errorHandl));
    }

    Updatemenu(data:Menu):Observable<Menu>{
      return this.http
      .put<Menu>(this.endpoint.concat("/")+data.id_menu, data)
      .pipe(
        retry(1),
      catchError(() => {
        return throwError(() => new Error(this.httpError()))
      })
      );
    }

    Deletemenu(id:number){
      return this.http
      .delete<Menu>(this.endpoint.concat("/")+id,this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
    }

  errorHandl(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

  httpError(){
    return "Se ha producido un error en la aplicación consulte al administrador"
  }
}

