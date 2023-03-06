type Configuration = {
  type: string;
  value: number;
};

export type CustomFormData = {
  name: string;
  isActive: boolean;
  price: number;
  value: number;
  configurations: Array<Configuration>;
};
