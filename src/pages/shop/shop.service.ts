import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'platform',
})
export class ShopService {
  private apiUrl = environment.URL + '/equipment';

  constructor(private http: HttpClient) {}

  getAllEquipment(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/allEquipment`);
  }
}
