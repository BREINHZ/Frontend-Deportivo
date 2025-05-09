import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Rutina } from '../Modelo/rutina';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RutinaService {

  private endpoint:string = environment.endPointDeportivorutina;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    }),
  };


  Createrutina(data:any):Observable<Rutina>{
    return this.http
    .post<Rutina>(
     this.endpoint,JSON.stringify(data),
     this.httpOptions
    )
    .pipe(retry(1),catchError(this.errorHandl))
    }

    Getrutina(id:number): Observable<Rutina>{
    return this.http
    .get<Rutina>(this.endpoint.concat("/")+id)
    .pipe(retry(1), catchError(this.errorHandl));
    }

    Getrutinas(): Observable<Rutina> {
      return this.http.get<Rutina>(this.endpoint)
      .pipe(retry(1), catchError(this.errorHandl));
    }

    Updaterutina(data:Rutina):Observable<Rutina>{
      return this.http
      .put<Rutina>(this.endpoint.concat("/")+data.id_rutina, data)
      .pipe(
        retry(1),
      catchError(() => {
        return throwError(() => new Error(this.httpError()))
      })
      );
    }

    Deleterutina(id:number){
      return this.http
      .delete<Rutina>(this.endpoint.concat("/")+id,this.httpOptions)
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

