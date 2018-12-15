import { Component, OnInit ,Output ,EventEmitter } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ModalDetails, ActionType } from 'src/app/shared/modalDetails';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],

})
export class NavBarComponent implements OnInit {
  constructor() {
   
  }

  @Output()  eventToOpenModal= new EventEmitter<Object>();
  ngOnInit() {
  }

   sendModalAction(){
   const modalAction = new ModalDetails();
   modalAction.actionType = ActionType.add;
   modalAction.btnText =  'add';
   modalAction.openModalFlag = true;
     this.eventToOpenModal.emit(modalAction);
   }
}
