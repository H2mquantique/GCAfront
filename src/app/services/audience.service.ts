import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudienceService {
  private apiUrl = 'http://localhost:8080/api/v1/audiences';

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer les audiences d'une affaire spécifique
  getAudiencesByAffaireId(affaireId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/byAffaire/${affaireId}`);
  }

   // Méthode pour récupérer les audiences par date
   getAudiencesByDate(date: string): Observable<any[]> {
    const url = `${this.apiUrl}/byDate/${date}`;
    return this.http.get<any[]>(url);
  }

  // Méthode pour ajouter une nouvelle audience
  addAudience(audience: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, audience);
  }

  // Méthode pour mettre à jour une audience existante
  updateAudience(id: number, audience: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${id}`, audience);
  }

  // Méthode pour supprimer une audience
  deleteAudience(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
