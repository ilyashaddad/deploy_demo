import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllNewsComponent } from './news/components/all-news/all-news.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // declarations:[AllNewsComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
