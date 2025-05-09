import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Plan } from '../Modelo/plan';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  private endpoint:string = environment.endPointDeportivoPlan;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    }),
  };


  Createplan(data:any):Observable<Plan>{
    return this.http
    .post<Plan>(
     this.endpoint,JSON.stringify(data),
     this.httpOptions
    )
    .pipe(retry(1),catchError(this.errorHandl))
    }

    Getplan(id:number): Observable<Plan>{
    return this.http
    .get<Plan>(this.endpoint.concat("/")+id)
    .pipe(retry(1), catchError(this.errorHandl));
    }

    Getplanes(): Observable<Plan> {
      return this.http.get<Plan>(this.endpoint)
      .pipe(retry(1), catchError(this.errorHandl));
    }

    Updateplan(data:Plan):Observable<Plan>{
      return this.http
      .put<Plan>(this.endpoint.concat("/")+data.id_plan, data)
      .pipe(
        retry(1),
      catchError(() => {
        return throwError(() => new Error(this.httpError()))
      })
      );
    }

    Deleteplan(id:number){
      return this.http
      .delete<Plan>(this.endpoint.concat("/")+id,this.httpOptions)
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
