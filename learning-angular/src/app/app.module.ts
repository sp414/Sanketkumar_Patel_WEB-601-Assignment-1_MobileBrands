import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentPipe } from './content-list/default-type.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { InMemoryDataService } from './Services/in-memory-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ModifyContentListComponent } from './modify-content-list/modify-content-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentPipe,
    HoverAffectDirective,
    MessagesComponent,
    ModifyContentListComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 1000,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
