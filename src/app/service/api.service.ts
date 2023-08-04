import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/Model/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getAllGroups() {
    throw new Error('Method not implemented.');
  }

  baseurl = 'http://localhost:3000/contact'
  constructor( private http:HttpClient) { }

  //get  function for get all contacts
  
  getAllContact():Observable<MyContact>{
    return this.http.get(this.baseurl) 
  }

//Api call for fetch particular contact details 

viewContacts(contactId:any){
  //http://localhost:3000/contact/Id
  return this.http.get(`${this.baseurl}/${contactId}`) // particular data
}

//get  function for get all groups

getGroupName(groupId:any){
  return this.http.get('http://localhost:3000/group/'+groupId) // here + sign  indicates concatination
}


//function for fetch all groups from localhost:.groups
getAllGroup(){
  return this.http.get('http://localhost:3000/group')
}

//function for adding new contact to server

addContact(contactBody:any){
  return this.http.post(this.baseurl,contactBody)
}

// function for deleting contact  from server

deleteContact(contactId:any){
  return this.http.delete(`${this.baseurl}/${contactId}`)
}

// function  for updating contact from server

updateContact(contactId:any,contactBody:any){
  return this.http.put(`${this.baseurl}/${contactId}`,contactBody)
}


}
