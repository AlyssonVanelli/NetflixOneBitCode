import { categoryResourceOptions } from "./category";
import { Category } from "./../../models/Category";
import { ResourceWithOptions } from "adminjs";

export const adminJsResouces: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions,
  },
];
