import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';



@Component({
  selector: 'app-mat-login',
  templateUrl: './mat-login.component.html',
  styleUrls: ['./mat-login.component.css']
})
export class MatLoginComponent implements OnInit {
  loginForm= new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
  })

  matcher = new MyErrorStateMatcher();
  constructor(private auth:AuthService, private route: Router) { }
  ngOnInit(): void {
  }
  submit(){
    
    console.log(this.loginForm)
    this.auth.loginUser(this.loginForm.value).subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.route.navigate(['/material-user'])
      },
      err => {
        console.log(err)
      }
    )
  }

}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}