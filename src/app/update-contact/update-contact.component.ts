import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { MyContact } from 'src/Model/myContact';
import { MyGroup } from 'src/Model/myGroup';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
  contactId:any;
  
  contact:MyContact={}

  group:MyGroup[]=[] as MyGroup []

constructor(private activatedRoute: ActivatedRoute, private api:ApiService, private route:Router){}

  ngOnInit ():void{
   this.activatedRoute.params.subscribe((data:any)=>{
    console.log(data); // console.log(data.Id) - if we use this we get Id only
    console.log(data.Id);
    this.contactId=data['Id'] // calling the object
    console.log(this.contactId);
    this.api.viewContacts(this.contactId).subscribe((data:any)=>{
      console.log(data); // data of particular contact
      this.contact=data
    })
    
    this.api.getAllGroup().subscribe((data:any)=>{
      console.log(data);
      this.group=data
    })

   })
  }
  updateContact(){
   this.api.updateContact(this.contactId, this.contact).subscribe((data:any)=>{
    console.log(data);
    this.route.navigateByUrl('')
   })
  }


}
