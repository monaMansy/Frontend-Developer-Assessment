import { HttpClient ,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import {user } from '../shared/user.model';

@Injectable()
export class usersActionService{
   
    constructor(private http:HttpClient){

    }
   public GetAll(){
        return this.http.get('https://reqres.in/api/users');
    }

   public GetById(id:number){
    return this.http.get(`https://reqres.in/api/users/`+id);
    }

    AddUser(user){
        console.log("user",user)
        return this.http.post(`https://reqres.in/api/register`,user);
       

    }

    EditUser(userId, payload){
        return this.http.put(`https://reqres.in/api/users/`+userId, payload)
    }
    DeleteUser(id:number){
        return this.http.delete(`https://reqres.in/api/users/`+id)
    }
}