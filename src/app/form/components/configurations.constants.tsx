import type { ProColumns } from "@ant-design/pro-components";
import type { FormListFieldData } from "antd";
import { Button, Form, Popconfirm, Select } from "antd";
import type { ColumnsType } from "antd/es/table";

import NumericFormatInput from "app/form/components/NumericFormatInput";
import { typeOptions } from "app/form/constants";

export const fieldPrefix = "configurations";
const validNumberMsg = "Value must be filled and above 0";

type ConfigurationColumnsParams = {
  isSortable?: boolean;
  removeRow: (index: number) => () => void;
};

type TableColumns = ColumnsType<FormListFieldData>;
export type ProTableColumns = Array<ProColumns<FormListFieldData, "text">>;

export const configurationColumns = ({
  isSortable = false,
  removeRow,
}: ConfigurationColumnsParams): TableColumns => [
  ...(isSortable
    ? [
        {
          dataIndex: "sort",
          className: "drag-visible",
        },
      ]
    : []),
  {
    render: (_, __, index) => index + 1,
  },
  {
    title: "Type",
    render: (field) => (
      <Form.Item
        {...field}
        name={[field.name, "type"]}
        rules={[{ required: true, message: "Type must be selected" }]}
      >
        <Select
          options={typeOptions}
          placeholder="Choose type"
          style={{ width: "100%" }}
        />
      </Form.Item>
    ),
  },
  {
    title: "Value",
    render: (field) => (
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
    ),
  },
  {
    title: "Min",
    render: (field) => (
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
    ),
  },
  {
    title: "Max",
    render: (field) => (
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
    ),
  },
  {
    render: (_, __, idx) => (
      <Popconfirm
        placement="leftTop"
        title="Are you sure to remove this item?"
        onConfirm={removeRow(idx)}
        okText="Yes"
        cancelText="No"
      >
        <Button>Remove</Button>
      </Popconfirm>
    ),
  },
];
