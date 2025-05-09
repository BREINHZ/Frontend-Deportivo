import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Usuario } from '../Modelo/usuario';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {


  private endpoint:string = environment.endPointDeportivousuarios;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    }),
  };


  Crearusuario(data:any):Observable<Usuario>{
    return this.http
    .post<Usuario>(
     this.endpoint,JSON.stringify(data),
     this.httpOptions
    )
    .pipe(retry(1),catchError(this.errorHandl))
    }

    Getusuario(id:number): Observable<Usuario>{
    return this.http
    .get<Usuario>(this.endpoint.concat("/")+id)
    .pipe(retry(1), catchError(this.errorHandl));
    }

    Getusuarios(): Observable<Usuario> {
      return this.http.get<Usuario>(this.endpoint)
      .pipe(retry(1), catchError(this.errorHandl));
    }

    Updateusuario(data:Usuario):Observable<Usuario>{
      return this.http
      .put<Usuario>(this.endpoint.concat("/")+data.id_usuario, data)
      .pipe(
        retry(1),
      catchError(() => {
        return throwError(() => new Error(this.httpError()))
      })
      );
    }

    Deleteusuario(id:number){
      return this.http
      .delete<Usuario>(this.endpoint.concat("/")+id,this.httpOptions)
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



