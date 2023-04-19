import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: boolean = false
  private users = new Map<string, string>([
    ['admin@gmail.com', '123456'],
    ['admin2@gmail.com', '654321'],
    ['admin3@gmail.com', '123321'],
  ])

  constructor() { }

  login(username: string, password: string): boolean {
    this.users.forEach((value,key, map) => {
      if (username === key && password === value)
        this.auth = true
    })
    return this.auth
  }

}
