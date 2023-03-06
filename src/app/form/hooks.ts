import { Form, notification } from "antd";
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

  return {
    form,
    value,
    handleSubmitForm,
    handleInvalidForm,
  };
};
