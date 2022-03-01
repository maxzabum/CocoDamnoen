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
  Upload,
  message,
} from "antd";
import axios from "axios";
import { ExclamationCircleOutlined, UploadOutlined } from "@ant-design/icons";

const EditableCell = ({
  editing,
  type,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const props = {
    name: "file",
    beforeUpload: () => false,
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  let inputNode;
  if (type === undefined) {
    inputNode = <Input />;
  } else if (type === "number") {
    inputNode = <InputNumber />;
  } else if (type === "image") {
    inputNode = (
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    );
  }
  console.log("fdsfsdf", type);
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

const EditableTable = ({
  columnsT,
  datas,
  field,
  apiUpdate,
  apiDelete,
  token,
  success,
  error,
}) => {
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
              "x-access-token": token,
            },
          })
          .then(function (response) {
            if (response.status === 200) {
              success("Delete");
            } else {
              error();
            }
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
    // console.log("index", index.image.fileList[0].originFileObj);
    let form = new FormData();
    for (const [key, value] of Object.entries(index)) {
      console.log(`${key}: ${value}`);
      if (key === "image") {
        if (index[key].fileList !== undefined) {
          const _file = index[key].fileList[0].originFileObj;
          form.append(key, _file);
        }
      } else {
        form.append(key, value);
      }
    }
    // form.append("image", data.image);
    // form.append("description", data.description);
    // form.append("title", data.title);
    // form.append("type", data.type);
    axios
      .put(`${apiUpdate}${key}`, form, {
        headers: {
          "x-access-token": token,
        },
      })
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          success("Update");
        } else {
          error();
        }
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
      let row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      console.log("rowrow", row);

      // if (row.image !== undefined) {
      //   row.image = row.image.fileList[0].originFileObj;
      // }
      // console.log("rowrow", row);

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
              type: col.type,
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
