import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    ForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
