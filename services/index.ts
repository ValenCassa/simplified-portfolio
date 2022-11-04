import axios from "axios";
import { Post } from "types/Post";
import { Project } from "types/Project";

const env = process.env.NODE_ENV;
const url =
  env === "development"
    ? "http://localhost:3000/api"
    : "https://valencassa.dev/api";

export const getAllProjects = async () => {
  const data = await axios.get<Project[]>(`${url}/projects`);

  return data.data;
};

export const getOneProject = async (id: string) => {
  const data = await axios.get<Project>(`${url}/projects?id=${id}`);

  return data.data;
};

export const getAllPosts = async () => {
  const data = await axios.get<Post[]>(`${url}/posts`);

  return data.data;
};

export const getOnePost = async (id: string) => {
  const data = await axios.get<Post>(`${url}/posts?id=${id}`);

  return data.data;
};
