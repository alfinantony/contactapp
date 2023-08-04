import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MyContact } from 'src/Model/myContact';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
   
  allGroups: any[]=[];
  contactName : string='' // var
  contact:MyContact={} //Object 
  constructor(private api:ApiService, private router:Router){
  this.contact.groupId="Select a group"
  }

  ngOnInit():void{
  this.api.getAllGroup().subscribe((data:any)=>{
    console.log(data);
    this.allGroups=data
  })
  }

  addContact(){
  this.api.addContact(this.contact).subscribe((data:any)=>{
  this.router.navigateByUrl('')
  })
  }
} 
