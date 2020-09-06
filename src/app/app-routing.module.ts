import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./authorisation/login/login.component";
import { RegistrationComponent } from "./authorisation/registration/registration.component";
import { ForgetpasswordComponent } from "./authorisation/forgetpassword/forgetpassword.component";
import { FormsModule , ReactiveFormsModule} from "@angular/forms";
import { DatavalidateComponent } from './datavalidate/datavalidate.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegistrationComponent },
  { path: "forgetpassword", component: ForgetpasswordComponent },
  { path: "dv", component: DatavalidateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule, ReactiveFormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
