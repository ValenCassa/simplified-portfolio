import * as Yup from "yup";
import { ObjectShape, OptionalObjectSchema } from "yup/lib/object";

export const postSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  content: Yup.string().required("Content is required"),
  imageURL: Yup.string().required("Image url is required"),
  date: Yup.date().required("Date is required"),
});

export const projectSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  content: Yup.string().required("Content is required"),
  imageURL: Yup.string().required("Image url is required"),
  date: Yup.date().required("Date is required"),
  stack: Yup.array().of(Yup.string()).min(1, "Stack is required"),
  platform: Yup.array().of(Yup.string()).min(1, "Platform is required"),
  repository: Yup.string(),
  website: Yup.string(),
});

export type Post = Yup.InferType<typeof postSchema>;
export type Project = Yup.InferType<typeof projectSchema>;
export type Schema = OptionalObjectSchema<ObjectShape>;
