import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {LoginComponent} from "./components/login/login.component";
import {CreateUserComponent} from "./components/create-user/create-user.component";
import {UpdateUserComponent} from "./components/update-user/update-user.component";
import {TokenGuard} from "./guards/token.guard";
import {HomeComponent} from "./components/home/home.component";
import {RoleEnum} from "./model/role-enum";
import {MachineErrorsComponent} from "./components/machine-errors/machine-errors.component";
import {MachinesComponent} from "./components/machines/machines.component";
import {ScheduleComponent} from "./components/schedule/schedule.component";

const routes: Routes = [
  {
    path: "users",
    component: UsersComponent,
    canActivate: [TokenGuard],
    data: {roles: [RoleEnum.READ, RoleEnum.UPDATE, RoleEnum.DELETE]}
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "create-user",
    component: CreateUserComponent,
    canActivate: [TokenGuard],
    data: {roles: [RoleEnum.CREATE]}
  },
  {
    path: "update-user/:userId",
    component: UpdateUserComponent,
    canActivate: [TokenGuard],
    data: {roles: [RoleEnum.UPDATE]}
  },
  {
    path: "machines",
    component: MachinesComponent,
    canActivate: [TokenGuard],
    data: {roles: [RoleEnum.SEARCH_MACHINES]}
  },
  {
    path: "machine-errors",
    component: MachineErrorsComponent,
    canActivate: [TokenGuard]
  },
  {
    path: "schedule/:machineId/:machineName",
    component: ScheduleComponent,
    canActivate: [TokenGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
