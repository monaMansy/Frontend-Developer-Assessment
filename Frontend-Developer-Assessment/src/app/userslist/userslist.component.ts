import { Component, OnInit } from '@angular/core';
import { usersActionService} from './users.service';

import { HttpClient ,HttpClientModule } from '@angular/common/http';
import { ModalDetails, ActionType } from 'src/app/shared/modalDetails';



@Component({
  selector: 'app-shoppinglist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css'],
  providers:[HttpClientModule ,usersActionService]
})
export class userslistComponent implements OnInit {
  res:any;
  modalDetails:ModalDetails = new ModalDetails();
  
   
    users:any = []; // to prevent ngFor to throw while we wait for API to return data
  constructor(private http: HttpClient , private usersActionService:usersActionService) {

   }
  
  ngOnInit() {
 
   this.getUsers();
    
  }
  public getUsers() {
    console.log(this.users);
    this.usersActionService.GetAll().subscribe( (res:any) => {
      console.log(res);
      this.users = res.data;
      // data contains actual array of users
      console.log(this.users);
    });
   
  }

  onEdit(user){
    this.modalDetails = {
      openModalFlag: true,
      actionType : ActionType.edit,
      btnText: 'EDIT',
      userDetails: user
    } as ModalDetails
    // this.usersActionService.EditUser(user.id).subscribe(res=>{console.log("edit",res)})
  }

  onDelete(user){
    this.modalDetails = {
      openModalFlag: true,
      actionType : ActionType.delete,
      btnText: 'DELETE',
      userDetails: user
    } as ModalDetails
  }
  
 public toggleModal($event){ 
    this.modalDetails = $event;

    console.log("msg" ,this.modalDetails)
  }


}
