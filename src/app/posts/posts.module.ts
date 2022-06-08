import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { HighlightDirective } from '../shared/directives/highlight.directive';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PostListComponent,
    PostListItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [PostListComponent]
})
export class PostsModule { }
