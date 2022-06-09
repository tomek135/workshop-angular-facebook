import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from '../core/components/pages/not-found-page/not-found-page.component';
import { PostProfilePageComponent } from './pages/post-profile-page/post-profile-page.component';

const routes: Routes = [
  {
    path: ':id',
    component: PostProfilePageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
