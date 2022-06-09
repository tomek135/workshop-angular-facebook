import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/posts/interfaces/post.interface';
import { PostsService } from 'src/app/posts/services/posts.service';
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
    this.posts = await this.postService.getPosts();
    this.isPostLoaded = true;

  }

}
