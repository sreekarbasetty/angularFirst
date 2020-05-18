import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummyoneComponent } from './dummyone/dummyone.component';
import { DummytwoComponent } from './dummytwo/dummytwo.component';
import { NotfoundComponent } from './badroute/notfound/notfound.component';


const routes: Routes = [
  {
    //Default path configuring
    path:'',
    redirectTo:'onedummy',
    pathMatch:'full'
  },
  {
    path:'onedummy',
    component:DummyoneComponent
   },
   {
     path:'twodummy',
     component:DummytwoComponent
   },
   {
     path:'**',
     component:NotfoundComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
