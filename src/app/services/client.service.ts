import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'http://localhost:8080/api/v1/clients';

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getall`);
  }

  getClientById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get/${id}`);
  }

  createClient(client: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/save`, client);
  }

  updateClient(id: number, client: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/update/${id}`, client);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  getDossier(clientId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${clientId}/dossier`);
  }

  getAffairesByClientId(clientId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${clientId}/affaires`);
  }
}
