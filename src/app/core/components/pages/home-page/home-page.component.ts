import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Post } from 'src/app/posts/interfaces/post.interface';
import { PostsService } from 'src/app/posts/services/posts.service';
import { Sorter } from 'src/app/shared/helpers/sorter';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {

  isPostLoaded = false;
  posts: Post[] = [];

  constructor(
    private postService: PostsService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.setupPosts();
  }

  private async setupPosts(){
    const posts = await this.postService.getPosts();
    const mapTo = (post: Post) => new Date(post.createdTime).getTime();
    this.posts = Sorter.sortBy(posts, mapTo);
    this.isPostLoaded = true;
    this.changeDetectorRef.detectChanges();

  }

}
