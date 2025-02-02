import { ResourceOptions } from "adminjs";

export const categoryResourceOptions: ResourceOptions = {
  navigation: "Catálogo",
  editProperties: ["name", "position"],
  filterProperties: ["name", "position", "created_at", "updated_at"],
  listProperties: ["id", "name", "position"],
  showProperties: ["id", "name", "position", "created_at", "updated_at"],
};
