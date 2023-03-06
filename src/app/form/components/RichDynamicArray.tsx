import { Button, Form, Select, Space, Table } from "antd";

import NumericFormatInput from "app/form/components/NumericFormatInput";
import { typeOptions } from "app/form/constants";

const RichDynamicArray = () => {
  return (
    <Space direction="vertical" size="small">
      <h4>Configurations</h4>

      <Form.List
        name="configurations"
        rules={[
          {
            validator: async (_, value) => {
              if (!value?.length) {
                return Promise.reject(new Error("At least 1 configuration"));
              }
              return true;
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => {
          const handleAdd = () => {
            const newRow = {
              type: undefined,
              value: 0,
            };
            add(newRow);
          };
          const removeRow = (index: number) => () => {
            remove(index);
          };

          return (
            <Space direction="vertical" size="small" style={{ width: "100%" }}>
              <Table dataSource={fields} rowKey="key" pagination={false}>
                <Table.Column render={(_, __, idx) => idx + 1} />
                <Table.Column
                  title="Type"
                  render={(field) => (
                    <Form.Item
                      {...field}
                      name={[field.name, "type"]}
                      rules={[
                        { required: true, message: "Type must be selected" },
                      ]}
                      noStyle
                    >
                      <Select
                        options={typeOptions}
                        placeholder="Choose type"
                        style={{ width: "100%" }}
                      />
                    </Form.Item>
                  )}
                />
                <Table.Column
                  title="Value"
                  render={(field) => (
                    <Form.Item
                      {...field}
                      name={[field.name, "value"]}
                      rules={[
                        {
                          required: true,
                          type: "number",
                          min: 0,
                          message: "Value must be filled and above 0",
                        },
                      ]}
                      noStyle
                    >
                      <NumericFormatInput />
                    </Form.Item>
                  )}
                />
                <Table.Column
                  render={(_, __, idx) => (
                    <Button onClick={removeRow(idx)}>Remove</Button>
                  )}
                />
              </Table>

              <Form.ErrorList errors={errors} />

              <Button onClick={handleAdd}>Add</Button>
            </Space>
          );
        }}
      </Form.List>
    </Space>
  );
};

export default RichDynamicArray;
