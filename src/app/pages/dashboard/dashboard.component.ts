import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPosts } from '../../store/post/post.actions';
import { selectAllPosts } from '../../store/post/post.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  posts$: Observable<any>;

  constructor(private store: Store) {
    this.posts$ = this.store.select(selectAllPosts);
  }

  ngOnInit() {
    this.store.dispatch(loadPosts());
  }
}
