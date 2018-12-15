import {user} from './user.model';
 
 export class ModalDetails {
    openModalFlag:boolean;
    btnText: string;
    userDetails?: user;
    actionType: ActionType;
}

export enum ActionType {
    add= 'add',
    edit = 'edit',
    delete = 'delete'
}