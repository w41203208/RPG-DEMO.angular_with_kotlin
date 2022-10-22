import {
  Component,
  Inject,
  InjectionToken,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

interface InputData {
  name: string;
  password: string;
}

@Component({
  selector: 'ming-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [FormBuilder, LoginService], // provider 會去 new 注入的服務的實例
  //dirctives: [] 填入子組件，不然沒辦法在 component 中使用 component
})
export class LoginComponent implements OnInit, OnChanges {
  state = this.loginService.getState();
  inputData: InputData = {
    name: '',
    password: '',
  };

  constructor(
    private loginService: LoginService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  //針對輸入屬性 @input 的變化會觸發
  ngOnChanges(changes: SimpleChanges): void {
    console.log('test');
  }

  onClickEvt_ChangeState(state: string) {
    this.loginService.changeState(state);
    this.state = this.loginService.getState();
    this.inputData = {
      name: '',
      password: '',
    };
  }

  onChangeEvt_inputName(e: any) {
    this.inputData.name = e.target.value;
  }
  onChangeEvt_inputPassword(e: any) {
    this.inputData.password = e.target.value;
  }

  // change to use formbuilder?
  onClickEvt_SubmitData(): void {
    if (this.state === 'Login') {
      this.loginService.loginUser(this.inputData).subscribe((res: any) => {
        if (res.state === 'Success') {
          this.userService.setUser(res.payload);
          this.router.navigate(['/home']);
        } else {
          // 註冊一個 toast 服務 or module?
          console.log(res.message);
        }
      });
    } else if (this.state === 'Register') {
      this.loginService.registerUser(this.inputData).subscribe((res: any) => {
        console.log(res);
      });
    }
    this.state = this.loginService.resetState();
    this.inputData = {
      name: '',
      password: '',
    };
  }
}
