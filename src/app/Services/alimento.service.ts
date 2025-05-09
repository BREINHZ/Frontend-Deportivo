import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Alimento } from '../Modelo/alimento';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlimentoService {

  private endpoint:string = environment.endPointDeportivoAlimentos;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    }),
  };


  Createalimento(data:any):Observable<Alimento>{
    return this.http
    .post<Alimento>(
     this.endpoint,JSON.stringify(data),
     this.httpOptions
    )
    .pipe(retry(1),catchError(this.errorHandl))
    }

    Getalimento(id:number): Observable<Alimento>{
    return this.http
    .get<Alimento>(this.endpoint.concat("/")+id)
    .pipe(retry(1), catchError(this.errorHandl));
    }

    Getalimentos(): Observable<Alimento> {
      return this.http.get<Alimento>(this.endpoint)
      .pipe(retry(1), catchError(this.errorHandl));
    }

    Updatealimento(data:Alimento):Observable<Alimento>{
      return this.http
      .put<Alimento>(this.endpoint.concat("/")+data.id_alimento, data)
      .pipe(
        retry(1),
      catchError(() => {
        return throwError(() => new Error(this.httpError()))
      })
      );
    }

    Deletealimento(id:number){
      return this.http
      .delete<Alimento>(this.endpoint.concat("/")+id,this.httpOptions)
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

