import { createAction, props } from '@ngrx/store';
import { Post } from './post.state';

export const loadPosts = createAction('[Post] Load Posts');
export const loadPostsSuccess = createAction(
  '[Post] Load Posts Success',
  props<{ posts: Post[] }>()
);

export const addPost = createAction(
  '[Post] Add Post',
  props<{ post: Post }>()
);
