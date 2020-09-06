import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  onCreatePost(postData: { username: string; password: string }) {
    // Send Http request
    this.http
      .post(
        "http://apiserver.centralindia.azurecontainer.io:5000/authenticate?username=" +
          postData.username +
          "&password=" +
          postData.password,
        postData
      )
      .pipe(
        map((responseData) => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray[0].details[0].login_status;
        })
      )
      .subscribe((details) => {
        if (details === true) {
          window.location.replace("assets/Homepagem.html");
        }
      });
  }
}
