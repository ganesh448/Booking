import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      catchError((error: any) => {
        console.error('Error fetching users:', error);
        return throwError('Something went wrong while fetching users.');
      })
    );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  getUserById(userId: number): Observable<User> {
    const url = `${this.apiUrl}/User/${userId}`;
    return this.http.get<User>(url);
  }

  updateUser(userId: number, updatedUser: User): Observable<User> {
    const url = `${this.apiUrl}/User/${userId}`;
    return this.http.put<User>(url, updatedUser);
  }

  deleteUser(userId: number): Observable<any> {
    const url = `${this.apiUrl}/User/${userId}`;
    return this.http.delete(url);
  }

  getUserByEmail(email: string): Observable<User> {
    const url = `${this.apiUrl}/users/User/email/${email}`;
    console.log('Fetching user by email:', url);
    return this.http.get<User>(url);
  }
}
