import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { MatDialog } from '@angular/material/dialog';
import { NewUserComponent } from '../new-user/new-user.component';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public users: any =  [];
constructor(private appService: AppService,private dialog : MatDialog){

}

ngOnInit(): void {
  this.appService.getUser()
  .subscribe(data => this.users = data);
}
openDialog(){
  this.dialog.open(NewUserComponent);
}
}
