import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Dieta } from '../Modelo/dieta';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DietaService {

  private endpoint:string = environment.endPointDeportivoDietas;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    }),
  };


  Createdieta(data:any):Observable<Dieta>{
    return this.http
    .post<Dieta>(
     this.endpoint,JSON.stringify(data),
     this.httpOptions
    )
    .pipe(retry(1),catchError(this.errorHandl))
    }

    Getdieta(id:number): Observable<Dieta>{
    return this.http
    .get<Dieta>(this.endpoint.concat("/")+id)
    .pipe(retry(1), catchError(this.errorHandl));
    }

    Getdietas(): Observable<Dieta> {
      return this.http.get<Dieta>(this.endpoint)
      .pipe(retry(1), catchError(this.errorHandl));
    }

    Updatedieta(data:Dieta):Observable<Dieta>{
      return this.http
      .put<Dieta>(this.endpoint.concat("/")+data.id_dieta, data)
      .pipe(
        retry(1),
      catchError(() => {
        return throwError(() => new Error(this.httpError()))
      })
      );
    }

    Deletedieta(id:number){
      return this.http
      .delete<Dieta>(this.endpoint.concat("/")+id,this.httpOptions)
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
