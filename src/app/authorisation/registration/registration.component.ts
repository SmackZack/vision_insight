import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Router, RouterLink } from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"],
})
export class RegistrationComponent implements OnInit {
  loadedPosts = [];
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
        var selectedCountry = "";
        $(".target").change(function () {
          selectedCountry = this.value;
          var settings = {
            url: "https://restcountries.eu/rest/v2/alpha/"+selectedCountry,
            method: "GET",
            timeout: 0,
          };

          $.ajax(settings).done(function (response) {
            var x = response.callingCodes
            console.log(x[0])
            document.getElementById("cd").innerHTML='+'+x;
          });
        });


  }
  onCreatePost(postData: {
    username: string;
    password: string;
    name: string;
    email: string;
    mobile_contact: string;
    companyname: string;
    address: string;
    Country:string;
    interest:string;
    ContactbySalesRep: string;
  }) {
    console.log(postData)
    // Send Http request
    this.http
      .get(
        "http://apiserver.centralindia.azurecontainer.io:5000/registration?name=" +
          postData.name +
          "&username=" +
          postData.username +
          "&password=" +
          postData.password +
          "&email=" +
          postData.email +
          "&mobile-contact=" +
          postData.mobile_contact +
          "&company-name=" +
          postData.companyname +
          "&address=" +
          postData.address +
          "&Country=" +
          postData.Country +
          "&Interest=" +
          postData.interest +
          "&ContactbySalesRep=true"
      )

      .pipe(
        map((responseData) => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }

          return postsArray[0].Response[0];
        })
      )
      .subscribe((details) => {
         if (details.registered === "registered") {
            window.location.replace("");
         }
         else if (details.registered === "user already exists ") {
           alert("User already exists")
         }
      });
  }
}
