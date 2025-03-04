import { createReducer, on } from '@ngrx/store';
import { addPost, loadPostsSuccess } from './post.actions';
import { PostState, initialState } from './post.state';

const _postReducer = createReducer(
  initialState,
  on(loadPostsSuccess, (state, { posts }) => ({ ...state, posts })),
  on(addPost, (state, { post }) => ({ ...state, posts: [...state.posts, post] }))
);

export function postReducer(state: any, action: any) {
  return _postReducer(state, action);
}
