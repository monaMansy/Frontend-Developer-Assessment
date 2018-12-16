import { Component, OnInit ,Input ,ViewChild, ElementRef ,ChangeDetectorRef } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { config } from 'rxjs/internal/config';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import {usersActionService} from '../users.service';
import { ModalDetails, ActionType } from 'src/app/shared/modalDetails';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { NotifierService } from 'angular-notifier';





@Component({
  selector: 'app-actionmodal',
  templateUrl: './actionmodal.component.html',
  styleUrls: ['./actionmodal.component.css'],
  providers: [NgbModalConfig , NgbModal , usersActionService]
})
export class ActionmodalComponent implements OnInit{
  
   @Input() modalDetails: ModalDetails;
   @ViewChild('content') content: ElementRef
   form: FormGroup;
   private readonly notifier: NotifierService;

  constructor(config: NgbModalConfig,
     private modalService: NgbModal ,
     private usersActionService:usersActionService ,
      private formBuilder: FormBuilder,
    private cdRef: ChangeDetectorRef,

  
  notifierService: NotifierService ) {

    this.notifier = notifierService;
    // customize default values of modals used by this component tree
     config.backdrop= 'static';
     config.keyboard = false;
   }

   ngOnInit() {
    this.form = this.formBuilder.group({
      name: [''],
      jobtitle: [''],
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  this.cdRef.detectChanges();          
  }

   get f() { return this.form.controls; }

   ngOnChanges() {
    this.cdRef.detectChanges(); 
    
    // conditions for open modal according to action add or update or delete
     if(this.modalDetails.openModalFlag)
     {
        if(this.modalDetails.actionType == ActionType.edit){
          this.form.setValue({name: this.modalDetails.userDetails.first_name + ' '+ this.modalDetails.userDetails.last_name, jobtitle: this.modalDetails.userDetails.jobTitle || '', email:'', password: ''})
        }
        // not best practice  but use settimout to solve global problem with NgbModal and  angular version 4.2.0+.
        setTimeout(() => {
          this.modalService.open(this.content);
        }, 0);
     }
    
  }
  cancelAction() {
    this.modalService.dismissAll();
  }
  userAction(){
    this.modalService.dismissAll();    
    let formValues;
    // add function
    if(this.modalDetails.actionType == ActionType.add){
      formValues = {
        email: this.form.controls.email.value,
        password: this.form.controls.password.value
      }
      this.AddNewUser(formValues);

     // edit function
    }else if(this.modalDetails.actionType === ActionType.edit) {
      formValues = {
        name:this.form.controls.name.value,
        job: this.form.controls.jobtitle.value
      }
      this.editSelectedUser(formValues);

      // delete function
    } else if(this.modalDetails.actionType === ActionType.delete) {
      this.deleteSelectedUser();
    }
  }

  deleteSelectedUser() {
    this.usersActionService.DeleteUser(this.modalDetails.userDetails.id).subscribe(res=>{ this.notifier.notify( 'success', 'user deleted successfully ' );})
  }
  editSelectedUser(updatedValue) {

        this.usersActionService.EditUser(this.modalDetails.userDetails.id, updatedValue).subscribe(res=>{ this.notifier.notify( 'success', 'user updated  successfully ' );})

  }
  AddNewUser(sendUser){
 
    this.usersActionService.AddUser(sendUser).subscribe(
      (res:any)=>{  this.notifier.notify( 'success', 'user added successfully ' );},
      (error)=> {this.notifier.notify("error ",'wrong in process  ');}
    );
  }


}
