import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = true;
  userData: any = null;
  constructor() { }
  setIsLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }
  setUserData(data: any) {
    this.userData = data;
  }

  getUserData() {
    return this.userData;
  }
}