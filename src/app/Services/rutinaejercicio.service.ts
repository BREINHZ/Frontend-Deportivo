import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Rutina_ejercicio } from '../Modelo/rutina_ejercicio';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RutinaejercicioService {

  private endpoint:string = environment.endPointDeportivorutinaejercicio;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    }),
  };

  Createrutinaejercicio(data:any):Observable<Rutina_ejercicio>{
    return this.http
    .post<Rutina_ejercicio>(
     this.endpoint,JSON.stringify(data),
     this.httpOptions
    )
    .pipe(retry(1),catchError(this.errorHandl))
    }

    Getrutinaejercicio(id:number): Observable<Rutina_ejercicio>{
    return this.http
    .get<Rutina_ejercicio>(this.endpoint.concat("/")+id)
    .pipe(retry(1), catchError(this.errorHandl));
    }

    Getrutinasejercicios(): Observable<Rutina_ejercicio> {
      return this.http.get<Rutina_ejercicio>(this.endpoint)
      .pipe(retry(1), catchError(this.errorHandl));
    }

    Updaterutinaejercicio(data:Rutina_ejercicio):Observable<Rutina_ejercicio>{
      return this.http
      .put<Rutina_ejercicio>(this.endpoint.concat("/")+data.id, data)
      .pipe(
        retry(1),
      catchError(() => {
        return throwError(() => new Error(this.httpError()))
      })
      );
    }

    Deleterutinaejercicio(id:number){
      return this.http
      .delete<Rutina_ejercicio>(this.endpoint.concat("/")+id,this.httpOptions)
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
