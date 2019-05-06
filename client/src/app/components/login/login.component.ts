import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  errorMessage: String

  constructor(private fb: FormBuilder, private autthService: AuthService, private router: Router) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  loginUser() {
    this.autthService.loginUser(this.loginForm.value).subscribe(data => {
      console.log(data);
      this.loginForm.reset();
      this.router.navigate(['home'])
    },
    err => {
      console.log(err);
      if (err.error.msg) {
        this.errorMessage = err.error.msg[0].message;
      }

      if (err.error.message) {
        this.errorMessage = err.error.message;
      }
    })
  }

}
