import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { PostsService } from './posts.service';
import { environment } from 'src/environments/environment';
import { Post } from '../interfaces/post.interface';
import { User } from '../interfaces/user.interface';

describe('PostsService', () => {
  let service: PostsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PostsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  function userFactory(): User {
    return {
      id:        'string',
      name:      'string',
      avatarUrl: 'string'
    }
  }

  function postFactory(): Post {
    return {
      id:          'string',
      createdTime: 'string',
      author:      userFactory(),
      body:        'string',
      images:      []
    }

  }



  it('should make Http request when get posts', async () => {
    const request = service.getPosts();
    const response = httpMock.expectOne(environment.postUrl);
    response.flush([postFactory(), postFactory(), postFactory()]);
    const posts = await request;
    expect(posts.length).toEqual(3);
  });

});
