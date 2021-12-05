import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  URL_BASE = environment.API_URL;
  constructor(private http: HttpClient) { }
  InsertRecord(data: any):Observable<any>{
    return this.http.post(`${this.URL_BASE}regiones`, data);
  }
  UpdateRecord(data: any,id:any): Observable<any>{
    return this.http.put(`${this.URL_BASE}regiones/${id}`, data);
  }
  DeleteRecord(id: any): Observable<any>{
    return this.http.delete(`${this.URL_BASE}regiones/${id}`);
  }
  async SearchRecord(id: any){
    const response = await fetch(`${this.URL_BASE}regiones/${id}`);
    return await response.json();
  }
  async LisrRecord(){
    const response = await fetch(`${this.URL_BASE}regiones`);
    return await response.json();
  } 
}
