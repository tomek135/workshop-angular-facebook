import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'posts',
    loadChildren: () => import('../posts/post-routing.module')
      .then((m) => m.PostsRoutingModule)
  },
  {
    path: 'user',
    loadChildren: () => import('../user/user-routing.module')
      .then((m) => m.UserRoutingModule)
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    title: 'Not Found * Facebook'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
