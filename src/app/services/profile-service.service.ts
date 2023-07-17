import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  name: string |undefined;
  email: string |undefined;
  password: string |undefined;
  constructor(private http: HttpClient) { }
}