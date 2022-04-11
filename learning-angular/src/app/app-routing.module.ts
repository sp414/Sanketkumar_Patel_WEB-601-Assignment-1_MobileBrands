import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { HomePageComponentComponent } from './home-page-component/home-page-component.component';
import { ContentDetailComponentComponent } from './content-detail-component/content-detail-component.component';


const routes: Routes = [
  { path: "", component: HomePageComponentComponent },
  { path: 'contentlist', component: ContentListComponent },
  { path: 'contentdetail/:id', component: ContentDetailComponentComponent },
  { path: "**", component: PageNotFoundComponentComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
