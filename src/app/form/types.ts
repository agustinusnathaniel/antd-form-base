const configKeys = ["Hello", "Maybe", "Test"] as const;
type ConfigKey = (typeof configKeys)[number];

export type Configuration = {
  type: string;
  value: number;
  min: number;
  max: number;
};

export type CustomFormData = {
  name: string;
  isActive: boolean;
  price: number;
  value: number;
  configurations: Array<Configuration>;
  configHierarchy: Array<ConfigKey>;
};
