import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../users/users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { NewUserComponent } from './new-user/new-user.component';



@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    NewUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,

  ]
})
export class UsersModule { }
