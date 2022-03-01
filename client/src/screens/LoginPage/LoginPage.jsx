import axios from "axios";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "../../components/Button/Button";
import InputText from "../../components/InputText/InputText";
import LogoImage from "../../images/logo.png";
import LoginImage from "../../images/nipanan-lifestyle-pV2xU2rP580-unsplash.jpg";
import { useHistory } from "react-router-dom";
import Cookie from "cookie-universal";

import "./index.css";

const LoginPage = () => {
  const history = useHistory();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    const cookies = Cookie();
    axios
      .post(`https://cocodamnoenclone.herokuapp.com/user/login`, data)
      .then(function (response) {
        // handle success
        cookies.set("token", response.data.token);
        history.push("/admin");
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
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="left-container">
        <img src={LogoImage} alt="img-logo" />
        <div className="input-login-container">
          <Controller
            name="username"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                label="Username"
                placeholder={"username"}
                value={value}
                onChange={onChange}
                error={errors.username}
                type="text"
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                label="Password"
                placeholder={"password"}
                value={value}
                onChange={onChange}
                error={errors.password}
                type="password"
              />
            )}
          />
          <Button label={"Login"} type="submit">
            Login
          </Button>
        </div>
      </form>

      <div className="right-container">
        <img src={LoginImage} alt="img-login" />
      </div>
    </div>
  );
};

export default LoginPage;
