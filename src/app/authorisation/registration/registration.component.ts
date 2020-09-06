import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"],
})
export class RegistrationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onCreatePost(postData: { username: string; password: string }) {
    console.log("ddd");
  }

  changeit() {
    document.getElementById("part1").style.display = "none";
    document.getElementById("part2").style.display = "flex";
    document.getElementById("part3").style.display = "none";
  }
  reverseit() {
    document.getElementById("part1").style.display = "flex";
    document.getElementById("part2").style.display = "none";
    document.getElementById("part3").style.display = "flex";
  }
}
