import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Usuariodieta } from '../Modelo/usuariodieta';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariodietaService {

  private endpoint:string = environment.endPointDeportivousuariodieta;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    }),
  };


  Crearusuariodieta(data:any):Observable<Usuariodieta>{
    return this.http
    .post<Usuariodieta>(
     this.endpoint,JSON.stringify(data),
     this.httpOptions
    )
    .pipe(retry(1),catchError(this.errorHandl))
    }

    Getusuariodieta(id:number): Observable<Usuariodieta>{
    return this.http
    .get<Usuariodieta>(this.endpoint.concat("/")+id)
    .pipe(retry(1), catchError(this.errorHandl));
    }

    Getusuariodietas(): Observable<Usuariodieta> {
      return this.http.get<Usuariodieta>(this.endpoint)
      .pipe(retry(1), catchError(this.errorHandl));
    }

    Updateusuariodieta(data:Usuariodieta):Observable<Usuariodieta>{
      return this.http
      .put<Usuariodieta>(this.endpoint.concat("/")+data.id, data)
      .pipe(
        retry(1),
      catchError(() => {
        return throwError(() => new Error(this.httpError()))
      })
      );
    }

    Deleteusuariodieta(id:number){
      return this.http
      .delete<Usuariodieta>(this.endpoint.concat("/")+id,this.httpOptions)
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



