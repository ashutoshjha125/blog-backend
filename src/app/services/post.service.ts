import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(`${this.apiUrl}`);
  }

  createPost(postData: any) {
    return this.http.post(`${this.apiUrl}`, postData);
  }

  getPostById(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
