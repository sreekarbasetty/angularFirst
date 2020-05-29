import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Form, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DummyoneComponent } from './dummyone/dummyone.component';
import { DummytwoComponent } from './dummytwo/dummytwo.component';
import { NotfoundComponent } from './badroute/notfound/notfound.component';
import { ReviewcontainerComponent } from './parent-child/reviewcontainer/reviewcontainer.component';
import { ReviewComponent } from './parent-child/review/review.component';
import { ReviewtitleComponent } from "./parent-child/reviewtitle/reviewtitle.component";
import { ReviewdetailComponent } from './parent-child/reviewdetail/reviewdetail.component';
import { ProfilepictureComponent } from './parent-child/profilepicture/profilepicture.component';
import { DescriptionComponent } from './parent-child/description/description.component';
import { ActionsComponent } from './parent-child/actions/actions.component';
import { AuthorComponent } from './parent-child/author/author.component';
import { EngagementComponent } from './parent-child/engagement/engagement.component';
import { AlldirectivesComponent } from './directives/alldirectives/alldirectives.component';
import { IfComponent } from './directives/if/if.component';
import { ForComponent } from './directives/for/for.component';
import { SwitchcaseComponent } from './directives/switchcase/switchcase.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { TodoComponent } from './directives/todo/todo.component';
import { AllpipesComponent } from './pipesdemo/allpipes/allpipes.component';
import { InbuiltComponent } from './pipesdemo/inbuilt/inbuilt.component';
import { CustomComponent } from './pipesdemo/custom/custom.component';
import { SortStringArrayPipe } from './custompipes/sort-string-array.pipe';
import { SortnumberPipe } from './custompipes/sortnumber.pipe';
import { AllformsComponent } from './forms/allforms/allforms.component';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyoneComponent,
    DummytwoComponent,
    NotfoundComponent,
    ReviewcontainerComponent,
    ReviewComponent,
    ReviewtitleComponent,
    ReviewdetailComponent,
    ProfilepictureComponent,
    DescriptionComponent,
    ActionsComponent,
    AuthorComponent,
    EngagementComponent,
    AlldirectivesComponent,
    IfComponent,
    ForComponent,
    SwitchcaseComponent,
    NgstyleComponent,
    TodoComponent,
    AllpipesComponent,
    InbuiltComponent,
    CustomComponent,
    SortStringArrayPipe,
    SortnumberPipe,
    AllformsComponent,
    TemplateformComponent,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
