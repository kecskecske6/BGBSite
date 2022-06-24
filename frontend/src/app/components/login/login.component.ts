import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/classes/user-model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  username!: string;
  password!: string;
  user!: UserModel;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const loginData = {
      username: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value
    };
    this.authService.loginForm(loginData).subscribe({
      next: response => {
        this.authService.setUser(response);
        localStorage.setItem('name', response.user.username);
        this.userService.setUser(response.user.username);
        this.router.navigate(['/']);
      },
      error: err => console.log(err)
    });
  }

}
