import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { postReducer } from './store/post/post.reducer';
import { PostEffects } from './store/post/post.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ post: postReducer }),
    EffectsModule.forRoot([PostEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
