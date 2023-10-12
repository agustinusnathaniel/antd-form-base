import type { CustomFormData } from "app/form/types";

export const typeOptions = [
  { label: "Type 01", value: "type_01" },
  { label: "Type 02", value: "type_02" },
];

export const defaultValues: CustomFormData = {
  name: "Hello",
  isActive: false,
  price: 0,
  value: 0,
  configurations: [],
  configHierarchy: ["Hello", "Maybe", "Test"],
};
