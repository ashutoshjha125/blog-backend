export interface Post {
    id: string;
    title: string;
    body: string;
  }
  
  export interface PostState {
    posts: Post[];
  }
  
  export const initialState: PostState = {
    posts: [],
  };
  