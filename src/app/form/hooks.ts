import { Form, notification } from "antd";
import { arrayMoveImmutable } from "array-move";
import React from "react";

import type { CustomFormData } from "app/form/types";

export const useFormPage = () => {
  const [value, setValue] = React.useState<CustomFormData>();
  const [form] = Form.useForm<CustomFormData>();

  const handleSubmitForm = (values: CustomFormData) => {
    setValue(values);
    notification.open({ message: "Nice!" });
  };

  const handleInvalidForm = () => {
    const updatedValue = form.getFieldsValue();
    setValue(updatedValue);
    notification.warning({ message: "Please Complete form first" });
  };

  const configHierarchy = Form.useWatch("configHierarchy", form);

  const handleSortConfigHierarchy = (prevIndex: number, newIndex: number) => {
    form.setFieldValue(
      "configHierarchy",
      arrayMoveImmutable(configHierarchy, prevIndex, newIndex)
    );
  };

  return {
    form,
    value,
    handleSubmitForm,
    handleInvalidForm,
    configHierarchy,
    handleSortConfigHierarchy,
  };
};
