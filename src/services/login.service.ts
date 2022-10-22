import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface InputData {
  name: string;
  password: string;
}
@Injectable({
  providedIn: 'platform',
})
export class LoginService {
  private apiUrl = environment.URL + '/user';
  private state: string = 'Login';

  constructor(private http: HttpClient) {}
  changeState(state: string) {
    this.state = state;
  }
  resetState(): string {
    this.state = 'Login';
    return this.state;
  }
  getState(): string {
    return this.state;
  }

  // getAllUser(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/user/getAllUsers`);
  // }
  loginUser(input: InputData): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/loginUser`, input);
  }
  registerUser(input: InputData): Observable<any[]> {
    console.log('test');
    return this.http.post<any[]>(`${this.apiUrl}/registerUser`, input);
  }
}
