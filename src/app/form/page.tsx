"use client";

import { Button, Col, Divider, Form, Row } from "antd";
import React from "react";

import MetaSection from "app/form/components/MetaSection";
import RichDynamicArray from "app/form/components/RichDynamicArray";
import SortableDynamicArray from "app/form/components/SortableDynamicArray";
import { useFormPage } from "app/form/hooks";

const validateMessages = {
  // eslint-disable-next-line no-template-curly-in-string
  required: "${label} must be filled",
};

const FormPage = () => {
  const [isSortable, setIsSortable] = React.useState<boolean>(false);
  const { form, value, handleInvalidForm, handleSubmitForm } = useFormPage();

  const handleIsSortable = () => setIsSortable((prev) => !prev);

  return (
    <Form
      form={form}
      onFinish={handleSubmitForm}
      onFinishFailed={handleInvalidForm}
      layout="vertical"
      style={{
        width: "100%",
        maxWidth: "600px",
        display: "grid",
        gap: "32px",
        margin: "1rem auto",
        padding: "1.5rem",
      }}
      validateMessages={validateMessages}
    >
      <div>
        <h4>Antd Form Example</h4>
        <Divider />
      </div>

      <MetaSection />

      <Button onClick={handleIsSortable}>Sortable</Button>
      {isSortable ? <SortableDynamicArray form={form} /> : <RichDynamicArray />}

      <Row>
        <Col span={24}>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Submit
          </Button>
        </Col>
      </Row>

      <div style={{ marginTop: "32px" }}>
        <h5>Submit Data:</h5>
        <pre>{JSON.stringify(value, null, 2)}</pre>
      </div>
    </Form>
  );
};

export default FormPage;
