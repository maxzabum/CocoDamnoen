import React from 'react';
import { Input } from 'antd';
import './index.css'
const InputText = ({ label, error, onChange, placeholder, value }) => {
    return <div className='input-text-container'>
        <p className="text-label">{label}</p>
        <Input placeholder="Basic usage" onChange={onChange} value={value} className={`input-text ${error ? 'error' : ''}`} />
        {error && <p className='text-input-error'>please input require field</p>}
    </div>;
};

export default InputText;
