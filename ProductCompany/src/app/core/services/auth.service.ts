import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  registration(): void {
   localStorage.setItem('auth-token','success')
  }

  checkTokenInStorage(): boolean{
    return localStorage.getItem('auth-token') !== null;
  }
}
