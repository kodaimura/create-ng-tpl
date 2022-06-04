import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { UserService } from '../../../core/services';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  message: string = "";

  constructor(
    private userService: UserService,
  ) { }

  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    passwordconf: new FormControl('', [Validators.required]),
  });


  ngOnInit(): void {
  }

  onClick(event: any): void {
    if (this.signupForm.get("password")!.value !== 
        this.signupForm.get("passwordconf")!.value) {
      this.message = "パスワードが一致していません。"
    } else {
     var { passwordconf: {} , ...signupDto} = this.signupForm.value;
      this.userService.signup(signupDto)
      .subscribe((res: any) => {
          window.location.href = "/login";
      }, error => {
        this.message = "登録に失敗しました。";
      }
    );
    }
  }

}
