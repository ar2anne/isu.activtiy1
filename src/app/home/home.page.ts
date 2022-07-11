import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public form: FormGroup;

  constructor(
    private http:HttpClient,
    private formBuilder: FormBuilder,
    private router:NavController
  ) {
    this.form = formBuilder.group({
      username: ["",Validators.required],
      password: ["",Validators.required]
    });
  }

  ngOnInit() {
    if (localStorage.getItem("cookie-key")) {
      this.router.navigateForward("/dashboard");
    }
  }

  async login() {
    if (!this.form.valid) return;

    // ajax request
    // if request status code is success

    localStorage.setItem("cookie-key",this.form.value.username);
    this.router.navigateForward("/dashboard");
  }
}
