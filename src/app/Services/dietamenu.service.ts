import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Dieta_menu } from '../Modelo/dieta_menu';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DietamenuService {

  private endpoint:string = environment.endPointDeportivoDietaMenu;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    }),
  };


  Creardietamenu(data:any):Observable<Dieta_menu>{
    return this.http
    .post<Dieta_menu>(
     this.endpoint,JSON.stringify(data),
     this.httpOptions
    )
    .pipe(retry(1),catchError(this.errorHandl))
    }

    Getdietamenu(id:number): Observable<Dieta_menu>{
    return this.http
    .get<Dieta_menu>(this.endpoint.concat("/")+id)
    .pipe(retry(1), catchError(this.errorHandl));
    }

    Getdietasmenus(): Observable<Dieta_menu> {
      return this.http.get<Dieta_menu>(this.endpoint)
      .pipe(retry(1), catchError(this.errorHandl));
    }

    Updatedietamenu(data:Dieta_menu):Observable<Dieta_menu>{
      return this.http
      .put<Dieta_menu>(this.endpoint.concat("/")+data.id, data)
      .pipe(
        retry(1),
      catchError(() => {
        return throwError(() => new Error(this.httpError()))
      })
      );
    }

    Deletedietamenu(id:number){
      return this.http
      .delete<Dieta_menu>(this.endpoint.concat("/")+id,this.httpOptions)
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
