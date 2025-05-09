import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Ejercicio } from '../Modelo/ejercicio';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  private endpoint:string = environment.endPointDeportivoEjercicios;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    }),
  };


  Crearejercicio(data:any):Observable<Ejercicio>{
    return this.http
    .post<Ejercicio>(
     this.endpoint,JSON.stringify(data),
     this.httpOptions
    )
    .pipe(retry(1),catchError(this.errorHandl))
    }

    Getejercicio(id:number): Observable<Ejercicio>{
    return this.http
    .get<Ejercicio>(this.endpoint.concat("/")+id)
    .pipe(retry(1), catchError(this.errorHandl));
    }

    Getejercicios(): Observable<Ejercicio> {
      return this.http.get<Ejercicio>(this.endpoint)
      .pipe(retry(1), catchError(this.errorHandl));
    }

    Updateejercicio(data:Ejercicio):Observable<Ejercicio>{
      return this.http
      .put<Ejercicio>(this.endpoint.concat("/")+data.id_ejercicio, data)
      .pipe(
        retry(1),
      catchError(() => {
        return throwError(() => new Error(this.httpError()))
      })
      );
    }

    Deleteejercicio(id:number){
      return this.http
      .delete<Ejercicio>(this.endpoint.concat("/")+id,this.httpOptions)
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


