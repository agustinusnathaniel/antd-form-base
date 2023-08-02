/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FormInstance } from "antd";

export const handleDragSortEnd =
  (form: FormInstance, name: string | Array<string>) =>
  (newFieldValues: Array<any>) => {
    const oldValues = form.getFieldValue(name);
    const updatedValues = newFieldValues.map(
      (newItem) => oldValues[newItem.key]
    );
    form.setFieldValue(name, updatedValues);
  };
