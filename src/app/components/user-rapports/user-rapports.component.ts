import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FunctionService } from 'src/app/services/function.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/model/User';

@Component({
  selector: 'app-user-rapports',
  templateUrl: './user-rapports.component.html',
  styleUrls: ['./user-rapports.component.css']
})
export class UserRapportsComponent implements OnInit {

  allRapports: any[] = [];
  selectedRapports: any[] = [];
  users: User[] = [];
  selectedUser: User | null = null;

  constructor(private funcService: FunctionService, private userService: UserService,private dialogRef: MatDialogRef<UserRapportsComponent>,) { }

  ngOnInit(): void {
    this.funcService.getAllRepRapports().subscribe((data: any) => {
      this.allRapports = data;
    });
    this.userService.getAllUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  submit(){
    console.log(this.selectedRapports)
    console.log(this.selectedUser)
    this.userService.assignRapport(this.selectedUser?.uId,this.selectedRapports).subscribe(() => {
      console.log('RepRapports assigned successfully!');
      this.closeDialog();
    });
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
