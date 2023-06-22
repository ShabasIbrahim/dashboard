import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LeadComponent } from './lead/lead.component';




const routes: Routes = [

{
  path:'dashboard',component:DashboardComponent



  
},

// to make the dash board  page always first for that this method 

{
  path:'',redirectTo:'dashboard',pathMatch:'full'

},

//************ */ to redirect to specfic heading set path for that****************

{

  path:'employees',component:EmployeesComponent

},


{
  path:'gallery',component:GalleryComponent
},


{
  path:'contact',component:ContactComponent
},


{
  path:'lead',component:LeadComponent
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



