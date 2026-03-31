// types.ts

import { Maybe } from './maybe';

export type UserId = string;
export type Username = string;
export type Email = string;

export interface User {
  id: UserId;
  username: Username;
  email: Email;
  createdAt: Date;
  updatedAt: Date;
}

export type UserOrNull = User | null;

export type PostId = string;
export type PostContent = string;

export interface Post {
  id: PostId;
  content: PostContent;
  authorId: UserId;
  authorUsername: Username;
  createdAt: Date;
  updatedAt: Date;
}

export type PostOrNull = Post | null;

export type CommentId = string;
export type CommentContent = string;

export interface Comment {
  id: CommentId;
  content: CommentContent;
  postId: PostId;
  authorId: UserId;
  authorUsername: Username;
  createdAt: Date;
  updatedAt: Date;
}

export type CommentOrNull = Comment | null;