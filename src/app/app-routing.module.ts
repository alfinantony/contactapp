import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    // http://localhost:4200/
    path:'',redirectTo:'contact/admin',pathMatch:'full'
  },
  {
    // http://localhost:4200//Contact/admin
    path:'contact/admin',component:ContactManagerComponent
  },
  {
    // http://localhost:4200//Contact/add
    path:'contact/add',component:AddContactComponent
  },
  {
    // http://localhost:4200//Contact/update
    path:'contact/update/:Id',component:UpdateContactComponent
  },
  {
   // http://localhost:4200//Contact/view ------
   path:'contact/view/:contactId',component:ViewContactComponent  // -- here ":" is used to specif the ID
  },
  
  {
    //page not found component --------- "**"-indicates the error page, because we don't know the path
  path:'**',component:PageNotFoundComponent
  }
];

//path:' ' which indicates - http://localhost:4200/ 
// ContactManagerComponent - which indicate the class name in contact-manager.component.ts


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
