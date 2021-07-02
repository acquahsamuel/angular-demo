import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  // logo = "assets/images/logo.png";
  logo = 'imageUrl';
  hide = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    this.router.navigateByUrl("/dashboard");
  }
}
