import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostService } from '../../services/post.service';
import { loadPosts, loadPostsSuccess } from './post.actions';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class PostEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPosts),
      mergeMap(() =>
        this.postService.getPosts().pipe(
          map((posts) => loadPostsSuccess({ posts }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private postService: PostService) {}
}
