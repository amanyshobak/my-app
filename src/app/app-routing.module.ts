import { Page_twoComponent } from './page_two/page_two.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page_oneComponent } from './page_one/page_one.component';

const routes: Routes = [


  { path: '', component: Page_oneComponent },
  { path: 'page_2', component: Page_twoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
