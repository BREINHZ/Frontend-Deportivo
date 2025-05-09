import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LoginUsuario } from '../Modelo/login_usuario';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UsuariologinService {

  private endpoint:string = environment.endPointLoginusuario;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    }),
  };


  ingresar(data:any):Observable<LoginUsuario>{
    return this.http
    .post<LoginUsuario>(
     this.endpoint,JSON.stringify(data),
     this.httpOptions
    )
    .pipe(retry(1),catchError(this.errorHandl))
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

