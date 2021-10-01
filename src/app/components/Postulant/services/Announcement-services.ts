import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpErrorResponse} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import{throwError} from "rxjs";
import {Announcement} from "../../Petitioner/announcement/model/announcement";
import {catchError} from "rxjs/operators";
import {retry} from "rxjs/operators";
import {Project} from "../Project/model/project";

@Injectable({
  providedIn:'root'
})
export class AnnouncementServices {
  basePath = 'http://localhost:3000/announcements';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private http: HttpClient) {
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default error handling
      console.log(`An error occurred: ${error.error.message} `);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError('Something happened with request, please try again later');
  }
  getAnnouncementByPetitioner(id_petitioner:number){
    return this.http.get<any>(`${this.basePath}/?id_petitioner=${id_petitioner}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  getAllAnnouncements(){
    return this.http.get<any>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  postAnnouncement(item:Announcement){
    return this.http.post<Announcement>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  deleteAnnouncement(id:number){
    return this.http.delete<Announcement>(`${this.basePath}/${id}`,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  setAnnouncement(id:number,data:any){
    return this.http.patch<Project>(`${this.basePath}/${id}`,data,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
