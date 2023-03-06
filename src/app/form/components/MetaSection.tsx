import { Form, Input, InputNumber, Space } from "antd";

import NumericFormatInput from "app/form/components/NumericFormatInput";

const MetaSection = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input placeholder="Insert name" />
      </Form.Item>

      <Form.Item
        name="value"
        label="Value"
        rules={[{ required: true, type: "number", min: 0, max: 10000 }]}
      >
        <InputNumber
          placeholder="Insert value"
          type="number"
          style={{ width: "100%" }}
        />
      </Form.Item>

      <Form.Item
        name="price"
        label="Price"
        rules={[{ required: true, type: "number", min: 0 }]}
      >
        <NumericFormatInput addonBefore="Rp" placeholder="Insert price here" />
      </Form.Item>
    </Space>
  );
};

export default MetaSection;
