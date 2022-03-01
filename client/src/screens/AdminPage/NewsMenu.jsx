import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import EditableTable from "../../components/Table/Table";
import { useForm, Controller } from "react-hook-form";
import { Modal, Button as ButtonAntd, Upload, Image, message } from "antd";
import InputText from "../../components/InputText/InputText";

const NewsMenu = ({ token }) => {
  const [userData, setUserData] = useState([]);
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      type: "",
      image: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  useEffect(() => {
    fetchUser();
  }, []);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  const showModal = () => {
    setVisible(true);
  };
  const success = (label) => {
    message.success(`${label} item success.`, 10);
  };
  const error = () => {
    message.error("Something worng. Please try again.", 10);
  };
  const handleOk = async (data) => {
    let form = new FormData();
    form.append("image", data.image);
    form.append("description", data.description);
    form.append("title", data.title);
    form.append("type", data.type);
    console.log(data, form);

    setConfirmLoading(true);
    axios
      .post(
        `https://cocodamnoenclone.herokuapp.com/api/v1/news/create-news`,
        form,
        {
          headers: {
            "x-access-token": token,
          },
        }
      )
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          success("Add");
        } else {
          error();
        }
        console.log(response);
        fetchUser();
        reset();
        setVisible(false);
        setConfirmLoading(false);
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  const fieldValue = {
    title: "",
    description: "",
    type: "",
    image: "",
  };
  const userColumns = [
    {
      title: "Title",
      dataIndex: "title",

      width: "25%",
      editable: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      width: "25%",
      editable: true,
    },
    {
      title: "Type",
      dataIndex: "type",
      width: "25%",
      editable: true,
    },
    {
      title: "Image",
      dataIndex: "image",
      width: "10%",
      type: "image",
      render: (image) => (
        <Image
          width={100}
          src={`https://cocodamnoenclone.herokuapp.com/api/v1/${image}`}
        />
      ),
      editable: true,
    },
  ];
  const fetchUser = async () => {
    axios
      .get("https://cocodamnoenclone.herokuapp.com/api/v1/news")
      .then(function (response) {
        // handle success
        console.log(response.data);
        if (response.data) {
          const results = response.data.map((row) => ({
            key: row._id,
            ...row,
          }));
          console.log("results", results);
          setUserData([...results]);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  return (
    <div className="menu-content-container">
      <p className="text-header">Products</p>
      <Button label="Add" color={"red"} onClick={showModal} type={"button"} />
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={[
          <ButtonAntd
            form="user-form"
            key="submit"
            htmlType="submit"
            loading={confirmLoading}
          >
            Add
          </ButtonAntd>,
          <ButtonAntd form="user-form" onClick={() => reset()}>
            Reset
          </ButtonAntd>,
        ]}
      >
        <form
          onSubmit={handleSubmit(handleOk)}
          id="user-form"
          className="form-container"
        >
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <InputText
                {...field}
                label={"Title"}
                error={errors.title}
                placeholder={"username field"}
                onChange={field.onChange}
                type={"text"}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <InputText
                {...field}
                label={"Description"}
                error={errors.description}
                placeholder={"password field"}
                onChange={field.onChange}
                type={"text"}
              />
            )}
          />
          <Controller
            name="image"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
              <div className="upload-form-container">
                <p className="text-label">Image</p>
                <Upload
                  beforeUpload={() => false}
                  listType="picture-card"
                  fileList={fileList}
                  onChange={(res) => {
                    const _fileList = res.fileList;
                    // _fileList.push(res.file);

                    setFileList([..._fileList]);
                    if (_fileList.length > 0) {
                      // var reader = new FileReader();
                      // reader.readAsDataURL(res.file);
                      // reader.onload = function () {
                      onChange(_fileList[0].originFileObj);
                      // };
                      // reader.onerror = function (error) {
                      //   console.log("Error: ", error);
                      // };
                    } else {
                      onChange("");
                    }
                  }}
                  onPreview={onPreview}
                >
                  {fileList.length < 1 && "+ Upload"}
                </Upload>
              </div>
            )}
          />
          <Controller
            name="type"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <InputText
                {...field}
                label={"Type"}
                error={errors.type}
                placeholder={"last name field"}
                onChange={field.onChange}
                type={"text"}
              />
            )}
          />
        </form>
      </Modal>
      <EditableTable
        columnsT={userColumns}
        datas={userData}
        field={fieldValue}
        apiUpdate={
          "https://cocodamnoenclone.herokuapp.com/api/v1/news/update-news/"
        }
        apiDelete={
          "https://cocodamnoenclone.herokuapp.com/api/v1/news/delete-news/"
        }
        token={token}
        success={success}
        error={error}
      />
    </div>
  );
};

export default NewsMenu;
