import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Alimentacion } from '../Modelo/alimentacion';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AlimentacionService {

  private endpoint:string = environment.endPointDeportivoalimentacion;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    }),
  };


  Crearalimentacion(data:any):Observable<Alimentacion>{
    return this.http
    .post<Alimentacion>(
     this.endpoint,JSON.stringify(data),
     this.httpOptions
    )
    .pipe(retry(1),catchError(this.errorHandl))
    }

    Getalimentacion(id:number): Observable<Alimentacion>{
    return this.http
    .get<Alimentacion>(this.endpoint.concat("/")+id)
    .pipe(retry(1), catchError(this.errorHandl));
    }

    Getalimentaciones(): Observable<Alimentacion> {
      return this.http.get<Alimentacion>(this.endpoint)
      .pipe(retry(1), catchError(this.errorHandl));
    }

    Updateealimentacion(data:Alimentacion):Observable<Alimentacion>{
      return this.http
      .put<Alimentacion>(this.endpoint.concat("/")+data.id_alimentacion, data)
      .pipe(
        retry(1),
      catchError(() => {
        return throwError(() => new Error(this.httpError()))
      })
      );
    }

    Deletealimentacion(id:number){
      return this.http
      .delete<Alimentacion>(this.endpoint.concat("/")+id,this.httpOptions)
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


