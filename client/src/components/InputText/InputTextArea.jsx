import React from 'react';
import { Input } from 'antd';

const InputTextArea = () => {
    const { TextArea } = Input;
    return <div><TextArea rows={4} /></div>;
};

export default InputTextArea;
