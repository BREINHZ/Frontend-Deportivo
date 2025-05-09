import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Dia_alimento } from '../Modelo/dia_alimento';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DiaalimentoService {

  private endpoint:string = environment.endPointDeportivodiaalimento;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    }),
  };

  Creatediaalimento(data:any):Observable<Dia_alimento>{
    return this.http
    .post<Dia_alimento>(
     this.endpoint,JSON.stringify(data),
     this.httpOptions
    )
    .pipe(retry(1),catchError(this.errorHandl))
    }

    Getdiaalimento(id:number): Observable<Dia_alimento>{
    return this.http
    .get<Dia_alimento>(this.endpoint.concat("/")+id)
    .pipe(retry(1), catchError(this.errorHandl));
    }

    Getdiaalimentos(): Observable<Dia_alimento> {
      return this.http.get<Dia_alimento>(this.endpoint)
      .pipe(retry(1), catchError(this.errorHandl));
    }

    Updatediaalimento(data:Dia_alimento):Observable<Dia_alimento>{
      return this.http
      .put<Dia_alimento>(this.endpoint.concat("/")+data.id, data)
      .pipe(
        retry(1),
      catchError(() => {
        return throwError(() => new Error(this.httpError()))
      })
      );
    }

    Deletediaalimento(id:number){
      return this.http
      .delete<Dia_alimento>(this.endpoint.concat("/")+id,this.httpOptions)
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
