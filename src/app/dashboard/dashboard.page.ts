import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private router:NavController,
    private http:HttpClient
  ) { }

  ngOnInit() {
    if (!localStorage.getItem("cookie-key")) {
      this.router.navigateBack("/home");
    }
  }

  logout() {
    localStorage.removeItem("cookie-key");
    this.router.navigateBack("/home")
  }
}
