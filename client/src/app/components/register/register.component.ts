import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.registerForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  registerUser() {
    this.authService.registerUser(this.registerForm.value).subscribe(
      data => {
        // console.log(data);
        this.registerForm.reset();
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
      }
    );
  }
}
