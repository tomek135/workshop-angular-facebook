import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/posts/interfaces/post.interface';
import { PostsService } from 'src/app/posts/services/posts.service';
import { Sorter } from 'src/app/shared/helpers/sorter';
import fixturePosts from '../../../../../fixtures/posts.fixture.json'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isPostLoaded = false;
  posts: Post[] = [];

  constructor(
    private postService: PostsService
  ) { }

  ngOnInit(): void {
    this.setupPosts();
  }

  private async setupPosts(){
    const posts = await this.postService.getPosts();
    const mapTo = (post: Post) => new Date(post.createdTime).getTime();
    this.posts = Sorter.sortBy(posts, mapTo);
    this.isPostLoaded = true;

  }

}
