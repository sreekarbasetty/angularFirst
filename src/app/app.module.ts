import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Form, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
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
import { ConsumeoneComponent } from './consume/consumeone/consumeone.component';
import { ConsumetwoComponent } from './consume/consumetwo/consumetwo.component';
import { RemoteComponent } from './consume/remote/remote.component';
import { ConsumeAllComponent } from './consume/consume-all/consume-all.component';
import { ConsumefakerestComponent } from './consume/consumefakerest/consumefakerest.component';
import { AddnewfriendComponent } from './consume/addnewfriend/addnewfriend.component';
import { EditfriendcomponentComponent } from './consume/editfriendcomponent/editfriendcomponent.component';
import { ParentComponent } from './eventbinding/parent/parent.component';
import { ChildComponent } from './eventbinding/child/child.component';
import { GrandchildComponent } from './eventbinding/grandchild/grandchild.component';
import { TexteffectComponent } from './animation/texteffect/texteffect.component';

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
    ReactiveformComponent,
    ConsumeoneComponent,
    ConsumetwoComponent,
    RemoteComponent,
    ConsumeAllComponent,
    ConsumefakerestComponent,
    AddnewfriendComponent,
    EditfriendcomponentComponent,
    ParentComponent,
    ChildComponent,
    GrandchildComponent,
    TexteffectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
