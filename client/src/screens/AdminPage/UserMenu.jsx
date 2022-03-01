import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import EditableTable from "../../components/Table/Table";
import { useForm, Controller } from "react-hook-form";
import { Modal, Button as ButtonAntd, message } from "antd";
import InputText from "../../components/InputText/InputText";
const UserMenu = ({ token }) => {
  const [userData, setUserData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      name: "",
      lastname: "",
      role: "",
      phone: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  useEffect(() => {
    fetchUser();
  }, []);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = async (data) => {
    console.log(data);
    setConfirmLoading(true);
    axios
      .post(
        `https://cocodamnoenclone.herokuapp.com/api/v1/user/create-user`,
        data,
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
    // setTimeout(() => {
    //   setVisible(false);
    //   setConfirmLoading(false);
    // }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  const fieldValue = {
    username: "",
    name: "",
    lastname: "",
    role: "",
    phone: "",
  };
  const userColumns = [
    {
      title: "Username",
      dataIndex: "username",

      width: "25%",
      editable: true,
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "25%",
      editable: true,
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      width: "25%",
      editable: true,
    },
    {
      title: "Role",
      dataIndex: "role",
      width: "10%",
      editable: true,
    },
    {
      title: "Phone No.",
      type: "number",
      dataIndex: "phone",
      width: "15%",
      editable: true,
    },
  ];
  const fetchUser = async () => {
    axios
      .get("https://cocodamnoenclone.herokuapp.com/api/v1/user")
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
  const success = (label) => {
    message.success(`${label} item success.`, 10);
  };
  const error = () => {
    message.error("Something worng. Please try again.", 10);
  };
  return (
    <div className="menu-content-container">
      <p className="text-header">User</p>
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
            name="username"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <InputText
                {...field}
                label={"username"}
                error={errors.username}
                placeholder={"username field"}
                onChange={field.onChange}
                type={"text"}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <InputText
                {...field}
                label={"password"}
                error={errors.password}
                placeholder={"password field"}
                onChange={field.onChange}
                type={"password"}
              />
            )}
          />
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <InputText
                {...field}
                label={"First name"}
                error={errors.name}
                placeholder={"first name field"}
                onChange={field.onChange}
                type={"text"}
              />
            )}
          />
          <Controller
            name="lastname"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <InputText
                {...field}
                label={"Last name"}
                error={errors.lastname}
                placeholder={"last name field"}
                onChange={field.onChange}
                type={"text"}
              />
            )}
          />
          <Controller
            name="role"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <InputText
                {...field}
                label={"Role"}
                error={errors.role}
                placeholder={"role field"}
                onChange={field.onChange}
                type={"text"}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <InputText
                {...field}
                label={"Phone"}
                error={errors.phone}
                placeholder={"phone field"}
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
          "https://cocodamnoenclone.herokuapp.com/api/v1/user/update-user/"
        }
        apiDelete={
          "https://cocodamnoenclone.herokuapp.com/api/v1/user/delete-user/"
        }
        token={token}
        success={success}
        error={error}
      />
    </div>
  );
};

export default UserMenu;
