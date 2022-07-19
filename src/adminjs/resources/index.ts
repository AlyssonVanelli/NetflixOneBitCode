import { courseResourceOptions } from "./course";
import { Course } from "./../../models/Course";
import { categoryResourceOptions } from "./category";
import { Category } from "./../../models/Category";
import { ResourceWithOptions } from "adminjs";

export const adminJsResouces: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions,
  },
  {
    resource: Course,
    options: courseResourceOptions,
  },
];
