import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../../../core/services';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  message: string = "";

  constructor(
    private userService: UserService,
  ) {}

  loginForm = new FormGroup({
    username: new FormControl('', []),
    password: new FormControl('', []),
  });

  ngOnInit(): void {
  }

  onClick(event: any): void {
    this.userService.login(this.loginForm.value)
      .subscribe((res: any) => {
        window.location.href = "/";
      }, error => {
        if (error.status == 401) {
          this.message = "ユーザ名またはパスワードが異なります。";
        } else {
          this.message = "ログインに失敗しました。";
        }
      }
    );
  }
}