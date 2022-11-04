import axios from "axios";
import { Post } from "types/Post";

const getUrl =
  process.env.NODE_ENV === "production"
    ? "https://valencassa.dev/api/posts"
    : "http://localhost:3000/api/posts";

export const getPosts = async () => {
  const res = await axios.get<Post[]>(getUrl);
  return res.data;
};

export const createPost = async (values: Post) => {
  const data = await axios.post<Post>("/api/posts", values);
  return data.data;
};

export const removePost = async (id: string) => {
  await axios.delete(`/api/posts?id=${id}`);
};

export const updatePost = async (values: Post, id: string) => {
  const data = await axios.put<Post>(`/api/posts?id=${id}`, values);
  return data.data;
};
