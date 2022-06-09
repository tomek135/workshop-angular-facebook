import { User } from "src/app/posts/interfaces/user.interface";

function userFactory(): User {
    return {
      id:        'string',
      name:      'string',
      avatarUrl: 'string'
    }
  }