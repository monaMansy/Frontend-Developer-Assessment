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
  messageDetails;
   
    users:any = []; // to prevent ngFor to throw while we wait for API to return data
  constructor(private http: HttpClient , private usersActionService:usersActionService) {

   }
  
  ngOnInit() {
 
   this.getUsers();
    
  }
  public getUsers() {
    this.usersActionService.GetAll().subscribe( (res:any) => {
      this.users = res.data;
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
  }


}
