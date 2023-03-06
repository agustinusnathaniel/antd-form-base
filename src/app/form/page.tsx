"use client";

import { Outfit } from "@next/font/google";
import { Button, Col, Divider, Form, Row } from "antd";

import MetaSection from "app/form/components/MetaSection";
import RichDynamicArray from "app/form/components/RichDynamicArray";
import { useFormPage } from "app/form/hooks";
import styles from "lib/styles/Home.module.css";

const outfit = Outfit({ subsets: ["latin"] });

const validateMessages = {
  // eslint-disable-next-line no-template-curly-in-string
  required: "${label} must be filled",
};

const FormPage = () => {
  const { form, value, handleInvalidForm, handleSubmitForm } = useFormPage();

  return (
    <main className={`${styles.main} ${outfit.className}`}>
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
        }}
        validateMessages={validateMessages}
      >
        <div>
          <h4>Antd Form Example</h4>
          <Divider />
        </div>

        <MetaSection />

        <RichDynamicArray />

        <Row>
          <Col span={24}>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>

      <div style={{ marginTop: "32px" }}>
        <h5>Submit Data:</h5>
        <pre>{JSON.stringify(value, null, 2)}</pre>
      </div>
    </main>
  );
};

export default FormPage;
