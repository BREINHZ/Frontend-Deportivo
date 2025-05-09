import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { OlvidoPassword } from '../Modelo/OlvidoPassword';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OlvidopasswordService {

  private endpoint:string = environment.endPointDeportivorecuperarpassword;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    }),
  };


  Recuperarpassword(data:any):Observable<OlvidoPassword>{
    return this.http
    .post<OlvidoPassword>(
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

