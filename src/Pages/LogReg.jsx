import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logUser, regUser } from "./redux/actions";
import { Button, Checkbox, Form, Input } from 'antd';
import Link from "antd/es/typography/Link";

const LogReg = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsopen] = useState(false);
  const [isRegister, setIsRegister] = useState(true);
  const [sign, setSign] = useState("login");

  const user = useSelector((state) => console.log("hh",state.email));
  

  const login = async (values) => { 
    console.log('lo',values)
    const res=await axios.post('http://localhost:5000/logreg/login',values);   
    dispatch(logUser(res.headers));
  };

  const register = async (values) => {
    console.log('reg',values)
      const res=await axios.post('http://localhost:5000/logreg/register',values);       
      dispatch(regUser(res.headers));
  };

  const toggle = () => {
    setIsRegister(!isRegister);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onFinish =async (values) => {
    console.log('Success:', values);
    if (isRegister) await register(values);
    else await login(values);
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
       {isRegister && <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: isRegister? true:false,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
       }

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { type:'email',
              required: true,
              message: "Please input your valid email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>      

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
             {isRegister?"Register":"Login"}
          </Button>
        </Form.Item>
      </Form>

      <Link type="link" style={{color:"blue"}} onClick={()=>setIsRegister(!isRegister)} htmlType="submit">
      {isRegister?"Login?":"Register?"}
      </Link>
    </div>
  );
};

export default LogReg;
