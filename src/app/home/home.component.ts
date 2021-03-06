import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private service: HomeService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public loginForm: FormGroup = this.fb.group({
    nickname: ['', Validators.required],
    password: ['', Validators.required],
  });

  onCreateAccount() {
    this.router.navigateByUrl('create-account');
  }

  onFormSubmit(loginForm: FormGroup) {
    console.log(loginForm.value);
    return this.service.login(loginForm.value).subscribe((elem) => {
      console.log(elem);
    });
  }
}
