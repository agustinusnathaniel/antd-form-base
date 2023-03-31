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
};
