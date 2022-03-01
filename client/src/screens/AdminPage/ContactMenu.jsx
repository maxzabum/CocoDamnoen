import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import EditableTable from "../../components/Table/Table";
import { useForm, Controller } from "react-hook-form";
import {
  Modal,
  Button as ButtonAntd,
  Upload,
  Image,
  Row,
  Col,
  message,
} from "antd";
import InputText from "../../components/InputText/InputText";

const ContactMenu = ({ token }) => {
  const [contactData, setContactData] = useState();
  useEffect(() => {
    fetchContact();
  }, []);

  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      address: contactData ? contactData.address : "",
      phone: "",
      mail: "",
      facebook: "",
      twitter: "",
      line: "",
      instagram: "",
    },
  });
  const fetchContact = async () => {
    axios
      .get("https://cocodamnoenclone.herokuapp.com/api/v1/contact")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setContactData(response.data[0]);
        const _data = response.data[0];
        setValue("address", _data.address);
        setValue("phone", _data.phone);
        setValue("twitter", _data.twitter);
        setValue("mail", _data.mail);
        setValue("line", _data.line);
        setValue("facebook", _data.facebook);
        setValue("instagram", _data.instagram);
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
  const onSubmit = async (data) => {
    console.log(data);
    axios
      .put(
        `https://cocodamnoenclone.herokuapp.com/api/v1/contact/update-contact/${contactData._id}`,
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
        fetchContact();
        // reset();
        // setVisible(false);
        // setConfirmLoading(false);
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  return (
    <div className="menu-content-container">
      <p className="text-header">Products</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        id="user-form"
        className="form-container"
      >
        <Row gutter={24}>
          <Col className="gutter-row" sm={24} lg={12}>
            <Controller
              name="address"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <InputText
                  {...field}
                  label={"Address"}
                  error={errors.address}
                  placeholder={"address field"}
                  onChange={field.onChange}
                  type={"text"}
                  value={field.value}
                />
              )}
            />
          </Col>
          <Col className="gutter-row" sm={24} lg={12}>
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
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" sm={24} lg={12}>
            <Controller
              name="mail"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <InputText
                  {...field}
                  label={"Email"}
                  error={errors.mail}
                  placeholder={"Email field"}
                  onChange={field.onChange}
                  type={"text"}
                />
              )}
            />
          </Col>
          <Col className="gutter-row" sm={24} lg={12}>
            <Controller
              name="facebook"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <InputText
                  {...field}
                  label={"Facebook"}
                  error={errors.facebook}
                  placeholder={"facebook field"}
                  onChange={field.onChange}
                  type={"text"}
                />
              )}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" sm={24} lg={12}>
            <Controller
              name="twitter"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <InputText
                  {...field}
                  label={"Twitter"}
                  error={errors.twitter}
                  placeholder={"twitter field"}
                  onChange={field.onChange}
                  type={"text"}
                />
              )}
            />
          </Col>
          <Col className="gutter-row" sm={24} lg={12}>
            <Controller
              name="line"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <InputText
                  {...field}
                  label={"Line"}
                  error={errors.line}
                  placeholder={"line field"}
                  onChange={field.onChange}
                  type={"text"}
                />
              )}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" sm={24} lg={12}>
            <Controller
              name="instagram"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <InputText
                  {...field}
                  label={"Instagram"}
                  error={errors.instagram}
                  placeholder={"instagram field"}
                  onChange={field.onChange}
                  type={"text"}
                />
              )}
            />
          </Col>
        </Row>
        <Button label="Save" color={"red"} type={"submit"} />
      </form>
    </div>
  );
};

export default ContactMenu;
