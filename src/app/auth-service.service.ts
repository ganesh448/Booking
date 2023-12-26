import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Userlogin } from './userlogin';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginUser: any;

  updateLogin: any;
  updateByEmail: any;
  getAllLoginUsers() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8080/userlogin';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const credentials = { email, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(`${this.apiUrl}/login`, credentials, {
      headers,
      responseType: 'text',
    });
  }

  getAllUserLogins(): Observable<Userlogin[]> {
    const url = `${this.apiUrl}/all`;
    return this.http.get<Userlogin[]>(url);
  }
  // auth-service.service.ts
  getUserLogin(email: string): Observable<any> {
    const url = `${this.apiUrl}/userlogin/${encodeURIComponent(email)}`;
    return this.http.get<Userlogin>(url);
  }

  saveUserLogin(userLogin: Userlogin): Observable<string> {
    const url = `${this.apiUrl}/login`;
    return this.http.post<string>(url, userLogin);
  }
  updateUserByEmail(email: string, updatedUser: Userlogin): Observable<string> {
    const url = `${this.apiUrl}/update/${email}`;
    return this.http.put<string>(url, updatedUser).pipe(
      catchError((error) => {
        console.error('Error updating user by email:', error);
        throw error;
      })
    );
  }
  deleteUserLogin(email: string): Observable<string> {
    const url = `${this.apiUrl}/delete/${email}`;
    return this.http.delete(url, { responseType: 'text' });
  }
}
