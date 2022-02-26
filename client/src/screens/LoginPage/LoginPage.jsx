import React from 'react';
import { useForm, Controller } from "react-hook-form";
import InputText from '../../components/InputText/InputText';
import LogoImage from '../../images/logo.png';
import LoginImage from '../../images/nipanan-lifestyle-pV2xU2rP580-unsplash.jpg';
import './index.css'


const LoginPage = () => {
    const { handleSubmit, control, reset, formState: { errors } } = useForm({
        defaultValues: {
            username: "",
            password: ""
        }
    });
    const onSubmit = data => console.log(data);
    return <div className='login-container'>
        <form onSubmit={handleSubmit(onSubmit)} className='left-container'>

            <img src={LogoImage} alt="img-logo" />
            <div className="input-login-container">
                <Controller
                    name="username"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) =>
                        <InputText label="Username"
                            placeholder={"username"}
                            value={value}
                            onChange={onChange}
                            error={errors.username}
                        />
                    }
                />
                <Controller
                    name="password"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) =>
                        <InputText
                            label="Password"
                            placeholder={"password"}
                            value={value}
                            onChange={onChange}
                            error={errors.password}
                        />
                    }
                />
                <button type="submit" >Login</button>

            </div>
        </form>

        <div className="right-container">
            <img src={LoginImage} alt="img-login" />
        </div>
    </div>;
};

export default LoginPage;
