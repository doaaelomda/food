import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup
  constructor(private formBuilder: FormBuilder,public authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      email:['',Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  login() {
    const userData = {
      username: this.loginForm.value.username,
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    // تحقق من صحة بيانات تسجيل الدخول باستخدام AuthService
    if (this.authService.isLoggedIn) {
      this.authService.setIsLoggedIn(true); 
      this.authService.setUserData(userData); 
      this.router.navigate(['/profile']); // تحويل المستخدم إلى صفحة الملف الشخصي بعد تسجيل الدخول بنجاح
    } 
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.login(); // تسجيل الدخول بعد التحقق من صحة بيانات تسجيل الدخول
    } else {
      alert('Please fill in all required fields.');
    }
  }

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }
  get email(){
    return this.loginForm.get('email');

  }
}