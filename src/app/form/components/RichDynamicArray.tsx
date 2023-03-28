import { Button, Form, Popconfirm, Select, Space, Table } from "antd";

import NumericFormatInput from "app/form/components/NumericFormatInput";
import { typeOptions } from "app/form/constants";

import styles from "./styles.module.css";

const fieldPrefix = "configurations";
const validNumberMsg = "Value must be filled and above 0";

const RichDynamicArray = () => {
  return (
    <Space
      direction="vertical"
      size="small"
      className={styles["configuration-fields"]}
    >
      <h4>Configurations</h4>

      <Form.List
        name={fieldPrefix}
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
                          message: validNumberMsg,
                        },
                      ]}
                    >
                      <NumericFormatInput />
                    </Form.Item>
                  )}
                />
                <Table.Column
                  title="Min"
                  render={(field) => (
                    <Form.Item
                      {...field}
                      name={[field.name, "min"]}
                      dependencies={[[fieldPrefix, field.name, "max"]]}
                      rules={[
                        {
                          required: true,
                          type: "number",
                          min: 0,
                          message: validNumberMsg,
                        },
                        (formInstance) => ({
                          message: "Min must not be greater than max",
                          // eslint-disable-next-line @typescript-eslint/no-unused-vars
                          validator: async (_, value) => {
                            const max = formInstance.getFieldValue([
                              fieldPrefix,
                              field.name,
                              "max",
                            ]);
                            if (value > max) {
                              return Promise.reject(
                                new Error("Min must not be greater than max")
                              );
                            }
                            return Promise.resolve();
                          },
                        }),
                      ]}
                    >
                      <NumericFormatInput />
                    </Form.Item>
                  )}
                />
                <Table.Column
                  title="Max"
                  render={(field) => (
                    <Form.Item
                      {...field}
                      name={[field.name, "max"]}
                      rules={[
                        {
                          required: true,
                          type: "number",
                          min: 0,
                          message: validNumberMsg,
                        },
                      ]}
                    >
                      <NumericFormatInput />
                    </Form.Item>
                  )}
                />
                <Table.Column
                  render={(_, __, idx) => (
                    <Popconfirm
                      placement="leftTop"
                      title="Are you sure to remove this item?"
                      onConfirm={removeRow(idx)}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Button>Remove</Button>
                    </Popconfirm>
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
