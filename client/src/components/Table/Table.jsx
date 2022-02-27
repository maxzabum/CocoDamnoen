import React, { useState, useEffect } from "react";
import {
  Table,
  Input,
  InputNumber,
  Popconfirm,
  Form,
  Typography,
  Modal,
  Button,
  Space,
} from "antd";
import axios from "axios";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const originData = [];

for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = ({ columnsT, datas, field, apiUpdate, apiDelete }) => {
  const [form] = Form.useForm();
  const [data, setData] = useState(datas);
  const [editingKey, setEditingKey] = useState("");

  useEffect(() => {
    setData([...datas]);
  }, [datas]);
  const { confirm } = Modal;

  const isEditing = (record) => {
    // console.log("record", record.key, editingKey);
    return record.key === editingKey;
  };

  const edit = (record) => {
    const ss = {
      name: "",
      age: "",
      address: "",
    };
    form.setFieldsValue({
      ...field,
      ...record,
    });
    setEditingKey(record.key);
  };
  const deleteItem = async (record) => {
    confirm({
      title: "Do you want to delete these items?",
      icon: <ExclamationCircleOutlined />,
      content:
        "When clicked the OK button, this dialog will be closed after 1 second",
      onOk() {
        axios
          .delete(`${apiDelete}${record.key}`, {
            headers: {
              "x-access-token":
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjIwOTA4NDZiY2ZjNzYwYWUwMjU4NTlkIiwidXNlcm5hbWUiOiJhYWEiLCJpYXQiOjE2NDU5NDQyOTYsImV4cCI6MTY0NTk1MTQ5Nn0.3BO1ecoeDK9PL1QXvn_cfuCek7dbxyx2brGr--aHDdg",
            },
          })
          .then(function (response) {
            const _data = data.filter((_data) => _data.key !== record.key);
            setData([..._data]);
            // handle success
            // console.log(response.data);
          })
          .catch(function (error) {
            // handle error
            // console.log(error);
          })
          .then(function () {
            // always executed
          });
      },
      onCancel() {},
    });
  };

  const cancel = () => {
    setEditingKey("");
  };
  const saveToApi = async (key, index) => {
    // console.log("index", index);
    axios
      .put(`${apiUpdate}${key}`, index, {
        headers: {
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjIwOTA4NDZiY2ZjNzYwYWUwMjU4NTlkIiwidXNlcm5hbWUiOiJhYWEiLCJpYXQiOjE2NDU5NDQyOTYsImV4cCI6MTY0NTk1MTQ5Nn0.3BO1ecoeDK9PL1QXvn_cfuCek7dbxyx2brGr--aHDdg",
        },
      })
      .then(function (response) {
        // handle success
        // console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        // console.log("item", row);
        saveToApi(item.key, row);
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      // console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    ...columnsT,
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        // console.log("recordddd", record, editable);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <span>
            <Typography.Link
              disabled={editingKey !== ""}
              style={{
                marginRight: 8,
              }}
              onClick={() => edit(record)}
            >
              Edit
            </Typography.Link>
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => deleteItem(record)}
            >
              Delete
            </Typography.Link>
          </span>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    // console.log("mergedColumns");
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.type === "number" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={columns.map((col) => {
          if (!col.editable) {
            return col;
          }
          // console.log("mergedColumns");
          return {
            ...col,
            onCell: (record) => ({
              record,
              inputType: col.type === "number" ? "number" : "text",
              dataIndex: col.dataIndex,
              title: col.title,
              editing: isEditing(record),
            }),
          };
        })}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};
export default EditableTable;
