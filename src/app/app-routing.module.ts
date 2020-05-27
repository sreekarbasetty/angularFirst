import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummyoneComponent } from './dummyone/dummyone.component';
import { DummytwoComponent } from './dummytwo/dummytwo.component';
import { NotfoundComponent } from './badroute/notfound/notfound.component';
import { AlldirectivesComponent } from './directives/alldirectives/alldirectives.component';
import { ForComponent } from './directives/for/for.component';
import { ReviewComponent } from './parent-child/review/review.component';
import { ReviewcontainerComponent } from './parent-child/reviewcontainer/reviewcontainer.component';
import { SwitchcaseComponent } from './directives/switchcase/switchcase.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { TodoComponent } from './directives/todo/todo.component';
import { AllpipesComponent } from './pipesdemo/allpipes/allpipes.component';
import { InbuiltComponent } from './pipesdemo/inbuilt/inbuilt.component';
import { CustomComponent } from './pipesdemo/custom/custom.component';


const routes: Routes = [
  {
    //Default path configuring
    path:'',
    redirectTo:'appReviewContainer',
    pathMatch:'full'
  },
  {
    path:'appReviewContainer',
    component:ReviewcontainerComponent
   },
   {
     path:'twodummy',
     component:DummytwoComponent
   },
   {
    path:'alldirectives',
    component:AlldirectivesComponent,
    children:[
      {
        path:'fordirective',
        component:ForComponent
      },
      {
        path:'switch',
        component:SwitchcaseComponent
      },
      {
        path:'style',
        component:NgstyleComponent
      },
      {
        path:'todo',
        component:TodoComponent
      },
      
    ]
   },
   {
    path:'allpipes',
    component:AllpipesComponent,
    children:[
      {
        path:'inbuilt',
        component:InbuiltComponent
      },
      {
        path:'custom',
        component:CustomComponent
      }   

    ]
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
