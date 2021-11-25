import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
    URL_BASE=environment.API_URL;
    constructor(private http: HttpClient) { }

    InsertRecord(data: any): Observable<any>{
      return this.http.post(`${this.URL_BASE}departamentos`, data);
    }
    UpdateRecord(data: any,id:any): Observable<any>{
      return this.http.put(`${this.URL_BASE}departamentos/${id}`, data);
    }
    DeleteRecord(id: any): Observable<any>{
      return this.http.delete(`${this.URL_BASE}departamentos/${id}`);
    }
    async SearchRecord(id: any){
      const response = await fetch(`${this.URL_BASE}departamentos/${id}`);
      return await response.json();
    }
    async ListRecords(){
      const response = await fetch(`${this.URL_BASE}departamentos`);
      return await response.json();
    }
}
