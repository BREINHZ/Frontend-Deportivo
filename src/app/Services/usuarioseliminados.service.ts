import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Usuarioseliminados } from '../Modelo/usuarioseliminados';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioseliminadosService {

  private endpoint:string = environment.endPointUsuarioseliminados;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    }),
  };

    Getusuarioseliminados(): Observable<Usuarioseliminados> {
      return this.http.get<Usuarioseliminados>(this.endpoint)
      .pipe(retry(1), catchError(this.errorHandl));
    }

    Delete(id:number){
          return this.http
          .delete<Usuarioseliminados>(this.endpoint.concat("/")+id,this.httpOptions)
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




