import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Dia } from '../Modelo/dia';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DiaService {

  private endpoint:string = environment.endPointDeportivodia;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    }),
  };


  Createdia(data:any):Observable<Dia>{
    return this.http
    .post<Dia>(
     this.endpoint,JSON.stringify(data),
     this.httpOptions
    )
    .pipe(retry(1),catchError(this.errorHandl))
    }

    Getdia(id:number): Observable<Dia>{
    return this.http
    .get<Dia>(this.endpoint.concat("/")+id)
    .pipe(retry(1), catchError(this.errorHandl));
    }

    Getdias(): Observable<Dia> {
      return this.http.get<Dia>(this.endpoint)
      .pipe(retry(1), catchError(this.errorHandl));
    }

    Updatedia(data:Dia):Observable<Dia>{
      return this.http
      .put<Dia>(this.endpoint.concat("/")+data.id_dia, data)
      .pipe(
        retry(1),
      catchError(() => {
        return throwError(() => new Error(this.httpError()))
      })
      );
    }

    Deletedia(id:number){
      return this.http
      .delete<Dia>(this.endpoint.concat("/")+id,this.httpOptions)
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

