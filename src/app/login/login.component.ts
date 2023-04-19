import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{

  errorToggle: boolean = false
  username: string = ''
  password: string = ''
  error: number = 0

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onLoginClick() {
    if (this.username !== '' && this.password !== '') {
      console.log(this.authService.login(this.username, this.password))
      if (this.authService.login(this.username, this.password)) {
        this.router.navigate(['/listofclients'])
        setTimeout(() => {location.reload()}, 1)
      }
      else {
        this.errorToggle = true
        this.error = 2
      }
    }
    else {
      this.errorToggle = true
      if (this.username === '' || this.password === '')
        this.error = 1
    }
  }

  show_hide_password(event: any){
    const input: any = document.querySelector('#password_input')
    if (input.getAttribute('type') === 'password') {
      event.target.classList.add('view')
      input.setAttribute('type', 'text')
    } else {
      event.target.classList.remove('view')
      input.setAttribute('type', 'password')
    }
    return false
  }
}
